
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
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Function to add hover listeners to all interactive elements
    const addHoverListeners = () => {
      // Remove all existing listeners first to prevent duplicates
      const existingElements = document.querySelectorAll('[data-cursor-listener]');
      existingElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeAttribute('data-cursor-listener');
      });

      // Comprehensive selector for interactive elements
      const interactiveElements = document.querySelectorAll(`
        a, button, [role='button'], input[type='button'], input[type='submit'],
        .cursor-pointer, [tabindex='0'], [data-framer-component-type],
        .glass-card, .group, [class*='hover:'], [class*='transition'],
        .badge, .card, nav a, nav button, .nav-link, .menu-item,
        [data-motion-component], [data-testid], .clickable,
        .hover\\:scale-105, .hover\\:scale-110, .hover\\:scale-\\[1\\.02\\],
        [class*='motion'], .animated, .interactive
      `);
      
      interactiveElements.forEach((el) => {
        // Add marker to track which elements have listeners
        el.setAttribute('data-cursor-listener', 'true');
        el.addEventListener("mouseenter", handleMouseEnter, { passive: true });
        el.addEventListener("mouseleave", handleMouseLeave, { passive: true });
      });
    };

    // Initial setup
    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    
    // Add listeners immediately and after DOM ready
    addHoverListeners();
    setTimeout(addHoverListeners, 100);

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldUpdate = true;
        }
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'class' || mutation.attributeName === 'role')) {
          shouldUpdate = true;
        }
      });
      
      if (shouldUpdate) {
        // Debounce the updates
        setTimeout(addHoverListeners, 50);
      }
    });

    // Start observing with more comprehensive options
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'role', 'tabindex']
    });

    // Handle route changes and page navigation
    const handlePageChange = () => {
      setTimeout(addHoverListeners, 100);
    };

    // Listen for various navigation events
    window.addEventListener("popstate", handlePageChange);
    window.addEventListener("hashchange", handlePageChange);
    window.addEventListener("load", handlePageChange);
    
    // Custom event for manual refresh
    window.addEventListener("cursor-refresh", handlePageChange);

    // Handle focus changes that might indicate new interactive elements
    const handleFocusChange = () => {
      setTimeout(addHoverListeners, 10);
    };
    
    document.addEventListener("focus", handleFocusChange, true);
    document.addEventListener("blur", handleFocusChange, true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("popstate", handlePageChange);
      window.removeEventListener("hashchange", handlePageChange);
      window.removeEventListener("load", handlePageChange);
      window.removeEventListener("cursor-refresh", handlePageChange);
      document.removeEventListener("focus", handleFocusChange, true);
      document.removeEventListener("blur", handleFocusChange, true);
      observer.disconnect();
      
      // Clean up all hover listeners
      const elementsWithListeners = document.querySelectorAll('[data-cursor-listener]');
      elementsWithListeners.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeAttribute('data-cursor-listener');
      });
    };
  }, []);

  return (
    <>
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-2 border-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "#60a5fa" : "#3b82f6",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.4,
        }}
      />
      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
