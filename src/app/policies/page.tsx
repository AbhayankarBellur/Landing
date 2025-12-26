import { Navbar, Footer } from "@/components/shared";
import { HeroSection } from "@/components/policies";

const PoliciesPage = () => {
	return (
		<>
			<Navbar />
			<main
				className="min-h-screen"
				style={{
					background:
						"linear-gradient(180deg, #FFD4A8 0%, #FFCA99 42%, #FFE8D6 100%)",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					transition: "background 0.3s ease-in-out",
				}}
			>
				<div className="pt-32 pb-20">
					<HeroSection />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default PoliciesPage;
