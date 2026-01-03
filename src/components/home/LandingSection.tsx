import { forwardRef } from "react";

interface LandingSectionProps {
	title: string;
	image: string;
	navigateTo: string;
	onNavigate: (path: string) => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	imageRef?: React.RefObject<HTMLDivElement>;
	buttonRef?: React.RefObject<HTMLButtonElement>;
	sectionRef?: React.RefObject<HTMLDivElement>;
}

const LandingSection = forwardRef<HTMLDivElement, LandingSectionProps>(
	(
		{
			title,
			image,
			navigateTo,
			onNavigate,
			onMouseEnter,
			onMouseLeave,
			imageRef,
			buttonRef,
		},
		sectionRef
	) => {
		return (
			<div
				ref={sectionRef}
				className="w-1/2 h-full flex flex-col items-center justify-center relative cursor-pointer transition-all duration-300"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={() => onNavigate(navigateTo)}
			>
				{/* Decorative Image */}
				<div
					ref={imageRef}
					className="relative z-0 w-56 h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex items-end justify-center mb-6"
				>
					<img
						src={image}
						alt=""
						loading="eager"
						className="w-full h-full object-contain object-bottom"
						aria-hidden="true"
						style={{ willChange: 'transform' }}
					/>
				</div>
				{/* Button */}
				<button
					ref={buttonRef}
					onClick={(e) => {
						e.stopPropagation();
						onNavigate(navigateTo);
					}}
					className="px-12 py-6 xl:px-14 xl:py-7 2xl:px-16 2xl:py-8 bg-[#f69052] text-black rounded-full text-xl xl:text-2xl 2xl:text-3xl font-bold font-display shadow-lg whitespace-nowrap transition-colors"
				>
					{title}
				</button>
			</div>
		);
	}
);

LandingSection.displayName = "LandingSection";

export default LandingSection;
