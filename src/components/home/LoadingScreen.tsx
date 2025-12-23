import { useState, useEffect } from "react";
import loadingVideo from "@/assets/loading.mov";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [videoOpacity, setVideoOpacity] = useState(1);

  const handleVideoEnd = () => {
    // Start dissolving the video
    setVideoOpacity(0);
    
    // After video dissolve completes, call onComplete
    setTimeout(() => {
      onComplete();
    }, 1000); // Match the dissolve duration
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-out"
        style={{ opacity: videoOpacity }}
      >
        <source src={loadingVideo} type="video/quicktime" />
        <source src={loadingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingScreen;