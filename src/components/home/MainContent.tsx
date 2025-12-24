import { useNavigate } from "react-router-dom";
import petTrainingImage from "@/assets/pet-training.png";
import serviceProviderImage from "/videos/service provider.png";
import leftArrow from "/videos/left.png";
import rightArrow from "/videos/right.png";

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
    <div className={`min-h-screen font-body px-4 sm:px-6 lg:px-12 py-12 pt-32 transition-all duration-1000 ease-out overflow-x-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      {/* Mobile Layout (Vertical Stack) - Hidden on lg+ */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] lg:hidden relative">
        {/* Pet Parent Section - Top */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 relative">
          {/* Decorative Image */}
          <div className="relative z-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-end justify-center mb-4">
            <img
              src={petTrainingImage}
              alt=""
              className="w-full h-full object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
          {/* Button */}
          <button
            onClick={() => handleNavigation("/user-walkthrough")}
            className="px-10 py-5 sm:px-12 sm:py-6 md:px-14 md:py-7 bg-[#F5A855] text-black rounded-full text-lg sm:text-xl md:text-2xl font-bold font-display shadow-lg whitespace-nowrap hover:bg-[#E09642] transition-colors"
          >
            Pet Parent
          </button>
          
          {/* Arrow pointing down from Pet Parent button - Mobile Only */}
          <div className="absolute left-[-40px] sm:left-[-50px] bottom-[-60px] sm:bottom-[-80px] z-0">
            <img
              src={leftArrow}
              alt=""
              className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32 object-contain -rotate-45"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Center Mobile Frame with Warmpawz Heading */}
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          {/* Mobile Phone Frame */}
          <div className="relative w-40 sm:w-44 md:w-48 aspect-[9/19.5] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl z-10">
            {/* Phone inner bezel */}
            <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden w-full h-full flex items-center justify-center">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-14 sm:w-18 md:w-20 h-3 sm:h-4 md:h-5 bg-gray-900 rounded-full z-10" />
              
              {/* Warmpawz Heading Inside Phone */}
              <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black font-display mb-1 sm:mb-2">
                  Warmpawz
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mb-1">
                  Pet Care. Reimagined.
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#F5A855]">
                  Download Now
                </p>
              </div>
            </div>

            {/* Side buttons */}
            <div className="absolute top-14 sm:top-16 md:top-18 -left-0.5 sm:-left-1 w-0.5 sm:w-1 h-5 sm:h-6 bg-gray-900 rounded-l-sm" />
            <div className="absolute top-20 sm:top-24 md:top-28 -left-0.5 sm:-left-1 w-0.5 sm:w-1 h-7 sm:h-10 bg-gray-900 rounded-l-sm" />
            <div className="absolute top-20 sm:top-24 md:top-28 -right-0.5 sm:-right-1 w-0.5 sm:w-1 h-9 sm:h-12 bg-gray-900 rounded-r-sm" />
          </div>
        </div>

        {/* Service Provider Section - Bottom */}
        <div className="flex flex-col items-center -mt-20 sm:-mt-24 md:-mt-28 relative">
          {/* Decorative Image */}
          <div className="relative z-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-end justify-center mb-4">
            <img
              src={serviceProviderImage}
              alt=""
              className="w-full h-full object-contain object-bottom"
              aria-hidden="true"
            />
            
            {/* Arrow pointing up from Service Provider image - Mobile Only */}
            <div className="absolute right-[-40px] sm:right-[-50px] top-[30px] sm:top-[40px] z-0">
              <img
                src={leftArrow}
                alt=""
                className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32 object-contain -rotate-[225deg]"
                aria-hidden="true"
              />
            </div>
          </div>
          {/* Button */}
          <button
            onClick={() => handleNavigation("/vendor-onboarding")}
            className="px-10 py-5 sm:px-12 sm:py-6 md:px-14 md:py-7 bg-[#F5A855] text-black rounded-full text-lg sm:text-xl md:text-2xl font-bold font-display shadow-lg whitespace-nowrap hover:bg-[#E09642] transition-colors"
          >
            Service Provider
          </button>
        </div>
      </div>

      {/* Desktop/Laptop Layout (Horizontal) - Hidden below lg */}
      <div className="hidden lg:flex items-center justify-between min-h-[calc(100vh-8rem)] relative">
        
        {/* Pet Parent Section - Left Side */}
        <div className="flex flex-col items-center w-2/5 max-w-md relative">
          {/* Decorative Image */}
          <div className="relative z-0 w-56 h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex items-end justify-center mb-6">
            <img
              src={petTrainingImage}
              alt=""
              className="w-full h-full object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
          {/* Button */}
          <button
            onClick={() => handleNavigation("/user-walkthrough")}
            className="px-12 py-6 xl:px-14 xl:py-7 2xl:px-16 2xl:py-8 bg-[#F5A855] text-black rounded-full text-xl xl:text-2xl 2xl:text-3xl font-bold font-display shadow-lg whitespace-nowrap hover:bg-[#E09642] transition-colors"
          >
            Pet Parent
          </button>
        </div>

        {/* Right Arrow pointing from Pet Parent to Center */}
        <div className="absolute left-[28%] top-[20%] z-10">
          <img
            src={rightArrow}
            alt=""
            className="w-16 h-24 xl:w-20 xl:h-28 2xl:w-24 2xl:h-32 object-contain -rotate-90"
            aria-hidden="true"
          />
        </div>

        {/* Center Mobile Frame with Warmpawz Heading */}
        <div className="flex flex-col items-center w-1/5 max-w-xs">
          {/* Mobile Phone Frame */}
          <div className="relative w-36 xl:w-40 2xl:w-44 aspect-[9/19.5] bg-gray-900 rounded-[1.5rem] xl:rounded-[2rem] p-1 xl:p-1.5 shadow-2xl">
            {/* Phone inner bezel */}
            <div className="relative bg-white rounded-[1rem] xl:rounded-[1.5rem] overflow-hidden w-full h-full flex items-center justify-center">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-1.5 xl:top-2 left-1/2 -translate-x-1/2 w-12 xl:w-16 2xl:w-18 h-3 xl:h-4 bg-gray-900 rounded-full z-10" />
              
              {/* Warmpawz Heading Inside Phone */}
              <div className="flex flex-col items-center justify-center text-center px-2 xl:px-3">
                <h1 className="text-lg xl:text-xl 2xl:text-2xl font-bold text-black font-display mb-1">
                  Warmpawz
                </h1>
                <p className="text-xs xl:text-xs 2xl:text-sm text-gray-600 font-medium mb-1">
                  Pet Care. Reimagined.
                </p>
                <p className="text-[10px] xl:text-xs font-semibold text-[#F5A855]">
                  Download Now
                </p>
              </div>
            </div>

            {/* Side buttons */}
            <div className="absolute top-12 xl:top-14 2xl:top-16 -left-0.5 w-0.5 h-4 xl:h-6 bg-gray-900 rounded-l-sm" />
            <div className="absolute top-16 xl:top-20 2xl:top-24 -left-0.5 w-0.5 h-6 xl:h-8 bg-gray-900 rounded-l-sm" />
            <div className="absolute top-16 xl:top-20 2xl:top-24 -right-0.5 w-0.5 h-8 xl:h-10 bg-gray-900 rounded-r-sm" />
          </div>
        </div>

        {/* Left Arrow pointing from Service Provider to Center */}
        <div className="absolute right-[28%] top-[20%] z-10">
          <img
            src={leftArrow}
            alt=""
            className="w-16 h-24 xl:w-20 xl:h-28 2xl:w-24 2xl:h-32 object-contain rotate-90"
            aria-hidden="true"
          />
        </div>

        {/* Service Provider Section - Right Side */}
        <div className="flex flex-col items-center w-2/5 max-w-md relative">
          {/* Decorative Image */}
          <div className="relative z-0 w-56 h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex items-end justify-center mb-6">
            <img
              src={serviceProviderImage}
              alt=""
              className="w-full h-full object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
          {/* Button */}
          <button
            onClick={() => handleNavigation("/vendor-onboarding")}
            className="px-12 py-6 xl:px-14 xl:py-7 2xl:px-16 2xl:py-8 bg-[#F5A855] text-black rounded-full text-xl xl:text-2xl 2xl:text-3xl font-bold font-display shadow-lg whitespace-nowrap hover:bg-[#E09642] transition-colors"
          >
            Service Provider
          </button>
          </div>
      </div>
    </div>
  );
};

export default MainContent;