import OnboardingStep from "@/components/shared/OnboardingStep";
import CurvedArrow from "@/components/shared/CurvedArrow";

const steps = [
  {
    stepNumber: 1,
    title: "Let us know you!",
    description:
      "Let's begin your journey with Warmpawz. Share your details and tell us about your expertise in pet care services.",
    videoSrc: "/videos/step1.mov",
  },
  {
    stepNumber: 2,
    title: "Upload your documents",
    description:
      "Your expertise deserves visibility. Upload the necessary certifications and documents to verify your qualifications.",
    videoSrc: "/videos/step2.mov",
  },
  {
    stepNumber: 3,
    title: "Submission Completed",
    description:
      "Sit back and relax, while we review the application. Our team will carefully assess your profile and credentials.",
    videoSrc: "/videos/step3.mov",
  },
  {
    stepNumber: 4,
    title: "Look out for query notifications",
    description:
      "Submit any missing details, Help move the application. Stay responsive to ensure a smooth verification process.",
    videoSrc: "/videos/step4.mov",
  },
  {
    stepNumber: 5,
    title: "Approved!",
    description:
      "Ready to set up and start growing! Congratulations on completing the verification process successfully.",
    videoSrc: "/videos/step5.mov",
  },
  {
    stepNumber: 6,
    title: "Your choice of Services",
    description:
      "Select and Publish your services. Choose from our catalog or create your own unique service offerings.",
    videoSrc: "/videos/step6.mov",
  },
  {
    stepNumber: 7,
    title: "Congrats! You're Ready!",
    description:
      "You are ready to receive your Pet Parents. Start connecting with pet parents and grow your business.",
    videoSrc: "/videos/step7.mov",
  },
];

const OnboardingSteps = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {steps.map((step, index) => (
        <div key={step.stepNumber}>
          <OnboardingStep
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            videoSrc={step.videoSrc}
            isReversed={index % 2 !== 0}
          />
          
          {/* Arrow between steps */}
          {index < steps.length - 1 && (
            <div className="flex justify-center my-8">
              <CurvedArrow direction={index % 2 === 0 ? "right" : "left"} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OnboardingSteps;