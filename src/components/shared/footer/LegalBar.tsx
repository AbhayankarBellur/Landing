interface LegalBarProps {
	onNavigate: (path: string) => void;
}

const LegalBar = ({ onNavigate }: LegalBarProps) => {
	return (
		<div className="w-full bg-[#f69052] py-4 pb-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
					<p className="text-sm text-white">
						© 2025 Warmpawz All rights reserved.
					</p>
					<div className="flex space-x-6">
						<button
							onClick={() => onNavigate("/about")}
							className="text-sm text-white hover:text-gray-200 transition-colors"
						>
							Terms of Service
						</button>
						<button
							onClick={() => onNavigate("/about")}
							className="text-sm text-white hover:text-gray-200 transition-colors"
						>
							Privacy Policy
						</button>
						<button
							onClick={() => onNavigate("/about")}
							className="text-sm text-white hover:text-gray-200 transition-colors"
						>
							Cookies
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LegalBar;
