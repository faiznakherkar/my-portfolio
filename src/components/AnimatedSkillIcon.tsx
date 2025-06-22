
import { motion } from "framer-motion";

interface AnimatedSkillIconProps {
  icon: string;
  name: string;
  delay?: number;
}

const AnimatedSkillIcon = ({ icon, name, delay = 0 }: AnimatedSkillIconProps) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      className="flex flex-col items-center gap-2 p-4 rounded-lg glass-card group cursor-pointer"
    >
      <motion.span 
        className="text-3xl"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.span>
      <span className="text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default AnimatedSkillIcon;
