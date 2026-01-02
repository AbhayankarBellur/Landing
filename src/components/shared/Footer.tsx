import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactModal from "./footer/ContactModal";
import SocialMediaLinks from "./footer/SocialMediaLinks";
import AppDownloadLinks from "./footer/AppDownloadLinks";
import BrandSection from "./footer/BrandSection";
import LegalBar from "./footer/LegalBar";

const Footer = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleNavigation = (path: string) => {
		navigate(path);
	};

	return (
		<>
			{/* Thin orange separator line between body and footer */}
			<div className="w-full h-px bg-[#F5A855]" />

			<footer className="bg-white pt-8 pb-4 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 pb-4">
						{/* Brand Section */}
						<BrandSection />

						{/* Policies Section */}
						<div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center lg:items-start">
							<h4 className="text-base font-semibold text-gray-900 mb-2 mt-[4.5rem] lg:mt-0">
								Policies
							</h4>
							<div className="space-y-1 flex flex-col items-center lg:items-start mb-6">
								<button
									onClick={() => handleNavigation("/policies")}
									className="block text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-center lg:text-left"
								>
									Privacy
								</button>
								<button
									onClick={() => handleNavigation("/policies")}
									className="block text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-center lg:text-left"
								>
									Security
								</button>
							</div>
							
							<button
								onClick={() => handleNavigation("/careers")}
								className="text-base font-semibold text-gray-900 hover:text-[#F5A855] transition-colors text-center lg:text-left block"
							>
								Careers
							</button>
						</div>

						{/* About Us Section */}
						<div className="col-span-1 md:col-span-1 lg:col-span-1">
							<button
								onClick={() => handleNavigation("/about")}
								className="text-base font-semibold text-gray-900 hover:text-[#F5A855] transition-colors text-left block mb-4"
							>
								About Us
							</button>
							<SocialMediaLinks />
						</div>

						{/* Get the App Section */}
						<div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center">
							<h4 className="text-base font-semibold text-gray-900 mb-2">
								Get the app
							</h4>
							<AppDownloadLinks onNavigate={handleNavigation} />
						</div>

						{/* Contact Us Section */}
						<div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-end mt-4 md:mt-0">
							<div className="w-full lg:w-auto flex flex-col items-center lg:items-end">
								<button
									onClick={() => setIsModalOpen(true)}
									className="bg-[#F5A855] text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:ring-offset-2 shadow-sm hover:shadow-md mb-3"
								>
									Contact Us
								</button>
								<p className="text-sm text-gray-600 text-center lg:text-right leading-relaxed">
									Have questions or need support? We're here to help you and
									your furry friends.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Contact Us Modal */}
			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>

			{/* Legal Bar */}
			<LegalBar onNavigate={handleNavigation} />
		</>
	);
};

export default Footer;
