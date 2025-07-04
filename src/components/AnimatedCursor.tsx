
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Function to add hover listeners to all interactive elements
    const addHoverListeners = () => {
      // Remove existing listeners first
      const existingElements = document.querySelectorAll("[data-cursor-listener]");
      existingElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeAttribute("data-cursor-listener");
      });

      // Add listeners to all interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], .cursor-pointer, input[type='button'], input[type='submit'], [tabindex='0'], .hover\\:scale-105, .hover\\:scale-110, .hover\\:scale-\\[1\\.02\\]"
      );
      
      console.log(`Found ${interactiveElements.length} interactive elements on ${location.pathname}`);
      
      interactiveElements.forEach((el, index) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
        el.setAttribute("data-cursor-listener", "true");
        
        console.log(`Added listeners to element ${index + 1}:`, el.tagName, el.className);
      });
    };

    // Initial setup
    window.addEventListener("mousemove", updateMousePosition);
    
    // Add listeners with multiple delays to ensure all elements are caught
    const timeouts = [
      setTimeout(addHoverListeners, 100),
      setTimeout(addHoverListeners, 300),
      setTimeout(addHoverListeners, 500)
    ];

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldUpdate = true;
        }
      });
      
      if (shouldUpdate) {
        console.log("DOM changed, updating hover listeners");
        setTimeout(addHoverListeners, 100);
      }
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      observer.disconnect();
      timeouts.forEach(clearTimeout);
      
      // Clean up hover listeners
      const elementsWithListeners = document.querySelectorAll("[data-cursor-listener]");
      elementsWithListeners.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeAttribute("data-cursor-listener");
      });
    };
  }, [location.pathname]); // Re-run when route changes

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
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
        className="fixed top-0 left-0 w-1 h-1 bg-blue-400 rounded-full pointer-events-none z-[9999]"
        style={{ 
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
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
