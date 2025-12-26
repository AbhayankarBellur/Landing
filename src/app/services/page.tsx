import { Navbar, Footer } from "@/components/shared";
import { ServicesPhoneFrame } from "@/components/services";

const ServicesPage = () => {
	return (
		<>
			<Navbar />
			<main
				className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8"
				style={{
					background:
						"linear-gradient(180deg, #FFD4A8 0%, #FFCA99 42%, #FFE8D6 100%)",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					transition: "background 0.3s ease-in-out",
				}}
			>
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
						Our Services
					</h1>
					<p className="text-center text-gray-600 mb-8 text-lg w-[80%] lg:w-1/2 mx-auto font-semibold">
						Warmpawz brings every stage of pet care into one trusted, connected,
						compassionate ecosystem — for those who love pets and those who care and are concerned
						for them.
					</p>
					<ServicesPhoneFrame />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ServicesPage;
