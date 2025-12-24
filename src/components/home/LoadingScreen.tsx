import { useState, useEffect } from "react";
import loadingVideo from "@/assets/loading.mov";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isMobileScreen = window.innerWidth <= 768;
      
      return isMobileUserAgent || isMobileScreen;
    };

    setIsMobile(checkMobile());

    // Listen for resize events to handle orientation changes
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoEnd = () => {
    // Start dissolving the video
    setVideoOpacity(0);
    
    // After video dissolve completes, call onComplete
    setTimeout(() => {
      onComplete();
    }, 1000); // Match the dissolve duration
  };

  // Choose video source based on device type
  const videoSource = isMobile ? "/videos/loading phone.mov" : loadingVideo;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      <video
        key={videoSource} // Force re-render when video source changes
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out"
        style={{ 
          opacity: videoOpacity,
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
      >
        <source src={videoSource} type="video/quicktime" />
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingScreen;