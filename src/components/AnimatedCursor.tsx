
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      console.log("Mouse entered interactive element");
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      console.log("Mouse left interactive element");
      setIsHovering(false);
    };

    // Function to add hover listeners to all interactive elements
    const addHoverListeners = () => {
      // More comprehensive selector for interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], .cursor-pointer, input[type='button'], input[type='submit'], [tabindex='0'], .hover\\:scale-105, .hover\\:scale-110, .hover\\:scale-\\[1\\.02\\]"
      );
      
      console.log(`Found ${interactiveElements.length} interactive elements`);
      
      interactiveElements.forEach((el, index) => {
        // Remove existing listeners to prevent duplicates
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        // Add new listeners
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
        
        console.log(`Added listeners to element ${index + 1}:`, el.tagName, el.className);
      });
    };

    // Initial setup
    window.addEventListener("mousemove", updateMousePosition);
    
    // Add listeners with a small delay to ensure DOM is ready
    setTimeout(addHoverListeners, 100);

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              // Check if the added node or its children contain interactive elements
              if (element.matches("a, button, [role='button'], .cursor-pointer") || 
                  element.querySelector("a, button, [role='button'], .cursor-pointer")) {
                shouldUpdate = true;
              }
            }
          });
        }
      });
      
      if (shouldUpdate) {
        console.log("DOM changed, updating hover listeners");
        setTimeout(addHoverListeners, 50);
      }
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Also re-add listeners on route changes (for SPA navigation)
    const handleRouteChange = () => {
      console.log("Route changed, updating hover listeners");
      setTimeout(addHoverListeners, 200); // Increased delay for route changes
    };

    // Listen for both popstate and custom navigation events
    window.addEventListener("popstate", handleRouteChange);
    
    // Also listen for hash changes and custom events
    window.addEventListener("hashchange", handleRouteChange);
    
    // For React Router, we can also listen for the custom navigation
    const handleNavigation = () => {
      setTimeout(addHoverListeners, 300);
    };
    
    // Add a global listener that can be triggered manually
    window.addEventListener("cursor-refresh", handleNavigation);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("cursor-refresh", handleNavigation);
      observer.disconnect();
      
      // Clean up hover listeners
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-50 mix-blend-difference custom-cursor"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-400 rounded-full pointer-events-none z-50 custom-cursor"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
