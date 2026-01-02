import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import warmpawzLogo from "@/assets/warmpawz logo (1).svg";
import { ROUTES, COLORS, SCROLL } from "@/config/constants";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleNavigation = (path: string) => {
		navigate(path);
		// Close mobile menu after navigation
		setIsMobileMenuOpen(false);
	};

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	// Handle scroll to show/hide navbar
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY < SCROLL.navbarShowThreshold) {
				// Always show at top with larger threshold
				setIsVisible(true);
			} else if (currentScrollY > lastScrollY && currentScrollY > SCROLL.navbarHideThreshold) {
				// Scrolling down - hide navbar (only after scrolling past threshold)
				setIsVisible(false);
			} else if (currentScrollY < lastScrollY) {
				// Scrolling up - show navbar
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		// Debounce scroll events for smoother performance
		let ticking = false;
		const debouncedHandleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", debouncedHandleScroll);
		};
	}, [lastScrollY]);

	// Handle body scroll when menu opens/closes
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<nav
				className={`fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-40 bg-white rounded-full shadow-lg border border-gray-100 transition-all duration-300 ease-in-out ${
					isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
				}`}
			>
				<div className="px-6">
					<div className="flex justify-start items-center gap-12 h-20">
						{/* Logo */}
						<div className="flex-shrink-0">
							<button
								onClick={() => handleNavigation("/")}
								className="flex items-center hover:opacity-80 transition-opacity"
							>
								<img
									src={warmpawzLogo}
									alt="Warmpawz"
									className="h-16 w-auto"
								/>
								<span className="text-xs font-semibold align-super ml-0.5">
									TM
								</span>
							</button>
						</div>

						{/* Center Navigation Links */}
						<div className="hidden md:flex items-center space-x-8">
							<button
								onClick={() => handleNavigation("/services")}
								className={`px-4 py-2 text-sm font-semibold transition-colors ${
									isActive("/services")
										? "text-[#F5A855]"
										: "text-gray-700 hover:text-[#F5A855]"
								}`}
							>
								SERVICES
							</button>
							<button
								onClick={() => handleNavigation("/blog")}
								className={`px-4 py-2 text-sm font-semibold transition-colors ${
									isActive("/blog")
										? "text-[#F5A855]"
										: "text-gray-700 hover:text-[#F5A855]"
								}`}
							>
								BLOG
							</button>
							<button
								onClick={() => handleNavigation("/news-events")}
								className={`px-4 py-2 text-sm font-semibold transition-colors ${
									isActive("/news-events")
										? "text-[#F5A855]"
										: "text-gray-700 hover:text-[#F5A855]"
								}`}
							>
								NEWS & EVENTS
							</button>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden ml-auto">
							<button
								type="button"
								onClick={toggleMobileMenu}
								className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F5A855] transition-colors"
								aria-expanded={isMobileMenuOpen}
							>
								<span className="sr-only">
									{isMobileMenuOpen ? "Close main menu" : "Open main menu"}
								</span>
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Fixed Overlay Drawer - Always rendered, never unmounted */}
			<div className="md:hidden">
				{/* Backdrop */}
				<div
					className="fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-200 ease-out"
					style={{
						opacity: isMobileMenuOpen ? 1 : 0,
						pointerEvents: isMobileMenuOpen ? "auto" : "none",
					}}
					onClick={closeMobileMenu}
				/>

				{/* Drawer Panel */}
				<div
					className="fixed top-0 right-0 h-screen bg-white shadow-xl z-50"
					style={{
						width: "80vw",
						maxWidth: "360px",
						transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
						opacity: isMobileMenuOpen ? 1 : 0,
						pointerEvents: isMobileMenuOpen ? "auto" : "none",
						transition:
							"transform 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease-out",
					}}
					role="navigation"
					aria-label="Mobile navigation menu"
				>
					{/* Close Button */}
					<div className="flex justify-end p-4">
						<button
							onClick={closeMobileMenu}
							className="p-2 rounded-full hover:bg-gray-100 transition-colors"
							aria-label="Close menu"
						>
							<svg
								className="h-6 w-6 text-gray-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Navigation Items */}
					<div className="px-6 py-4 space-y-4">
						<button
							onClick={() => handleNavigation("/services")}
							className={`block w-full text-left px-4 py-4 rounded-lg text-lg font-semibold transition-colors ${
								isActive("/services")
									? "text-[#F5A855] bg-[#F5A855]/10"
									: "text-gray-700 hover:text-[#F5A855] hover:bg-gray-50"
							}`}
						>
							SERVICES
						</button>
						<button
							onClick={() => handleNavigation("/blog")}
							className={`block w-full text-left px-4 py-4 rounded-lg text-lg font-semibold transition-colors ${
								isActive("/blog")
									? "text-[#F5A855] bg-[#F5A855]/10"
									: "text-gray-700 hover:text-[#F5A855] hover:bg-gray-50"
							}`}
						>
							BLOG
						</button>
						<button
							onClick={() => handleNavigation("/news-events")}
							className={`block w-full text-left px-4 py-4 rounded-lg text-lg font-semibold transition-colors ${
								isActive("/news-events")
									? "text-[#F5A855] bg-[#F5A855]/10"
									: "text-gray-700 hover:text-[#F5A855] hover:bg-gray-50"
							}`}
						>
							NEWS & EVENTS
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
