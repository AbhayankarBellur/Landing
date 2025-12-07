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

  // Transform values for the animation
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [80, 0, 0, 0, -80]
  );

  const isTitle = index === 0;

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center px-6 md:px-12"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl mx-auto text-center"
      >
        {isTitle ? (
          <h1 className="scrolly-title text-shadow-strong text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
            {text}
          </h1>
        ) : (
          <p className="scrolly-text text-shadow-soft text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
            {text}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ScrollySection;
