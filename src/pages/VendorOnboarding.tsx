import OnboardingStep from "@/components/OnboardingStep";
import CurvedArrow from "@/components/CurvedArrow";
import BackButton from "@/components/BackButton";

const steps = [
  {
    stepNumber: 1,
    title: "Let us know you!",
    description:
      "Let's begin your journey with Warmpawz. Share your details and tell us about your expertise in pet care services.",
  },
  {
    stepNumber: 2,
    title: "Upload your documents",
    description:
      "Your expertise deserves visibility. Upload the necessary certifications and documents to verify your qualifications.",
  },
  {
    stepNumber: 3,
    title: "Submission Completed",
    description:
      "Sit back and relax, while we review the application. Our team will carefully assess your profile and credentials.",
  },
  {
    stepNumber: 4,
    title: "Look out for query notifications",
    description:
      "Submit any missing details, Help move the application. Stay responsive to ensure a smooth verification process.",
  },
  {
    stepNumber: 5,
    title: "Approved!",
    description:
      "Ready to set up and start growing! Congratulations on completing the verification process successfully.",
  },
  {
    stepNumber: 6,
    title: "Your choice of Services",
    description:
      "Select and Publish your services. Choose from our catalog or create your own unique service offerings.",
  },
  {
    stepNumber: 7,
    title: "Congrats! You're Ready!",
    description:
      "You are ready to receive your Pet Parents. Start connecting with pet owners and grow your business.",
  },
];

const VendorOnboarding = () => {
  return (
    <main className="min-h-screen bg-background py-16 px-4 font-baloo">
      <BackButton />
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Vendor Onboarding
        </h1>
        <p className="text-muted-foreground text-lg">
          Join the Warmpawz family and start your journey as a trusted pet service
          provider. Follow these simple steps to get verified and begin connecting
          with pet parents.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <div key={step.stepNumber}>
            <OnboardingStep
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
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
    </main>
  );
};

export default VendorOnboarding;
