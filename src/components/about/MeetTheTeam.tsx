import { useEffect, useRef, useState } from "react";

const MeetTheTeam = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [expandedCard, setExpandedCard] = useState<number | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.2, rootMargin: "-50px" }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [isVisible]);

	const teamMembers = [
		{
			name: "Sarah Chen",
			role: "Founder & CEO",
			avatar: "SC",
			description:
				"Passionate about creating meaningful connections between pets and their families. 8+ years in marketplace development and community building.",
		},
		{
			name: "Dr. Raj Patel",
			role: "Head of Veterinary Relations",
			avatar: "RP",
			description:
				"Licensed veterinarian with 12+ years of clinical experience. Dedicated to improving access to quality pet healthcare across communities.",
		},
		{
			name: "Maya Singh",
			role: "Product Lead",
			avatar: "MS",
			description:
				"Former pet parent turned product strategist. Specializes in user experience design and building trust through transparent technology.",
		},
		{
			name: "Alex Kumar",
			role: "Community Manager",
			avatar: "AK",
			description:
				"Community builder and pet advocate. Focuses on creating supportive environments where pet parents and service providers can thrive together.",
		},
	];

	const handleCardClick = (index: number) => {
		setExpandedCard(expandedCard === index ? null : index);
	};

	return (
		<section id="team" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div
					className={`text-center mb-16 transition-all duration-300 ease-out ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
					}`}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Meet Our Team
					</h2>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						The passionate people behind Warmpawz, united by our love for pets
						and commitment to their wellbeing.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className={`transition-all duration-300 ease-out ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{
								transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
							}}
						>
							<div
								className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-out ${
									expandedCard === index
										? "shadow-2xl scale-105"
										: "shadow-lg hover:shadow-xl hover:-translate-y-1"
								}`}
								onClick={() => handleCardClick(index)}
							>
								{/* Avatar */}
								<div
									className={`mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl transition-all duration-300 ease-out ${
										expandedCard === index
											? "w-20 h-20 rounded-2xl bg-[#F5A855]"
											: "w-16 h-16 rounded-full bg-[#F5A855]"
									}`}
								>
									{member.avatar}
								</div>

								{/* Name and Role */}
								<div className="text-center mb-4">
									<h3 className="text-xl font-bold text-gray-900 mb-1">
										{member.name}
									</h3>
									<p className="text-[#F5A855] font-medium">{member.role}</p>
								</div>

								{/* Expandable Description */}
								<div
									className={`overflow-hidden transition-all duration-300 ease-out ${
										expandedCard === index
											? "max-h-40 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="border-t border-gray-200 pt-4">
										<p className="text-gray-600 text-sm leading-relaxed">
											{member.description}
										</p>
									</div>
								</div>

								{/* Expand Indicator */}
								<div className="text-center mt-4">
									<div
										className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 transition-transform duration-300 ease-out ${
											expandedCard === index ? "rotate-180" : "rotate-0"
										}`}
									>
										<svg
											className="w-3 h-3 text-gray-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MeetTheTeam;
