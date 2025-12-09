import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollySectionProps {
  text: string;
  index: number;
  totalSections: number;
}

const ScrollySection = ({ text, index, totalSections }: ScrollySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade in as section enters, stay visible, fade out as it leaves
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 1, 1, 1, 0]
  );

  const isTitle = index === 0;

  return (
    <>
      {/* Scroll trigger area - this moves through viewport */}
      <div ref={ref} className="h-screen" />
      
      {/* Fixed centered text - doesn't move, only fades */}
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto text-center">
          {isTitle ? (
            <h1 className="scrolly-title text-shadow-strong text-xl sm:text-2xl md:text-3xl lg:text-5xl text-foreground font-bold leading-tight">
              {text}
            </h1>
          ) : (
            <p className="scrolly-text text-shadow-soft text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
              {text}
            </p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ScrollySection;