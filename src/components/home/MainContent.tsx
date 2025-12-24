import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import petTrainingImage from "@/assets/pet-training.png";
import serviceProviderImage from "/images/service_provider.png";
import PhoneMockupCenter from "./PhoneMockupCenter";
import LandingSection from "./LandingSection";
import MobileSection from "./MobileSection";
import { useDesktopHoverAnimations } from "@/hooks/useDesktopHoverAnimations";
import { useMobileScrollAnimations } from "@/hooks/useMobileScrollAnimations";

interface MainContentProps {
	isVisible: boolean;
}

const MainContent = ({ isVisible }: MainContentProps) => {
	const navigate = useNavigate();
	const [hoveredSection, setHoveredSection] = useState<number | null>(null);
	const petParentRef = useRef<HTMLDivElement>(null);
	const serviceProviderRef = useRef<HTMLDivElement>(null);
	const petParentImageRef = useRef<HTMLDivElement>(null);
	const serviceProviderImageRef = useRef<HTMLDivElement>(null);
	const petParentButtonRef = useRef<HTMLButtonElement>(null);
	const serviceProviderButtonRef = useRef<HTMLButtonElement>(null);
	const mobileParentImageRef = useRef<HTMLDivElement>(null);
	const mobileProviderImageRef = useRef<HTMLDivElement>(null);
	const centerPhoneRef = useRef<HTMLDivElement>(null);
	const mobilePhoneRef = useRef<HTMLDivElement>(null);

	const handleNavigation = (path: string) => {
		// Mark that user has navigated within the session
		sessionStorage.setItem("hasNavigated", "true");
		navigate(path);
	};

	// Use custom hooks for animations
	useDesktopHoverAnimations({
		hoveredSection,
		petParentImageRef,
		serviceProviderImageRef,
		petParentButtonRef,
		serviceProviderButtonRef,
		centerPhoneRef,
	});

	useMobileScrollAnimations({
		mobileParentImageRef,
		mobileProviderImageRef,
		mobilePhoneRef,
	});

	return (
		<div
			className={`min-h-screen font-body transition-all duration-1000 ease-out overflow-x-hidden ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
			}`}
			style={{
				background:
					"linear-gradient(180deg, #FFF1E6 0%, #FFF8D6 45%, #FFFFFF 100%)",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
				transition: "background 0.3s ease-in-out",
			}}
		>
			{/* Mobile Layout (Vertical Stack) - Hidden on lg+ */}
			<div className="flex flex-col items-center justify-center min-h-screen lg:hidden relative px-4 sm:px-6 py-12 pt-32">
				{/* Pet Parent Section - Top */}
				<MobileSection
					title="Pet Parent"
					image={petTrainingImage}
					navigateTo="/user-walkthrough"
					onNavigate={handleNavigation}
					imageRef={mobileParentImageRef}
					className="mb-6 sm:mb-8"
				/>

				{/* Center Mobile Frame with Warmpawz Heading */}
				<div className="flex flex-col items-center mb-4 sm:mb-6">
					<PhoneMockupCenter ref={mobilePhoneRef} variant="mobile" />
				</div>

				{/* Service Provider Section - Bottom */}
				<MobileSection
					title="Service Provider"
					image={serviceProviderImage}
					navigateTo="/vendor-onboarding"
					onNavigate={handleNavigation}
					imageRef={mobileProviderImageRef}
					className="-mt-20 sm:-mt-24 pt-10 md:-mt-28"
				/>
			</div>

			{/* Desktop/Laptop Layout (Horizontal Split Screen) - Hidden below lg */}
			<div className="hidden lg:flex h-screen w-full relative">
				{/* Pet Parent Section - Left Side (Full Height) */}
				<LandingSection
					ref={petParentRef}
					title="Pet Parent"
					image={petTrainingImage}
					navigateTo="/user-walkthrough"
					onNavigate={handleNavigation}
					onMouseEnter={() => setHoveredSection(0)}
					onMouseLeave={() => setHoveredSection(null)}
					imageRef={petParentImageRef}
					buttonRef={petParentButtonRef}
				/>

				{/* Center Mobile Frame with Warmpawz Heading - Floating */}
				<div
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto"
					onMouseEnter={() => setHoveredSection(2)}
					onMouseLeave={() => setHoveredSection(null)}
				>
					<PhoneMockupCenter ref={centerPhoneRef} variant="desktop" />
				</div>

				{/* Service Provider Section - Right Side (Full Height) */}
				<LandingSection
					ref={serviceProviderRef}
					title="Service Provider"
					image={serviceProviderImage}
					navigateTo="/vendor-onboarding"
					onNavigate={handleNavigation}
					onMouseEnter={() => setHoveredSection(1)}
					onMouseLeave={() => setHoveredSection(null)}
					imageRef={serviceProviderImageRef}
					buttonRef={serviceProviderButtonRef}
				/>
			</div>
		</div>
	);
};

export default MainContent;
