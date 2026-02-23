"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EngineeringApproach() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.from(".approach-anim", {
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 75%",
				},
				y: 40,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
				stagger: 0.15,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="relative w-full px-6 py-20 md:py-32 max-w-6xl mx-auto border-t border-border/40"
		>
			<div className="flex flex-col md:flex-row gap-12 md:gap-24">
				{/* Left: Large Statement */}
				<div className="md:w-1/2">
					<h2 className="approach-anim text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 font-medium">
						Engineering Approach
					</h2>
					<h3 className="approach-anim text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
						I build systems, not just interfaces.
					</h3>
				</div>

				{/* Right: Body Text */}
				<div className="md:w-1/2 flex flex-col justify-center">
					<p className="approach-anim text-lg md:text-xl text-foreground/80 leading-relaxed font-medium text-balance mb-6">
						My focus is clean architecture, predictable state management,
						scalable backend design, and cross-platform consistency.
					</p>
					<p className="approach-anim text-lg md:text-xl text-foreground/80 leading-relaxed font-medium text-balance">
						I prioritize maintainability, performance, and production readiness
						over visual noise.
					</p>
				</div>
			</div>
		</section>
	);
}
