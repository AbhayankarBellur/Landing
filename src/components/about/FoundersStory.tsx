import { useEffect, useRef, useState } from "react";

const FoundersStory = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

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

	const storyBeats = [
		{
			title: "The Conversation",
			content:
				"Warmpawz began on a cold winter night, during a quiet conversation among family friends — most of them pet parents. What started as casual discussion soon turned into shared anxiety about one thing: how hard it was to access reliable emergency care for their furry family members.",
		},
		{
			title: "The Discovery",
			content:
				"As we began exploring what existed in the public domain for pet parents, a deeper truth emerged — a significant gap. Not just in emergency care, but across the entire journey of pet parenthood.",
		},
		{
			title: "The Question",
			content:
				"We also asked ourselves another important question: If this journey felt overwhelming for pet parents, how difficult must it be for genuine pet care providers trying to reach the families who need them most?",
		},
		{
			title: "The Vision",
			content:
				"That question led to the idea of a Connected Ecosystem — a trusted pet services marketplace. A platform where pet parents can access verified service providers with clarity and confidence.",
		},
	];

	return (
		<section
			id="story"
			ref={sectionRef}
			className="py-20 pt-32 px-4 sm:px-6 lg:px-8"
		>
			<div className="max-w-4xl mx-auto">
				<div
					className={`text-center mb-16 transition-all duration-300 ease-out ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
					}`}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Our Story
					</h2>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full"></div>
				</div>

				<div className="space-y-12">
					{storyBeats.map((beat, index) => (
						<div
							key={index}
							className={`transition-all duration-300 ease-out ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{
								transitionDelay: isVisible ? `${(index + 1) * 120}ms` : "0ms",
							}}
						>
							<div className="flex items-start space-x-6">
								<div className="flex-shrink-0">
									<div className="w-3 h-3 bg-[#F5A855] rounded-full mt-2"></div>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{beat.title}
									</h3>
									<p className="text-gray-600 leading-relaxed text-lg">
										{beat.content}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div
					className={`mt-16 p-8 bg-gray-50 rounded-2xl transition-all duration-300 ease-out ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
					style={{
						transitionDelay: isVisible ? "600ms" : "0ms",
					}}
				>
					<h3 className="text-2xl font-semibold text-gray-900 mb-4">
						Why Warmpawz Exists
					</h3>
					<p className="text-gray-600 leading-relaxed text-lg mb-4">
						Pet care in India has grown, but it has not grown together. Services
						remain fragmented, knowledge is unevenly distributed, and trust is
						often built through personal networks rather than transparent
						systems.
					</p>
					<p className="text-gray-600 leading-relaxed text-lg">
						Warmpawz exists to bring structure without rigidity, standards
						without exclusion, and choice without confusion. We believe
						meaningful care emerges when service providers are supported to
						innovate responsibly, and pet parents are equipped to make informed,
						compassionate choices.
					</p>
				</div>
			</div>
		</section>
	);
};

export default FoundersStory;
