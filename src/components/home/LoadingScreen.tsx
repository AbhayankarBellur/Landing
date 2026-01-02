import { useState, useEffect } from "react";
import loadingVideo from "@/assets/loading.mov";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Lock scroll when loading screen is active
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.documentElement.style.overflow = 'hidden';

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
    
    return () => {
      window.removeEventListener('resize', handleResize);
      // Unlock scroll when component unmounts
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleVideoEnd = () => {
    // Start dissolving the video immediately
    setVideoOpacity(0);
    
    // After video dissolve completes, call onComplete
    setTimeout(() => {
      onComplete();
    }, 300); // Much faster dissolve duration
  };

  // Choose video source based on device type
  const videoSource = isMobile ? "/videos/loading phone.mov" : loadingVideo;

  return (
    <div 
      className="fixed z-[9999] bg-white"
      style={{ 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw', 
        height: '100vh',
        height: '100dvh',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}
    >
      <video
        key={videoSource}
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        onEnded={handleVideoEnd}
        className="transition-opacity duration-300 ease-out"
        style={{ 
          opacity: videoOpacity,
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          height: '100dvh',
          minWidth: '100vw',
          minHeight: '100vh',
          minHeight: '100dvh',
          objectFit: 'cover',
          objectPosition: 'center center',
          transform: isMobile ? 'translate(-50%, -50%) scale(1.05)' : 'translate(-50%, -50%) scale(1.02)',
          margin: 0,
          padding: 0,
          display: 'block'
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