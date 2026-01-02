import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainLayout, PageLayout } from "@/layouts";
import {
	FoundersStory,
	Mission,
	Vision,
	Values,
	MeetTheTeam,
} from "@/components/about";

const AboutUsPage = () => {
	const location = useLocation();

	useEffect(() => {
		// Handle hash navigation with smooth scrolling
		if (location.hash) {
			const element = document.getElementById(location.hash.substring(1));
			if (element) {
				// Offset for sticky header (navbar height + padding)
				const offset = 140;
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - offset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		}
	}, [location.hash]);

	return (
		<MainLayout>
			<PageLayout gradient="warm">
				<FoundersStory />
				<Mission />
				<Vision />
				<Values />
				<MeetTheTeam />
			</PageLayout>
		</MainLayout>
	);
};

export default AboutUsPage;
