import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);
	const backdropRef = useRef<HTMLDivElement>(null);
	const modalContentRef = useRef<HTMLDivElement>(null);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		userType: "",
		query: "",
	});

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			document.body.style.overflow = "hidden";

			// GSAP animation for opening - use requestAnimationFrame to ensure DOM is ready
			requestAnimationFrame(() => {
				if (backdropRef.current && modalContentRef.current) {
					gsap.set(backdropRef.current, { opacity: 0 });
					gsap.set(modalContentRef.current, {
						scale: 0.7,
						opacity: 0,
						y: 50,
					});

					const tl = gsap.timeline();
					tl.to(backdropRef.current, {
						opacity: 1,
						duration: 0.3,
						ease: "power2.out",
					}).to(
						modalContentRef.current,
						{
							scale: 1,
							opacity: 1,
							y: 0,
							duration: 0.4,
							ease: "back.out(1.7)",
						},
						"-=0.1"
					);
				}
			});
		}
	}, [isOpen]);

	useEffect(() => {
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				handleClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
		}

		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen, onClose]);

	const handleClose = () => {
		if (backdropRef.current && modalContentRef.current) {
			const tl = gsap.timeline({
				onComplete: () => {
					setIsVisible(false);
					document.body.style.overflow = "";
					onClose();
				},
			});

			tl.to(modalContentRef.current, {
				scale: 0.8,
				opacity: 0,
				y: -30,
				duration: 0.25,
				ease: "power2.in",
			}).to(
				backdropRef.current,
				{
					opacity: 0,
					duration: 0.2,
					ease: "power2.in",
				},
				"-=0.1"
			);
		} else {
			setIsVisible(false);
			document.body.style.overflow = "";
			onClose();
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		handleClose();
	};

	if (!isVisible) return null;

	return (
		<div ref={modalRef} className="fixed inset-0 z-50 overflow-y-auto">
			{/* Backdrop */}
			<div
				ref={backdropRef}
				className="fixed inset-0 bg-black bg-opacity-50"
				onClick={handleClose}
			/>

			{/* Modal Content */}
			<div className="flex min-h-full items-center justify-center p-4">
				<div
					ref={modalContentRef}
					className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Modal Header */}
					<div className="flex items-center justify-between p-6 border-b border-gray-200">
						<h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
						<button
							onClick={handleClose}
							className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:ring-offset-1"
							aria-label="Close modal"
						>
							<svg
								className="w-5 h-5 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
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

					{/* Modal Body */}
					<div className="p-6">
						<p className="text-sm text-gray-600 mb-6 leading-relaxed">
							Have questions or need support? We're here to help you and your
							furry friends.
						</p>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="modalFullName"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Full Name
								</label>
								<input
									type="text"
									id="modalFullName"
									name="fullName"
									value={formData.fullName}
									onChange={handleInputChange}
									placeholder="Ex: Sparky Singh"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
									style={{ minHeight: "48px" }}
								/>
							</div>

							<div>
								<label
									htmlFor="modalEmail"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="modalEmail"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="Sparky@gmail.com"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
									style={{ minHeight: "48px" }}
								/>
							</div>

							<div>
								<label
									htmlFor="modalPhone"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Phone Number
								</label>
								<input
									type="tel"
									id="modalPhone"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									placeholder="+91 9876 54321"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
									style={{ minHeight: "48px" }}
								/>
							</div>

							<div>
								<label
									htmlFor="modalUserType"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Choose User
								</label>
								<select
									id="modalUserType"
									name="userType"
									value={formData.userType}
									onChange={handleInputChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
									style={{ minHeight: "48px" }}
								>
									<option value="">Select user type</option>
									<option value="pet-parent">Pet Parent</option>
									<option value="service-provider">Service Provider</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="modalQuery"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Query?
								</label>
								<textarea
									id="modalQuery"
									name="query"
									value={formData.query}
									onChange={handleInputChange}
									placeholder="Type your query"
									rows={3}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent resize-none transition-colors"
									style={{ minHeight: "80px" }}
								/>
							</div>

							{/* Modal Footer */}
							<div className="flex gap-3 pt-4">
								<button
									type="button"
									onClick={handleClose}
									className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1"
									style={{ minHeight: "48px" }}
								>
									Cancel
								</button>
								<button
									type="submit"
									className="flex-1 bg-[#F5A855] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:ring-offset-1"
									style={{ minHeight: "48px" }}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
