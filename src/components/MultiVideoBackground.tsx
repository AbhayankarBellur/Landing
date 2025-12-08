import { motion } from "framer-motion";

interface VideoSection {
  videoSrc: string;
}

interface MultiVideoBackgroundProps {
  videos: VideoSection[];
  activeIndex: number;
}

const MultiVideoBackground = ({ videos, activeIndex }: MultiVideoBackgroundProps) => {
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
            autoPlay
            loop
            muted
            playsInline
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
