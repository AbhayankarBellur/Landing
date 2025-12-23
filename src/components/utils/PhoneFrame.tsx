import { FC, ReactNode } from "react";

interface PhoneFrameProps {
  videoSrc?: string;
  children?: ReactNode;
}

const PhoneFrame: FC<PhoneFrameProps> = ({ videoSrc, children }) => {
  return (
    <div className="relative w-[280px] h-[570px] bg-foreground rounded-[50px] p-2 shadow-2xl">
      {/* Phone inner bezel */}
      <div className="relative w-full h-full bg-background rounded-[43px] overflow-hidden">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
        
        {/* Screen area */}
        <div className="w-full h-full">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : children ? (
            children
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <span className="text-muted-foreground">Video Placeholder</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Side buttons */}
      <div className="absolute top-28 -left-1 w-1 h-8 bg-foreground rounded-l-sm" />
      <div className="absolute top-44 -left-1 w-1 h-12 bg-foreground rounded-l-sm" />
      <div className="absolute top-44 -right-1 w-1 h-16 bg-foreground rounded-r-sm" />
    </div>
  );
};

export default PhoneFrame;
