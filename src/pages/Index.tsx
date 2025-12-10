import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import MultiVideoBackground from "@/components/MultiVideoBackground";
import ScrollySection from "@/components/ScrollySection";
import ScrollIndicator from "@/components/ScrollIndicator";

interface VideoSection {
  videoSrc: string;
  content: string[];
}

const videoSections: VideoSection[] = [
  {
    videoSrc: "/videos/adoption-v2.mp4",
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
  {
    videoSrc: "/videos/petsVET_1.mp4",
    content: [
      "Veterinary Care & Consultations",
      "Warmpawz connects pet parents with trusted veterinarians for consultations, wellness checks, and specialised care.",
      "Browse verified experts, review their services, and book the support your pet needs with clarity and confidence.",
    ],
  },
  {
    videoSrc: "/videos/pet-training.mp4",
    content: [
      "Warmpawz Walking, Training & Behaviour Services",
      "Warmpawz connects you with trusted professionals offering structured walks, positive training, and specialised behaviour support.",
      "Browse verified experts, understand their approach, and book the right guidance to keep your pet active, confident, and emotionally balanced.",
    ],
  },
  {
    videoSrc: "/videos/pet-boarding.mp4",
    content: [
      "Warmpawz Boarding & Pet Café Services",
      "Warmpawz helps you discover trusted boarding spaces and welcoming pet cafés designed for comfort, safety, and socialisation.",
      "Explore verified providers, review their amenities and approach, and book a space where your pet can relax, play, and feel at home.",
    ],
  },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Calculate breakpoints for video transitions
  const totalContentSections = videoSections.reduce(
    (acc, section) => acc + section.content.length + 1,
    0
  ) + 1;

  // Track scroll and update active video
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Calculate cumulative section ends for each video
    let cumulativeSections = 0;
    for (let i = 0; i < videoSections.length; i++) {
      const sectionEnd = (cumulativeSections + videoSections[i].content.length + 1.5) / totalContentSections;
      if (progress < sectionEnd) {
        setActiveVideoIndex(i);
        return;
      }
      cumulativeSections += videoSections[i].content.length + 1;
    }
    setActiveVideoIndex(videoSections.length - 1);
  });

  // Hide scroll indicator after user starts scrolling
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.03],
    [1, 0]
  );

  return (
    <main className="relative">
      {/* Multi-Video Background with crossfade */}
      <MultiVideoBackground
        videos={videoSections.map((s) => ({ videoSrc: s.videoSrc }))}
        activeIndex={activeVideoIndex}
      />

      {/* Scroll Indicator - only visible at top */}
      <motion.div style={{ opacity: scrollIndicatorOpacity }}>
        <ScrollIndicator />
      </motion.div>

      {/* Video Sections */}
      {videoSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
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
