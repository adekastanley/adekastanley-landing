"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Logo() {
	const logoRef = useRef<HTMLAnchorElement>(null);

	useGSAP(
		() => {
			gsap.from(logoRef.current, {
				y: -20,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
				delay: 2, // Wait for preloader to finish
			});
		},
		{ scope: logoRef },
	);

	return (
		<Link
			ref={logoRef}
			href="/"
			className="fixed top-6 left-6 md:top-10 md:left-10 h-12 flex items-center z-60 mix-blend-difference text-white font-bold tracking-tighter text-xl md:text-2xl hover:scale-105 transition-transform duration-300 origin-left"
		>
			A/S
		</Link>
	);
}
