const Commitment = () => {
	const commitments = [
		"Respecting user privacy",
		"Protecting platform and data security",
		"Operating transparently and responsibly",
		"Building long-term trust across the pet care ecosystem",
	];

	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-[#F5A855]">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
						Our Commitment
					</h2>
					<p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-6 text-center">
						Warmpawz is committed to:
					</p>
					<ul className="space-y-3">
						{commitments.map((commitment, index) => (
							<li
								key={index}
								className="flex items-start gap-3 text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
							>
								<span className="text-[#F5A855] mt-1">•</span>
								<span>{commitment}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Commitment;
