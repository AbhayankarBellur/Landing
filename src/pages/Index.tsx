import { motion, useScroll, useTransform } from "framer-motion";
import VideoBackground from "@/components/VideoBackground";
import ScrollySection from "@/components/ScrollySection";
import ScrollIndicator from "@/components/ScrollIndicator";

const scrollyContent = [
  "Adoption Centre Compatibility & Support",
  "At Warmpawz, our approach extends beyond services — we help pet parents find the right match through our compassionate Adoption Centre.",
  "Every pet profile highlights temperament, history, and care needs, allowing families to understand compatibility before taking the next step.",
  "Our team supports you through the entire process with transparent guidance, emotional readiness checks, and post-adoption care resources,",
  "ensuring every pet transitions into a safe, loving, and well-matched home.",
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  // Hide scroll indicator after user starts scrolling
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    [1, 0]
  );

  return (
    <main className="relative">
      {/* Fixed Video Background */}
      <VideoBackground videoSrc="/videos/adoption-video.mp4" />
      
      {/* Scroll Indicator - only visible at top */}
      <motion.div style={{ opacity: scrollIndicatorOpacity }}>
        <ScrollIndicator />
      </motion.div>
      
      {/* Initial spacer - video plays without text */}
      <div className="h-screen" />
      
      {/* Scrolly Sections */}
      {scrollyContent.map((text, index) => (
        <ScrollySection
          key={index}
          text={text}
          index={index}
          totalSections={scrollyContent.length}
        />
      ))}
      
      {/* End spacer */}
      <div className="h-[50vh]" />
    </main>
  );
};

export default Index;
