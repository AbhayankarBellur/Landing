interface AppDownloadLinksProps {
	onNavigate: (path: string) => void;
}

const AppDownloadLinks = ({ onNavigate }: AppDownloadLinksProps) => {
	return (
		<div className="flex space-x-3">
			<button
				onClick={() => onNavigate("/about")}
				className="flex items-center space-x-1 text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-left"
			>
				<div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
					<span className="text-white text-xs">A</span>
				</div>
				<span>Android</span>
			</button>
			<button
				onClick={() => onNavigate("/about")}
				className="flex items-center space-x-1 text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-left"
			>
				<div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
					<span className="text-white text-xs">🍎</span>
				</div>
				<span>iOS</span>
			</button>
		</div>
	);
};

export default AppDownloadLinks;
