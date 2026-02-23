"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focusItems = [
	"Advanced backend architecture",
	"Scalable system design",
	"Infrastructure & deployment",
	"Security fundamentals",
	"Cross-platform application architecture",
];

export default function CurrentFocus() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.from(".focus-anim", {
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
				},
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: "power3.out",
				stagger: 0.1,
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
				{/* Left: Title */}
				<div className="md:w-1/3">
					<h2 className="focus-anim text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 font-medium">
						Currently Advancing Into
					</h2>
				</div>

				{/* Right: List */}
				<div className="md:w-2/3 flex flex-col gap-6">
					{focusItems.map((item, idx) => (
						<div key={idx} className="focus-anim flex items-start gap-4 group">
							<span className="text-muted-foreground font-mono mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
								0{idx + 1}
							</span>
							<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-300">
								{item}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
