import { useEffect } from 'react';

// All videos used across the application
const VIDEO_URLS = [
  // User walkthrough videos
  '/videos/adoption-v2.mp4',
  '/videos/petsVET_1.mp4',
  '/videos/pet-training.mp4',
  '/videos/pet-boarding-new.mp4',
  '/videos/pawsome-mart.mp4',
  '/videos/pet-sunset.mp4',
  // Vendor onboarding videos
  '/videos/step1.mov',
  '/videos/step2.mov',
  '/videos/step3.mov',
  '/videos/step4.mov',
  '/videos/step5.mov',
  '/videos/step6.mov',
  '/videos/step7.mov',
];

export const useVideoPreloader = (enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;

    // Start preloading videos after a short delay to not block initial page render
    const timeoutId = setTimeout(() => {
      VIDEO_URLS.forEach((url) => {
        const video = document.createElement('video');
        video.src = url;
        video.preload = 'auto';
        video.load();
        
        // Optional: Add to hidden container to help with browser caching
        video.style.display = 'none';
        document.body.appendChild(video);
        
        // Clean up after video is loaded
        video.addEventListener('loadeddata', () => {
          // Video is now in browser cache
          document.body.removeChild(video);
        });

        // Clean up on error
        video.addEventListener('error', () => {
          if (document.body.contains(video)) {
            document.body.removeChild(video);
          }
        });
      });
    }, 2000); // Wait 2 seconds after component mount

    return () => {
      clearTimeout(timeoutId);
    };
  }, [enabled]);
};
