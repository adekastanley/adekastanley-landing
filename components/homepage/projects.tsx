"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		title: "SafeMap",
		description:
			"Security-focused application leveraging mobile infrastructure and backend integration.",
		stack: "Next Js · React Native · Backend API · Mapping Integration",
		role: "Fullstack Developer",
		featured: true,
	},
	{
		title: "Munch Map",
		description:
			"Mobile application for tracking food vendors and prices in real time.",
		stack:
			"Next Js · React Native · TypeScript · Redux Toolkit · Tailwind · GSAP",
		role: "Frontend Architect",
		featured: false,
	},
	{
		title: "Eazy CBT",
		description:
			"Offline-first LAN-based testing system designed for reliability in low-connectivity environments.",
		stack: "React · Local Network Architecture · Backend Logic",
		role: "System Designer",
		featured: false,
	},
];

export default function Projects() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const cards = gsap.utils.toArray(".project-card");

			cards.forEach((card: any) => {
				gsap.from(card, {
					scrollTrigger: {
						trigger: card,
						start: "top 85%",
					},
					y: 50,
					opacity: 0,
					duration: 1,
					ease: "power3.out",
				});
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			id="projects"
			ref={containerRef}
			className="relative w-full px-6 py-20 md:py-40 max-w-6xl mx-auto"
		>
			<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 md:mb-24 text-balance">
				Selected Projects
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className={`project-card group relative overflow-hidden rounded-2xl bg-muted/30 border border-border/50 hover:border-border/80 transition-colors duration-500
						${project.featured ? "md:col-span-12 min-h-[500px] md:min-h-[600px]" : "md:col-span-6 min-h-[400px] md:min-h-[450px]"}
						flex flex-col justify-end p-8 md:p-12 cursor-pointer`}
					>
						{/* Background visual placeholder (simulate an image container) */}
						<div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="absolute inset-0 bg-muted-foreground/5 z-0 transition-transform duration-700 group-hover:scale-105"></div>

						{/* Content */}
						<div className="relative z-20 flex flex-col gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
							<div className="flex flex-col gap-2">
								<h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
									{project.title}
								</h3>
								<p className="text-lg text-foreground/80 text-balance max-w-2xl font-medium">
									{project.description}
								</p>
							</div>

							<div className="flex flex-col gap-1 mt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
								<p className="text-sm font-mono tracking-wide text-foreground">
									<span className="text-muted-foreground mr-2">Stack:</span>
									{project.stack}
								</p>
								<p className="text-sm font-mono tracking-wide text-foreground">
									<span className="text-muted-foreground mr-2">Role:</span>
									{project.role}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
