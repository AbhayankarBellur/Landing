import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	HeroSection,
	StagesList,
	FAQSection,
} from "@/components/user-walkthrough";
import { BackButton, Navbar, Footer } from "@/components/shared";

gsap.registerPlugin(ScrollTrigger);

const UserWalkthroughPage = () => {
	useEffect(() => {
		// Refresh ScrollTrigger on mount
		ScrollTrigger.refresh();

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
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			clearInterval(videoInterval);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);

	return (
		<>
			<Navbar />
			<main
				className="relative font-body"
				style={{
					background:
						"linear-gradient(180deg, #FFD4A8 0%, #FFCA99 42%, #FFE8D6 100%)",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					transition: "background 0.3s ease-in-out",
				}}
			>
				<div className="pt-32">
					<BackButton className="bg-secondary border-border hover:bg-muted text-foreground" />
					<HeroSection />
					<StagesList />
					<FAQSection />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default UserWalkthroughPage;
