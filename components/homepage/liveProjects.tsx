"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const liveProjects = [
	{
		title: "Project Alpha",
		description: "Real-time data visualization dashboard.",
		url: "#",
	},
	{
		title: "Project Beta",
		description: "E-commerce platform with head-less CMS.",
		url: "#",
	},
	{
		title: "Project Gamma",
		description: "Interactive AI-powered storytelling tool.",
		url: "#",
	},
];

export default function LiveProjects() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.from(".live-project-anim", {
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
			ref={containerRef}
			className="relative w-full px-6 py-20 md:py-32 max-w-6xl mx-auto border-t border-border/40"
		>
			<h2 className="live-project-anim text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-12 font-medium">
				Live Projects
			</h2>

			<div className="flex flex-col">
				{liveProjects.map((project, idx) => (
					<a
						key={idx}
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="live-project-anim group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border/30 hover:border-foreground/30 transition-colors duration-500"
					>
						<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
							<h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground transition-transform duration-500 group-hover:-translate-x-2">
								{project.title}
							</h3>
							<p className="text-muted-foreground font-medium text-sm md:text-base mt-2 md:mt-0 transition-opacity duration-500 group-hover:text-foreground/80">
								{project.description}
							</p>
						</div>

						<div className="mt-4 md:mt-0 opacity-50 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-foreground">
							<ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
