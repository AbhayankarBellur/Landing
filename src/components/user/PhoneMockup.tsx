import { FC, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PhoneMockupProps {
  videoSrc: string;
  isLeft: boolean;
}

const PhoneMockup: FC<PhoneMockupProps> = ({ videoSrc, isLeft }) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        phoneRef.current,
        {
          x: isLeft ? -100 : 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: phoneRef.current,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isLeft]);

  // Ensure video plays and loops continuously
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

    // Force video to play when loaded
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('canplay', handleVideoLoad);
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('pause', handleVideoPause);

    // Initial play attempt
    if (video.readyState >= 2) {
      video.play().catch(console.error);
    }

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('canplay', handleVideoLoad);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('pause', handleVideoPause);
    };
  }, [videoSrc]);

  return (
    <div
      ref={phoneRef}
      className="relative w-[240px] sm:w-[260px] md:w-[280px] lg:w-[320px] animate-phone-float"
    >
      {/* Phone outer frame */}
      <div className="relative bg-foreground rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
        {/* Phone inner bezel */}
        <div className="relative bg-muted rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-foreground rounded-full z-10" />

          {/* Video Screen - Enhanced with all control-disabling attributes */}
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
            className="w-full h-full object-cover video-no-controls"
            onContextMenu={(e) => e.preventDefault()}
            onDoubleClick={(e) => e.preventDefault()}
          />
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute top-20 sm:top-24 md:top-28 -left-0.5 sm:-left-1 w-0.5 sm:w-1 h-6 sm:h-8 bg-foreground rounded-l-sm" />
      <div className="absolute top-32 sm:top-36 md:top-44 -left-0.5 sm:-left-1 w-0.5 sm:w-1 h-8 sm:h-12 bg-foreground rounded-l-sm" />
      <div className="absolute top-32 sm:top-36 md:top-44 -right-0.5 sm:-right-1 w-0.5 sm:w-1 h-10 sm:h-16 bg-foreground rounded-r-sm" />
    </div>
  );
};

export default PhoneMockup;
