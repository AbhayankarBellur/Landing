interface VideoBackgroundProps {
  videoSrc: string;
}

const VideoBackground = ({ videoSrc }: VideoBackgroundProps) => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
};

export default VideoBackground;
