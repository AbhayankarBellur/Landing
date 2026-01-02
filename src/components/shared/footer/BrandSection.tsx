import { useNavigate } from "react-router-dom";
import warmpawzLogo from "@/assets/warmpawz logo (1).svg";
import { ROUTES } from "@/config/constants";

const BrandSection = () => {
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate(ROUTES.home);
		window.scrollTo(0, 0);
	};

	return (
		<div className="col-span-1 md:col-span-1 lg:col-span-1">
			<button
				onClick={handleLogoClick}
				className="flex items-center mb-2 cursor-pointer hover:opacity-80 transition-opacity"
				aria-label="Navigate to home page"
			>
				<div className="relative inline-block">
					<img src={warmpawzLogo} alt="Warmpawz" className="h-16 w-auto" />
					<span className="absolute -top-1 -right-3 text-[10px] font-bold">TM</span>
				</div>
			</button>
			<h3 className="text-sm font-bold text-gray-900 mb-2">Pet Care. Reimagined.</h3>
			<p className="text-xs text-gray-600">Warmpawz, 2025</p>
		</div>
	);
};

export default BrandSection;
