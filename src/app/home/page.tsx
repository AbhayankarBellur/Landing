import { useState, useEffect } from "react";
import { LoadingScreen, MainContent } from "@/components/home";
import { Navbar, Footer } from "@/components/shared";
import { useVideoPreloader } from "@/hooks/useVideoPreloader";
import { STORAGE_KEYS } from "@/config/constants";

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [showContent, setShowContent] = useState(false);

	// Start preloading videos after content is shown
	useVideoPreloader(showContent);

	useEffect(() => {
		// Check if loading animation has already been shown this session
		const hasShownLoading = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);

		if (hasShownLoading === "true") {
			// Animation already shown - skip it
			setIsLoading(false);
			setShowContent(true);
		} else {
			// First visit this session - show loading animation
			setIsLoading(true);
			setShowContent(false);
			// Mark that we've shown the loading animation
			sessionStorage.setItem(STORAGE_KEYS.hasShownLoading, "true");
		}
	}, []);

	const handleLoadingComplete = () => {
		setIsLoading(false);
		// Small delay to ensure smooth transition
		setTimeout(() => {
			setShowContent(true);
		}, 50);
	};

	return (
		<>
			{/* Show navbar only when content is visible (not during loading) */}
			{showContent && <Navbar />}
			{/* Loading screen overlays the content */}
			{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
			{/* Render main content only when needed */}
			{!isLoading && (
				<main className="min-h-screen bg-white relative overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
					<MainContent isVisible={showContent} />
				</main>
			)}
			{showContent && <Footer />}
		</>
	);
};

export default HomePage;
