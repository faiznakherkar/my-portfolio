
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "" 
}: ScrollRevealProps) => {
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
