"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.from(".hero-anim", {
				y: 40,
				opacity: 0,
				duration: 1.2,
				ease: "power3.out",
				stagger: 0.1,
				delay: 0.2,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen w-full flex flex-col justify-center px-6 py-28 md:py-40 max-w-6xl mx-auto"
		>
			<div className="flex flex-col items-center md:items-start text-center md:text-left">
				{/* Small label */}
				<span className="hero-anim block text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 md:mb-8 font-medium">
					FULLSTACK ENGINEER
				</span>

				{/* Massive Name */}
				<h1 className="hero-anim text-[clamp(4rem,10vw,8rem)] leading-[0.9] font-bold tracking-tighter text-foreground mb-8 text-balance">
					Adeka
					<br />
					Stanley
				</h1>

				{/* Main Statement */}
				<p className="hero-anim text-xl md:text-3xl font-medium tracking-tight text-foreground/90 max-w-2xl mb-6 text-balance leading-snug">
					I design and build scalable applications across web, mobile, and
					backend systems.
				</p>

				{/* Subline */}
				<p className="hero-anim text-sm md:text-base font-mono text-muted-foreground/80 mb-12 tracking-wide">
					React · Next.js · FastAPI · Firebase · React Native · Electron
				</p>

				{/* CTAs */}
				<div className="hero-anim flex flex-col sm:flex-row gap-6 mt-4 items-center md:items-start w-full md:w-auto">
					<a
						href="#projects"
						className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-background bg-foreground rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-xl w-full sm:w-auto"
					>
						<span className="relative z-10">View Work</span>
					</a>
					<a
						href="#contact"
						className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border rounded-full transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:bg-muted/50 w-full sm:w-auto"
					>
						<span className="relative z-10 transition-transform duration-300">
							Contact
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
