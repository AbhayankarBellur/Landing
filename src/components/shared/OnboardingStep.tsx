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

    let videoDuration = 0;
    const isStep3 = stepNumber === 3;

    const handleVideoLoad = () => {
      if (isStep3 && video.duration) {
        videoDuration = video.duration - 2; // Cut off last 2 seconds for step 3
      }
      video.play().catch(console.error);
    };

    const handleTimeUpdate = () => {
      // For step 3, loop before the last second
      if (isStep3 && videoDuration > 0 && video.currentTime >= videoDuration) {
        video.currentTime = 0;
        video.play().catch(console.error);
      }
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
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('pause', handleVideoPause);
    video.addEventListener('error', handleVideoError);

    // Use Page Visibility API to resume playback when page becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        video.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial play attempt
    if (video.readyState >= 2) {
      video.play().catch(console.error);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('canplay', handleVideoLoad);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('pause', handleVideoPause);
      video.removeEventListener('error', handleVideoError);
    };
  }, [videoSrc, stepNumber]);

  // Video content with enhanced controls disabled
  const videoContent = (
    <div
      className={`flex items-center justify-center transition-all duration-700 bg-transparent ${
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
          className="w-[220px] h-[450px] sm:w-[280px] sm:h-[570px] object-contain video-no-controls bg-transparent rounded-[56px]"
          onContextMenu={(e) => e.preventDefault()}
          onDoubleClick={(e) => e.preventDefault()}
        />
      )}
    </div>
  );

  return (
    <div
      ref={stepRef}
      className="flex flex-col items-center gap-6"
    >
      {/* Step number and title at the top */}
      <div
        className={`text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-black font-bold text-lg">Step {stepNumber}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-black mt-2">
          {title}
        </h3>
      </div>

      {/* Video in the middle */}
      {videoContent}

      {/* Description below video */}
      <div
        className={`w-full max-w-2xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "0.3s" }}
      >
        <div className="border-2 border-[#F5A855] rounded-2xl p-4 sm:p-6 bg-white shadow-sm">
          <p className="text-lg leading-relaxed text-foreground/80 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep;
