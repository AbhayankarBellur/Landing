const PolicyLinks = () => {
	const policies = [
		{
			title: "Privacy Policy",
			description:
				"Explains how personal information is collected, used, stored, and protected when you use the Warmpawz platform.",
			link: "#",
		},
		{
			title: "Security of Platform Paper",
			description:
				"Outlines the technical and organisational measures taken to safeguard user data, platform access, and transactions.",
			link: "#",
		},
		{
			title: "Terms of Use & Platform Guidelines",
			description:
				"Describes acceptable use, responsibilities, and platform-level expectations for users and service providers.",
			link: "#",
		},
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-[#F5A855] mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
						What You'll Find Here
					</h2>
					<p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-8 text-center">
						Our policies are designed to be clear, accessible, and aligned with
						applicable Indian laws and digital best practices — so users can
						engage with confidence and clarity.
					</p>
				</div>

				<div className="space-y-6">
					{policies.map((policy, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#F5A855] hover:shadow-xl transition-shadow"
						>
							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
								{policy.title}
							</h3>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
								{policy.description}
							</p>
							<a
								href={policy.link}
								className="inline-flex items-center text-[#F5A855] font-semibold hover:text-[#E09642] transition-colors"
							>
								Read Full Document →
							</a>
						</div>
					))}
				</div>

				<div className="mt-8 text-center">
					<p className="text-lg text-gray-600">
						Each document is reviewed periodically to reflect changes in
						technology, regulations, or platform functionality.
					</p>
				</div>
			</div>
		</section>
	);
};

export default PolicyLinks;
