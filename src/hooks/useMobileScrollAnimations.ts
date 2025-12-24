import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseMobileScrollAnimationsProps {
	mobileParentImageRef: RefObject<HTMLDivElement>;
	mobileProviderImageRef: RefObject<HTMLDivElement>;
	mobilePhoneRef: RefObject<HTMLDivElement>;
}

export const useMobileScrollAnimations = ({
	mobileParentImageRef,
	mobileProviderImageRef,
	mobilePhoneRef,
}: UseMobileScrollAnimationsProps) => {
	useEffect(() => {
		// Register ScrollTrigger plugin
		gsap.registerPlugin(ScrollTrigger);

		const mm = gsap.matchMedia();

		// Only apply on mobile/tablet (below lg breakpoint)
		mm.add("(max-width: 1023px)", () => {
			if (mobileParentImageRef.current) {
				gsap.fromTo(
					mobileParentImageRef.current,
					{ scale: 0.8, opacity: 0.6 },
					{
						scale: 1.2,
						opacity: 1,
						scrollTrigger: {
							trigger: mobileParentImageRef.current,
							start: "top 80%",
							end: "center center",
							scrub: 1,
						},
					}
				);
			}

			if (mobilePhoneRef.current) {
				gsap.fromTo(
					mobilePhoneRef.current,
					{ scale: 0.9, opacity: 0.7 },
					{
						scale: 1.1,
						opacity: 1,
						scrollTrigger: {
							trigger: mobilePhoneRef.current,
							start: "top 70%",
							end: "center center",
							scrub: 1,
						},
					}
				);
			}

			if (mobileProviderImageRef.current) {
				gsap.fromTo(
					mobileProviderImageRef.current,
					{ scale: 0.8, opacity: 0.6 },
					{
						scale: 1.2,
						opacity: 1,
						scrollTrigger: {
							trigger: mobileProviderImageRef.current,
							start: "top 80%",
							end: "center center",
							scrub: 1,
						},
					}
				);
			}
		});

		return () => {
			mm.revert();
		};
	}, [mobileParentImageRef, mobileProviderImageRef, mobilePhoneRef]);
};
