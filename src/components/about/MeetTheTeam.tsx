import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const MeetTheTeam = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const mockupLayerRef = useRef<HTMLDivElement>(null);
	const mockupRefs = useRef<(HTMLDivElement | null)[]>([]);
	const floatAnimationRef = useRef<gsap.core.Tween | null>(null);

	const teamMembers = [
		{
			name: "Vikram Bellur",
			role: "Founder & CEO",
			avatar: "VB",
			description:
				"Passionate about creating meaningful connections between pets and their families. 8+ years in marketplace development and community building.",
		},
		{
			name: "Ketan Hirani",
			role: "Head of Veterinary Relations",
			avatar: "KH",
			description:
				"Licensed veterinarian with 12+ years of clinical experience. Dedicated to improving access to quality pet healthcare across communities.",
		},
		{
			name: "Niranjan Delavictioreke",
			role: "Product Lead",
			avatar: "ND",
			description:
				"Former pet parent turned product strategist. Specializes in user experience design and building trust through transparent technology.",
		},
	];

	// Initialize mockup positions on mount
	useEffect(() => {
		mockupRefs.current.forEach((mockup, index) => {
			if (!mockup) return;

			if (index === currentIndex) {
				// ACTIVE (CENTER / FRONT)
				gsap.set(mockup, {
					x: 0,
					scale: 1,
					opacity: 1,
					z: 0,
					filter: "blur(0px)",
					force3D: true,
				});
			} else {
				// INACTIVE (BEHIND FRAME)
				gsap.set(mockup, {
					x: index > currentIndex ? 120 : -120,
					scale: 0.9,
					opacity: 0,
					z: -200,
					filter: "blur(2px)",
					force3D: true,
				});
			}
		});

		// No floating animation - removed

		return () => {
			if (floatAnimationRef.current) {
				floatAnimationRef.current.kill();
			}
		};
	}, []);

	// Floating idle animation for active mockup - REMOVED
	const startFloatAnimation = (index: number) => {
		// No floating animation
		if (floatAnimationRef.current) {
			floatAnimationRef.current.kill();
		}
	};

	// Depth-swap phone mockup carousel with behind-frame replacement animation
	const transitionToIndex = (nextIndex: number, forceDirection?: 'next' | 'prev') => {
		if (isAnimating || nextIndex === currentIndex) return;
		if (nextIndex < 0 || nextIndex >= teamMembers.length) return;

		setIsAnimating(true);

		// Kill floating animation during transition (no-op now)
		if (floatAnimationRef.current) {
			floatAnimationRef.current.kill();
		}

		const currentMockup = mockupRefs.current[currentIndex];
		const nextMockup = mockupRefs.current[nextIndex];

		if (!currentMockup || !nextMockup) return;

		// Force direction based on button clicked, not index comparison
		const isNext = forceDirection === 'next';
		const timeline = gsap.timeline({
			onComplete: () => {
				setCurrentIndex(nextIndex);
				setIsAnimating(false);
				// No floating animation restart
			},
		});

		// Stage next mockup in incoming position (behind frame)
		gsap.set(nextMockup, {
			x: isNext ? 120 : -120,
			scale: 0.9,
			opacity: 0,
			z: -200,
			filter: "blur(2px)",
			force3D: true,
		});

		// Animate current mockup → outgoing (behind frame)
		timeline.to(
			currentMockup,
			{
				x: isNext ? -120 : 120,
				scale: 0.9,
				opacity: 0,
				z: -200,
				filter: "blur(2px)",
				duration: 0.9,
				ease: "power3.inOut",
				force3D: true,
			},
			0
		);

		// Animate next mockup → active (center, front)
		timeline.to(
			nextMockup,
			{
				x: 0,
				scale: 1,
				opacity: 1,
				z: 0,
				filter: "blur(0px)",
				duration: 0.9,
				ease: "power3.inOut",
				force3D: true,
			},
			0
		);
	};

	const nextSlide = () => {
		const nextIndex = (currentIndex + 1) % teamMembers.length;
		transitionToIndex(nextIndex, 'next');
	};

	const prevSlide = () => {
		const prevIndex =
			(currentIndex - 1 + teamMembers.length) % teamMembers.length;
		transitionToIndex(prevIndex, 'prev');
	};

	const goToSlide = (index: number) => {
		// Determine direction based on shortest path
		const direction = index > currentIndex ? 'next' : 'prev';
		transitionToIndex(index, direction);
	};

	return (
		<section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Meet Our Team
					</h2>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						The passionate people behind Warmpawz, united by our love for pets
						and commitment to their wellbeing.
					</p>
				</div>

				{/* Depth-Swap Phone Mockup Carousel */}
				<div className="flex flex-col items-center">
					{/* Mockup Stage with External Navigation */}
					<div className="flex items-center gap-4 sm:gap-6 md:gap-8">
						{/* Left Arrow - External */}
						<button
							onClick={prevSlide}
							disabled={isAnimating}
							className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#F5A855]"
							aria-label="Previous team member"
						>
							<svg
								className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#F5A855]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>

						{/* Phone Frame */}
						<div
							className="relative w-[240px] sm:w-[260px] md:w-[280px] lg:w-[320px]"
							style={{
								perspective: "1200px",
								transformStyle: "preserve-3d",
							}}
						>
							{/* Phone Frame (Static) */}
							<div className="relative bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl z-10">
								<div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
									{/* Dynamic Island / Notch */}
									<div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-gray-900 rounded-full z-20" />

									{/* Mockup Layer (All mockups rendered at once) */}
									<div
										ref={mockupLayerRef}
										className="absolute inset-0"
										style={{
											transformStyle: "preserve-3d",
										}}
									>
										{teamMembers.map((member, index) => (
											<div
												key={index}
												ref={(el) => (mockupRefs.current[index] = el)}
												data-index={index}
												className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8"
												style={{
													transformStyle: "preserve-3d",
												}}
											>
												{/* Avatar */}
												<div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full bg-[#F5A855] flex items-center justify-center text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 shadow-lg">
													{member.avatar}
												</div>

												{/* Name and Role */}
												<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 text-center px-2">
													{member.name}
												</h3>
												<p className="text-[#F5A855] font-semibold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-center px-2">
													{member.role}
												</p>

												{/* Description */}
												<p className="text-gray-600 text-center leading-relaxed text-xs sm:text-sm md:text-base px-2 sm:px-4">
													{member.description}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Side buttons */}
							<div className="absolute top-20 sm:top-24 md:top-28 -left-0.5 sm:-left-1 w-0.5 sm:w-1 h-6 sm:h-8 bg-gray-900 rounded-l-sm z-10" />
							<div className="absolute top-32 sm:top-36 md:top-44 -left-0.5 sm:-left-1 w-0.5 sm:w-1 h-8 sm:h-12 bg-gray-900 rounded-l-sm z-10" />
							<div className="absolute top-32 sm:top-36 md:top-44 -right-0.5 sm:-right-1 w-0.5 sm:w-1 h-10 sm:h-16 bg-gray-900 rounded-r-sm z-10" />
						</div>

						{/* Right Arrow - External */}
						<button
							onClick={nextSlide}
							disabled={isAnimating}
							className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#F5A855]"
							aria-label="Next team member"
						>
							<svg
								className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#F5A855]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</div>

					{/* Dots Indicator */}
					<div className="flex gap-2 mt-8">
						{teamMembers.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								disabled={isAnimating}
								className={`h-3 rounded-full transition-all disabled:cursor-not-allowed ${
									currentIndex === index
										? "bg-[#F5A855] w-8"
										: "bg-gray-300 hover:bg-gray-400 w-3"
								}`}
								aria-label={`Go to team member ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MeetTheTeam;
