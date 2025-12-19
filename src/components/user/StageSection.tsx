import { FC, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneMockup from "./PhoneMockup";
import CurvedArrow from "../CurvedArrow";

gsap.registerPlugin(ScrollTrigger);

interface StageSectionProps {
  stage: number;
  title: string;
  description: string;
  videoSrc: string;
  isLeft: boolean;
  showArrow: boolean;
}

const StageSection: FC<StageSectionProps> = ({
  stage,
  title,
  description,
  videoSrc,
  isLeft,
  showArrow,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !descRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 60,
          opacity: 0,
          skewY: 3,
        },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const stageColorClass = `text-stage-${stage}`;

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-background">
      <div
        className={`min-h-screen flex flex-col ${
          isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center justify-center gap-8 lg:gap-16 xl:gap-20 py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24`}
      >
        {/* Phone Mockup */}
        <div className="flex-shrink-0">
          <PhoneMockup videoSrc={videoSrc} isLeft={isLeft} />
        </div>

        {/* Text Content */}
        <div
          className={`max-w-md lg:max-w-lg xl:max-w-xl text-center ${
            isLeft ? "lg:text-left" : "lg:text-right"
          }`}
        >
          <h2
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold ${stageColorClass} mb-4 sm:mb-6`}
          >
            {title}
          </h2>
          <p
            ref={descRef}
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-body leading-relaxed"
          >
            {description}
          </p>
        </div>
      </div>

      {/* Curved Arrow - only show between sections */}
      {showArrow && (
        <div
          className={`absolute bottom-0 ${
            isLeft ? "right-8 sm:right-12 md:right-24 lg:right-1/3" : "left-8 sm:left-12 md:left-24 lg:left-1/3"
          } transform translate-y-1/2 z-10`}
        >
          <CurvedArrow direction={isLeft ? "right" : "left"} />
        </div>
      )}
    </section>
  );
};

export default StageSection;
