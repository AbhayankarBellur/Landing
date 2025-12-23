import { useNavigate } from "react-router-dom";
import petTrainingImage from "@/assets/pet-training.png";
import serviceProviderImage from "/videos/service provider.png";

interface MainContentProps {
  isVisible: boolean;
}

const MainContent = ({ isVisible }: MainContentProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Mark that user has navigated within the session
    sessionStorage.setItem('hasNavigated', 'true');
    navigate(path);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center font-body px-6 py-12 pt-32 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-black text-center font-display mb-16 md:mb-24">
        Warmpawz
      </h1>

      {/* Two-column layout for buttons with decorative images */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32 items-center justify-center w-full max-w-4xl">
        {/* Pet Parent Button Container */}
        <div className="relative flex flex-col items-center">
          {/* Decorative Image - behind button */}
          <div className="relative z-0 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-end justify-center">
            <img
              src={petTrainingImage}
              alt=""
              className="w-full h-full object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
          {/* Button - overlapping image */}
          <button
            onClick={() => handleNavigation("/user-walkthrough")}
            className="relative z-10 -mt-4 px-10 py-4 md:px-12 md:py-5 bg-[#F5A855] text-black rounded-full text-lg md:text-xl font-bold font-display shadow-lg whitespace-nowrap"
          >
            Pet Parent
          </button>
        </div>

        {/* Service Provider Button Container */}
        <div className="relative flex flex-col items-center">
          {/* Decorative Image - behind button */}
          <div className="relative z-0 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-end justify-center">
            <img
              src={serviceProviderImage}
              alt=""
              className="w-full h-full object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
          {/* Button - overlapping image */}
          <button
            onClick={() => handleNavigation("/vendor-onboarding")}
            className="relative z-10 -mt-4 px-10 py-4 md:px-12 md:py-5 bg-[#F5A855] text-black rounded-full text-lg md:text-xl font-bold font-display shadow-lg whitespace-nowrap"
          >
            Service Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;