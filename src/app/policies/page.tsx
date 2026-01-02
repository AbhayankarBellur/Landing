import { MainLayout, PageLayout } from "@/layouts";
import { HeroSection } from "@/components/policies";

const PoliciesPage = () => {
	return (
		<MainLayout>
			<PageLayout gradient="warm" className="pb-20">
				<HeroSection />
			</PageLayout>
		</MainLayout>
	);
};

export default PoliciesPage;
