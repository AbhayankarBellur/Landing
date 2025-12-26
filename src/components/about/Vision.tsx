import { useEffect, useRef, useState } from "react";

const Vision = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3, rootMargin: "-50px" }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [isVisible]);

	return (
		<section
			id="vision"
			ref={sectionRef}
			className="py-20 px-4 sm:px-6 lg:px-8"
		>
			<div className="max-w-4xl mx-auto">
				<div className="text-center">
					<div
						className={`transition-all duration-360 ease-out ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-3"
						}`}
					>
						<div className="bg-white rounded-3xl p-12 md:p-16 shadow-lg border-2 border-[#F5A855]">
							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
								Our Vision
							</h2>
							<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-12"></div>
							<p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
								A future where pet care is trusted, connected, and
								community-driven — enriching the lives of pets, their families,
								and the people who care for them.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Vision;
