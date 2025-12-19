import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackButton from "@/components/BackButton";
import StageSection from "@/components/user/StageSection";

gsap.registerPlugin(ScrollTrigger);

interface Stage {
  stage: number;
  title: string;
  description: string;
  videoSrc: string;
  isLeft: boolean;
}

const stages: Stage[] = [
  {
    stage: 1,
    title: "Adoption Services",
    description:
      "Warmpawz helps aspiring pet parents discover adoptable companions that truly fit their home and lifestyle, supported by verified experts who guide health checks, adoption readiness, and early parenting care. From first meetings to the first week at home, you're never navigating the beginning alone.",
    videoSrc: "/videos/adoption-v2.mp4",
    isLeft: true,
  },
  {
    stage: 2,
    title: "Veterinary and Grooming Services",
    description:
      "Warmpawz connects pet parents with trusted veterinary and grooming services near them — from early vaccinations and routine wellness checks to hygienic dog and cat grooming. With online vet consultations, home vet and grooming visits, and safe pet transport for clinic or emergency needs, we make care calmer, easier, and more reassuring for every pawmily.",
    videoSrc: "/videos/petsVET_1.mp4",
    isLeft: false,
  },
  {
    stage: 3,
    title: "Walking, Training and Behaviourist Services",
    description:
      "Warmpawz connects pet parents with trusted dog walking, training, and behaviourist services near them, supporting daily exercise, obedience, and emotional wellbeing. From reliable walks to expert guidance for anxiety or behavioural challenges, we help build confident pets and stronger family bonds.",
    videoSrc: "/videos/pet-training.mp4",
    isLeft: true,
  },
  {
    stage: 4,
    title: "Pet Boarding, Cafe's and Holiday Services",
    description:
      "Warmpawz helps pet parents find trusted pet boarding, pet cafés, and pet-friendly holiday stays near them, making it easier to plan outings or travel without leaving your pet behind. From safe boarding and daycare to welcoming cafés and pet-friendly hotels, your pet stays included, comfortable, and cared for.",
    videoSrc: "/videos/pet-boarding-new.mp4",
    isLeft: false,
  },
  {
    stage: 5,
    title: "Pet Products and Nutrition Services",
    description:
      "Warmpawz offers trusted pet products and nutrition services — from curated food, treats, accessories, and clothing to expert-guided nutrition plans and meal subscriptions, delivering a shop-like buying experience from the comfort of your home, tailored to your pet's health needs.",
    videoSrc: "/videos/pawsome-mart.mp4",
    isLeft: true,
  },
  {
    stage: 6,
    title: "Ageing with Family",
    description:
      "As pets grow older, moments grow quieter. Warmpawz helps reduce stress through gentle, familiar care, and when it's time to say goodbye, supports families with respectful pet farewell and memorial services, honouring a life deeply loved with dignity and grace.",
    videoSrc: "/videos/pet-sunset.mp4",
    isLeft: false,
  },
];

const UserWalkthrough = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative bg-background font-body">
      <BackButton className="bg-secondary border-border hover:bg-muted text-foreground" />

      {/* Hero Section */}
      <section className="min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center bg-background">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6">
          Your Pet's Journey with Warmpawz
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          From adoption to aging gracefully, we're with you every step of the way.
        </p>
      </section>

      {/* Stage Sections */}
      {stages.map((stage, index) => (
        <StageSection
          key={stage.stage}
          stage={stage.stage}
          title={stage.title}
          description={stage.description}
          videoSrc={stage.videoSrc}
          isLeft={stage.isLeft}
          showArrow={index < stages.length - 1}
        />
      ))}

      {/* Footer spacer */}
      <div className="h-[20vh] bg-background" />
    </main>
  );
};

export default UserWalkthrough;
