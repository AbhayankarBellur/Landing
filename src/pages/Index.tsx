import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useMemo } from "react";
import MultiVideoBackground from "@/components/MultiVideoBackground";
import ScrollySection from "@/components/ScrollySection";
import ScrollIndicator from "@/components/ScrollIndicator";

interface VideoSection {
  videoSrc: string;
  content: string[];
}

const videoSections: VideoSection[] = [
  {
    videoSrc: "/videos/adoption-video.mp4",
    content: [
      "Adoption Centre Compatibility & Support",
      "At Warmpawz, our approach extends beyond services — we help pet parents find the right match through our compassionate Adoption Centre.",
      "Every pet profile highlights temperament, history, and care needs, allowing families to understand compatibility before taking the next step.",
      "Our team supports you through the entire process with transparent guidance, emotional readiness checks, and post-adoption care resources,",
      "ensuring every pet transitions into a safe, loving, and well-matched home.",
    ],
  },
  {
    videoSrc: "/videos/pawsome-mart.mp4",
    content: [
      "Warmpawz Pet Food & Product Store",
      "The Warmpawz Pet Food & Product Store is a curated marketplace where trusted sellers list quality food, treats, and pet-care essentials.",
      "While we don't make or standardise these products, we provide clear details and community insights so parents can choose confidently.",
      "Find what's right for your pet in one convenient place.",
    ],
  },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate section ranges for each video
  const { totalSections, sectionRanges } = useMemo(() => {
    let currentSection = 0;
    const ranges: { start: number; end: number }[] = [];
    
    // +1 for initial spacer per section, +1 for end spacer
    const total = videoSections.reduce(
      (acc, section) => acc + section.content.length + 1,
      0
    ) + 1;

    videoSections.forEach((section) => {
      const sectionStart = currentSection / total;
      const sectionSections = section.content.length + 1; // +1 for spacer
      currentSection += sectionSections;
      const sectionEnd = currentSection / total;
      ranges.push({ start: sectionStart, end: sectionEnd });
    });

    return { totalSections: total, sectionRanges: ranges };
  }, []);

  // Track scroll and update active video + progress
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setScrollProgress(progress);
    
    // Find which section we're in
    for (let i = 0; i < sectionRanges.length; i++) {
      if (progress < sectionRanges[i].end) {
        setActiveVideoIndex(i);
        break;
      }
    }
  });

  // Hide scroll indicator after user starts scrolling
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.03],
    [1, 0]
  );

  return (
    <main className="relative">
      {/* Multi-Video Background with crossfade and scroll-controlled scrubbing */}
      <MultiVideoBackground
        videos={videoSections.map((s) => ({ videoSrc: s.videoSrc }))}
        activeIndex={activeVideoIndex}
        scrollProgress={scrollProgress}
        sectionRanges={sectionRanges}
      />

      {/* Scroll Indicator - only visible at top */}
      <motion.div style={{ opacity: scrollIndicatorOpacity }}>
        <ScrollIndicator />
      </motion.div>

      {/* Video Sections */}
      {videoSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {/* Initial spacer - video plays without text */}
          <div className="h-screen" />

          {/* Scrolly Sections for this video */}
          {section.content.map((text, contentIndex) => (
            <ScrollySection
              key={`${sectionIndex}-${contentIndex}`}
              text={text}
              index={contentIndex}
              totalSections={section.content.length}
            />
          ))}
        </div>
      ))}

      {/* End spacer */}
      <div className="h-[50vh]" />
    </main>
  );
};

export default Index;
