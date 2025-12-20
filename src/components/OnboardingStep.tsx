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

  // Video content with built-in frame (no PhoneFrame wrapper needed)
  const videoContent = (
    <div
      className={`w-[220px] h-[450px] sm:w-[280px] sm:h-[570px] flex items-center justify-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "0.1s" }}
    >
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );

  // Text content
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
      <p className="text-foreground/80 text-lg leading-relaxed">{description}</p>
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
