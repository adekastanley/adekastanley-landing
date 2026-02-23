"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.from(".contact-anim", {
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 85%",
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
			id="contact"
			ref={containerRef}
			className="relative w-full px-6 py-28 md:py-40 max-w-6xl mx-auto flex flex-col items-center text-center border-t border-border/40"
		>
			<h2 className="contact-anim text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8 font-medium">
				Let's build something intentional
			</h2>

			<p className="contact-anim text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance max-w-3xl mb-12 leading-[1.1]">
				Open to full time roles, Projects and technical collaborations.
			</p>

			<a
				href="mailto:adekastanley2@gmail.com"
				className="contact-anim group relative inline-flex items-center justify-center px-10 py-5 text-sm font-medium tracking-wide text-background bg-foreground rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-xl mb-32"
			>
				<span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
					Let's Build
				</span>
				<div className="absolute inset-0 z-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			</a>

			<div className="contact-anim mt-auto w-full flex justify-between items-center pt-8 border-t border-border/20 text-xs font-mono text-muted-foreground">
				<p>© {new Date().getFullYear()} Adeka Stanley</p>
				<a
					href="https://idibia.com"
					target="_blank"
					className="flex items-center gap-2"
				>
					Founder |<p className="underline"> Idibia</p>
				</a>
			</div>
		</section>
	);
}
