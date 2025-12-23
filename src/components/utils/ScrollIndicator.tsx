import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 sm:gap-2"
    >
      <span className="text-foreground/70 text-xs sm:text-sm tracking-widest uppercase font-display">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/50 rounded-full flex justify-center pt-1.5 sm:pt-2"
      >
        <motion.div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-foreground/70 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
