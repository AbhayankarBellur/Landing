import { FC, useEffect, useRef, useState } from "react";
import PhoneFrame from "./PhoneFrame";

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

  return (
    <div
      ref={stepRef}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Phone Frame */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "0.1s" }}
      >
        <PhoneFrame videoSrc={videoSrc} />
      </div>

      {/* Content */}
      <div
        className={`flex-1 max-w-md text-center md:text-left ${
          isReversed ? "md:text-right" : ""
        } transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "0.3s" }}
      >
        <span className="text-primary font-bold text-lg">Step {stepNumber}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default OnboardingStep;
