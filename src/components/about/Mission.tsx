import { useEffect, useRef, useState } from "react";

const Mission = () => {
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
			id="mission"
			ref={sectionRef}
			className="py-20 px-4 sm:px-6 lg:px-8"
		>
			<div className="max-w-4xl mx-auto">
				<div className="text-center">
					<div
						className={`inline-block bg-white rounded-3xl shadow-lg p-12 md:p-16 transition-all duration-360 ease-out ${
							isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
						}`}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
							Our Mission
						</h2>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
						<p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
							To build a trusted pet care ecosystem that empowers service
							providers to grow with integrity, and enables pet parents to make
							informed, confident choices through transparency, community, and
							care.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;
