import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface Service {
	id: number;
	name: string;
	isActive: boolean;
	image: string;
	description: string;
}

const services: Service[] = [
	{
		id: 1,
		name: "Adoption",
		isActive: true,
		image: "/images/adoption.png",
		description:
			"Bringing pet parents and ethical adoption partners together to ensure every pet is welcomed into a prepared, loving home. From Discovery to Consultant on Call, the platform ensures parents are prepared for the beautiful experiences ahead!",
	},
	{
		id: 2,
		name: "Veterinary",
		isActive: true,
		image: "/images/vet.png",
		description:
			"Connecting pet parents with trusted veterinarians through a transparent, compassionate care ecosystem. From Availability to convenient doorstep healthcare management, the platform ensures parents and providers take advantage of always being able to address health queries.",
	},
	{
		id: 3,
		name: "Grooming",
		isActive: true,
		image: "/images/grooming.png",
		description:
			"Uniting gentle groomers and caring families around stress‑free hygiene and wellbeing‑first practices. From Subscribing to regular grooming as a means of wellbeing to impromptu wellness treatments, the platform supports doorstep and at center services seamlessly.",
	},
	{
		id: 4,
		name: "Training",
		isActive: false,
		image: "/images/training.png",
		description:
			"Aligning pet parents and humane trainers to build confidence, communication, and trust. From finding the right trainers to engaging follow ups, the platform ensures a personal bond with the pet that lasts long!",
	},
	{
		id: 5,
		name: "Behaviour",
		isActive: true,
		image: "/images/behaviourist.png",
		description:
			"From early assessments to ongoing behavioural support, the platform connects pet parents and specialists to work together patiently and thoughtfully, ensuring pets are supported emotionally and understood while families feel guided.",
	},
	{
		id: 6,
		name: "Boarding",
		isActive: false,
		image: "/images/boarding.png",
		description:
			"Connecting families and care providers through safe, routine‑driven environments when being apart is unavoidable. From short stays to extended care, the platform ensures transparency, familiarity, hygienic environment and trust — so pets feel secure and parents feel reassured.",
	},
	{
		id: 7,
		name: "Nutrition",
		isActive: false,
		image: "/images/food.png",
		description:
			"Bringing together expert guidance and informed pet parents to make pet nutrition simple, safe, and health‑led. From daily diet planning to health‑led nutritional support, the platform helps pet parents move from dilemma to confidence with advice that evolves as their pet grows.",
	},
	{
		id: 8,
		name: "Resorts & Restaurants",
		isActive: true,
		image: "/images/cafe.png",
		description:
			"Enabling truly pet‑inclusive experiences by connecting families with pet-friendly places designed to welcome pets. From weekend getaways, special occasions to everyday outings, the platform helps parents include their companions in creating life's moments.",
	},
	{
		id: 9,
		name: "Products & Commerce",
		isActive: false,
		image: "/images/product.png",
		description:
			"Curating responsible products from ethical brands that follow sustainable practices into one trusted marketplace for everyday pet needs. From everyday essentials to thoughtful discoveries, the platform simplifies choices by bringing quality, safety, and purpose‑driven commerce together in one place.",
	},
	{
		id: 10,
		name: "Sunset Services",
		isActive: true,
		image: "/images/sunset.png",
		description:
			"Supporting families and care professionals with dignity, clarity, and compassion during life's most difficult moments. From guidance to gentle aftercare, the platform ensures no family navigates goodbye alone, and every life is honoured with respect.",
	},
];

const ServicesPhoneFrame = () => {
	const [selectedService, setSelectedService] = useState<Service | null>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handleServiceClick = (service: Service) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedService(service);
			setIsTransitioning(false);
		}, 150);
	};

	const handleBack = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedService(null);
			setIsTransitioning(false);
		}, 150);
	};

	return (
		<div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
			{/* Mobile Phone Frame */}
			<div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/19.5] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
				{/* Phone inner bezel */}
				<div 
					className="relative rounded-[2rem] overflow-hidden w-full h-full"
					style={{
					background: "linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)",
				}}
			>
				{/* Dynamic Island / Notch */}
				<div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-20" />

				{/* Content Area */}
				<div className="relative w-full h-full pt-8 px-3">
						<div
							className={`transition-opacity duration-300 h-full ${
								isTransitioning ? "opacity-0" : "opacity-100"
							}`}
						>
							{!selectedService ? (
								// Grid View
								<div className="h-full flex flex-col pb-4 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
									<h2 className="text-center text-lg font-bold text-[#1F2937] mb-4">
										Our Services
									</h2>
									<div className="grid grid-cols-2 gap-3 auto-rows-min">
										{services.map((service) => (
											<button
												key={service.id}
												onClick={() => handleServiceClick(service)}
												className="
                          bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 
                          transition-all duration-200 
                          hover:-translate-y-0.5
                          hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                        "
											>
												<img
													src={service.image}
													alt={service.name}
													className="w-16 h-16 object-contain"
												/>
												<span className="text-sm font-semibold text-[#1F2937]">
													{service.name}
												</span>
											</button>
										))}
									</div>
								</div>
							) : (
								// Expanded Service View
								<div className="h-full flex flex-col relative pb-4">
									{/* Back Button */}
									<button
										onClick={handleBack}
										className="absolute top-2 left-1 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:bg-white transition-colors"
									>
										<ArrowLeft className="w-5 h-5 text-[#1F2937]" />
									</button>

									{/* Service Icon at Top */}
									<div className="flex justify-center items-start pt-0">
										<img
											src={selectedService.image}
											alt={selectedService.name}
											className="w-24 h-24 object-contain"
											loading="eager"
										/>
									</div>

									{/* Service Content Box Centered */}
									<div className="flex-1 flex items-center justify-center px-2">
										<div className="bg-white rounded-2xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] w-full">
											<h3 className="text-xl font-bold text-[#1F2937] mb-3 text-center">
												{selectedService.name}
											</h3>
											<p className="text-[#1F2937] text-center text-sm leading-relaxed">
												{selectedService.description}
											</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Side buttons */}
				<div className="absolute top-20 -left-1 w-1 h-8 bg-gray-900 rounded-l-sm" />
				<div className="absolute top-32 -left-1 w-1 h-12 bg-gray-900 rounded-l-sm" />
				<div className="absolute top-32 -right-1 w-1 h-16 bg-gray-900 rounded-r-sm" />
			</div>
		</div>
	);
};

export default ServicesPhoneFrame;
