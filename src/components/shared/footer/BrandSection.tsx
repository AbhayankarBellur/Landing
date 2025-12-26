import warmpawzLogo from "@/assets/warmpawz logo (1).svg";

const BrandSection = () => {
	return (
		<div className="col-span-1 md:col-span-1 lg:col-span-1">
			<div className="flex items-center mb-2">
				<img src={warmpawzLogo} alt="Warmpawz" className="h-16 w-auto" />
				<span className="text-xs font-semibold align-super ml-0.5">TM</span>
			</div>
			<h3 className="text-sm font-bold text-gray-900 mb-2">Pet Care. Reimagined.</h3>
			<p className="text-xs text-gray-600">Warmpawz, 2025</p>
		</div>
	);
};

export default BrandSection;
