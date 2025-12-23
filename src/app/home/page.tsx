import { useState, useEffect } from "react";
import { LoadingScreen, MainContent } from "@/components/home";
import { Navbar, Footer } from "@/components/shared";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is a fresh page load (refresh) or navigation
    // sessionStorage persists during the browser session but clears on new tabs/refresh
    const hasNavigated = sessionStorage.getItem('hasNavigated');
    
    if (!hasNavigated) {
      // This is a fresh page load/refresh - show loading animation
      setIsLoading(true);
      setShowContent(false);
      // Mark that we've now navigated within the session
      sessionStorage.setItem('hasNavigated', 'true');
    } else {
      // This is navigation from another page - skip loading animation
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {/* Show navbar only when content is visible (not during loading) */}
      {showContent && <Navbar />}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <main className="min-h-screen bg-white relative">
        <MainContent isVisible={showContent} />
      </main>
      {showContent && <Footer />}
    </>
  );
};

export default HomePage;