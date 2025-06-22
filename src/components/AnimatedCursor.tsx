
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Function to add hover listeners to all interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
      interactiveElements.forEach((el) => {
        // Remove existing listeners to prevent duplicates
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        // Add new listeners
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initial setup
    window.addEventListener("mousemove", updateMousePosition);
    addHoverListeners();

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Also re-add listeners on route changes (for SPA navigation)
    const handleRouteChange = () => {
      setTimeout(addHoverListeners, 100); // Small delay to ensure DOM is updated
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("popstate", handleRouteChange);
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
