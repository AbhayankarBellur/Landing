import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface VideoSection {
  videoSrc: string;
}

interface MultiVideoBackgroundProps {
  videos: VideoSection[];
  activeIndex: number;
  scrollProgress: number;
  sectionRanges: { start: number; end: number }[];
}

const MultiVideoBackground = ({ 
  videos, 
  activeIndex, 
  scrollProgress,
  sectionRanges 
}: MultiVideoBackgroundProps) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Use spring for smooth scrubbing
  const smoothProgress = useSpring(useMotionValue(scrollProgress), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    smoothProgress.set(scrollProgress);
  }, [scrollProgress, smoothProgress]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      videoRefs.current.forEach((video, index) => {
        if (video && video.duration) {
          const range = sectionRanges[index];
          if (range) {
            // Calculate progress within this video's section
            const sectionProgress = Math.max(0, Math.min(1, 
              (latest - range.start) / (range.end - range.start)
            ));
            
            // Set video time based on section progress
            const targetTime = sectionProgress * video.duration;
            video.currentTime = targetTime;
          }
        }
      });
    });

    return () => unsubscribe();
  }, [smoothProgress, sectionRanges]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {videos.map((video, index) => (
        <motion.div
          key={video.videoSrc}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ opacity: activeIndex === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <video
            ref={(el) => { videoRefs.current[index] = el; }}
            muted
            playsInline
            preload="auto"
            className="absolute w-full h-full object-cover"
          >
            <source src={video.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      ))}
      {/* Subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />
    </div>
  );
};

export default MultiVideoBackground;
