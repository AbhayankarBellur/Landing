import HeaderSection from "@/components/vendor-onboarding/HeaderSection";
import OnboardingSteps from "@/components/vendor-onboarding/OnboardingSteps";
import BackButton from "@/components/shared/BackButton";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const VendorOnboardingPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16 pt-32 px-4 font-baloo">
        <BackButton className="bg-gray-100 border-gray-300 hover:bg-gray-200 text-black" />
        <HeaderSection />
        <OnboardingSteps />
      </main>
      <Footer />
    </>
  );
};

export default VendorOnboardingPage;