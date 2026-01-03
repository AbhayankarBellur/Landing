import { useRef } from "react";

const Values = () => {
	const sectionRef = useRef<HTMLElement>(null);

	const values = [
		{
			title: "Compassion",
			description:
				"We place the wellbeing of pets at the heart of every decision we make.",
			icon: "❤️",
		},
		{
			title: "Trust",
			description:
				"We build confidence through verified partners, transparent choices, and accountable care.",
			icon: "🤝",
		},
		{
			title: "Convenience",
			description:
				"We simplify pet care by bringing trusted services together in one connected experience.",
			icon: "⚡",
		},
		{
			title: "Community",
			description:
				"We grow stronger by supporting a shared ecosystem of pet parents and care professionals.",
			icon: "🌟",
		},
	];

	return (
		<section
			id="values"
			ref={sectionRef}
			className="py-16 px-4 sm:px-6 lg:px-8"
		>
			<div className="max-w-6xl mx-auto">
				<div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-[#F5A855]">
					{/* Header inside the box */}
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Our Values
						</h2>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full"></div>
					</div>

					{/* Values grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{values.map((value, index) => (
							<div
								key={index}
								className="group rounded-2xl p-8 border-2 border-gray-200 hover:border-[#F5A855] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out"
								style={{
									background: "linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)",
								}}
							>
								<div className="text-4xl mb-4">{value.icon}</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{value.title}
								</h3>
								<p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
									{value.description}
								</p>
							</div>
						))}
					</div>

					{/* Warmth value centered at bottom */}
					<div className="mt-8 text-center md:text-center">
						<div 
							className="rounded-2xl p-8 border-2 border-gray-200 inline-block hover:border-[#F5A855] hover:shadow-md transition-all duration-300 text-left md:text-center"
							style={{
								background: "linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)",
							}}
						>
							<div className="text-4xl mb-4">🤗</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Warmth</h3>
							<p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl">
								We lead with empathy, care, and a human touch in every
								interaction.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
