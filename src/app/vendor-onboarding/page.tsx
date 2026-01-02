import { useEffect } from "react";
import {
	HeaderSection,
	ContentSection,
	OnboardingSteps,
	VendorFAQSection,
} from "@/components/vendor-onboarding";
import { BackButton } from "@/components/shared";
import { MainLayout, PageLayout } from "@/layouts";

const VendorOnboardingPage = () => {
	useEffect(() => {
		// Force all videos on the page to play
		const playAllVideos = () => {
			const videos = document.querySelectorAll("video");
			videos.forEach((video) => {
				if (video.paused) {
					video.play().catch(console.error);
				}
			});
		};

		// Play videos immediately and set up interval to ensure continuous playback
		playAllVideos();
		const videoInterval = setInterval(playAllVideos, 1000);

		// Handle visibility change to restart videos when page becomes visible
		const handleVisibilityChange = () => {
			if (!document.hidden) {
				setTimeout(playAllVideos, 100);
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			clearInterval(videoInterval);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);

	return (
		<MainLayout>
			<PageLayout gradient="warm" className="font-baloo">
				<BackButton className="bg-gray-100 border-gray-300 hover:bg-gray-200 text-black ml-4" />
				<ContentSection />
				<OnboardingSteps />
				<VendorFAQSection />
			</PageLayout>
		</MainLayout>
	);
};

export default VendorOnboardingPage;
