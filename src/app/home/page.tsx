import { useState, useEffect } from "react";
import { LoadingScreen, MainContent } from "@/components/home";
import { Navbar, Footer } from "@/components/shared";
import { useVideoPreloader } from "@/hooks/useVideoPreloader";

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [showContent, setShowContent] = useState(false);

	// Start preloading videos after content is shown
	useVideoPreloader(showContent);

	useEffect(() => {
		// Check if user came from internal navigation or external source
		const referrer = document.referrer;
		const currentDomain = window.location.origin;
		const isFromExternalSite = !referrer || !referrer.startsWith(currentDomain);
		
		// Also check internal navigation flag as fallback
		const isInternalNavigation = sessionStorage.getItem("internalNavigation");

		if (isInternalNavigation === "true" && !isFromExternalSite) {
			// User navigated within the site - skip loading animation
			setIsLoading(false);
			setShowContent(true);
		} else {
			// User came from external URL, new tab, or directly typed URL - show loading animation
			setIsLoading(true);
			setShowContent(false);
		}

		// Set flag to indicate user is now navigating within the site
		sessionStorage.setItem("internalNavigation", "true");
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
			<main className="min-h-screen bg-white relative overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
				<MainContent isVisible={showContent} />
			</main>
			{showContent && <Footer />}
		</>
	);
};

export default HomePage;
