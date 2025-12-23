import StageSection from "@/components/user/StageSection";

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

const StagesList = () => {
  return (
    <>
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
    </>
  );
};

export default StagesList;