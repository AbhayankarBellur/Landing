import { FC, useEffect, useRef, useState } from "react";

interface OnboardingStepProps {
  stepNumber: number;
  title: string;
  description: string;
  videoSrc?: string;
  isReversed?: boolean;
}

const OnboardingStep: FC<OnboardingStepProps> = ({
  stepNumber,
  title,
  description,
  videoSrc,
  isReversed = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Ensure video plays and loops continuously
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const handleVideoLoad = () => {
      video.play().catch(console.error);
    };

    const handleVideoEnd = () => {
      video.currentTime = 0;
      video.play().catch(console.error);
    };

    const handleVideoPause = () => {
      video.play().catch(console.error);
    };

    const handleVideoError = () => {
      // Retry loading the video
      video.load();
    };

    // Force video to play when loaded
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('canplay', handleVideoLoad);
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('pause', handleVideoPause);
    video.addEventListener('error', handleVideoError);

    // Initial play attempt
    if (video.readyState >= 2) {
      video.play().catch(console.error);
    }

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('canplay', handleVideoLoad);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('pause', handleVideoPause);
      video.removeEventListener('error', handleVideoError);
    };
  }, [videoSrc]);

  // Video content with enhanced controls disabled
  const videoContent = (
    <div
      className={`w-[220px] h-[450px] sm:w-[280px] sm:h-[570px] flex items-center justify-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "0.1s" }}
    >
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          className="w-full h-full object-contain video-no-controls"
          onContextMenu={(e) => e.preventDefault()}
          onDoubleClick={(e) => e.preventDefault()}
        />
      )}
    </div>
  );

  // Text content with alternating colors and orange border
  const textContent = (
    <div
      className={`flex-1 max-w-md text-center md:text-left ${
        isReversed ? "md:text-right" : ""
      } transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "0.3s" }}
    >
      <span className="text-black font-bold text-lg">Step {stepNumber}</span>
      <h3 className="text-2xl md:text-3xl font-bold text-black mt-2 mb-4">
        {title}
      </h3>
      
      {/* Description with Orange Border */}
      <div className="border-2 border-[#F5A855] rounded-2xl p-4 sm:p-6 bg-white/50 backdrop-blur-sm shadow-sm">
        <p className="text-lg leading-relaxed text-foreground/80">{description}</p>
      </div>
    </div>
  );

  return (
    <div
      ref={stepRef}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {videoContent}
      {textContent}
    </div>
  );
};

export default OnboardingStep;
