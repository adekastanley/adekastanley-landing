"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import ContactSection from "@/components/homepage/contactSection";

gsap.registerPlugin(ScrollTrigger);

const professionalProjects = [
	{
		title: "HSC Group landing page",
		description:
			"A modern, responsive landing page for HSC Group, a leading provider of healthcare solutions in Nigeria.  Site features a frontend and custom backend cms for managing images, content, collecting and storing data ",
		stack: "Next Js · TypeScript · Tailwind CSS · shadcn/ui · motion · SQLite",
		role: "Fullstack UX Developer and Designer",
		url: "https://hscgroup.org/",
		year: "2026",
	},
	{
		title: "AGM FOundation",
		description:
			"AGM Foundation works beside vulnerable communities with direct relief, local partnerships, and long-term systems that help families move beyond poverty with dignity. Currently in development",
		stack:
			"Vite + React · TypeScript · Tailwind CSS · shadcn/ui · motion · Wordpress",
		role: "Fullstack UX Developer and Designer",
		url: "https://agm-foundation.vercel.app/",
		year: "2026",
	},
	{
		title: "Sandef landing page",
		description:
			"A modern, responsive landing page for Sandef, a recognized Nigerian non-governmental organization (NGO) passionately committed to driving positive change..  Site features a frontend and custom backend cms for managing images, content, collecting and storing data. dev link https://sandef-website.t4ef.org/ to replace current site ",
		stack: "Next Js · TypeScript · Tailwind CSS · shadcn/ui · motion · SQLite",
		role: "Fullstack UX Developer and Designer",
		url: "https://sanhdef.org/",
		year: "2026",
	},
];

const personalProjects = [
	{
		title: "Munch Map",
		description:
			"Mobile application for tracking food vendors and prices in real time.",
		stack: "Next Js · React Native · TypeScript · Redux Toolkit",
		role: "System Designer and Developer",
		url: "#",
		year: "2026",
	},
	{
		title: "Eazy CBT",
		description:
			"Offline-first LAN-based testing system designed for reliability in low-connectivity environments.",
		stack: "React · Local Network Architecture · Backend Logic",
		role: "System Designer and Developer",
		url: "#",
		year: "2025",
	},
	{
		title: "SafeMap",
		description:
			"Security-focused application leveraging mobile infrastructure and backend integration.",
		stack: "Next Js · React Native · Backend API · Firebase",
		role: "System Designer and Developer",
		url: "#",
		year: "2025",
	},
];

export default function ProjectsPage() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const timelines = gsap.utils.toArray(".project-category");

			timelines.forEach((category: any) => {
				gsap.from(category.querySelectorAll(".list-anim"), {
					scrollTrigger: {
						trigger: category,
						start: "top 85%",
					},
					y: 40,
					opacity: 0,
					duration: 0.8,
					ease: "power3.out",
					stagger: 0.1,
				});
			});

			gsap.from(".header-anim", {
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: "power3.out",
				stagger: 0.1,
				delay: 0.2,
			});
		},
		{ scope: containerRef },
	);

	return (
		<main
			ref={containerRef}
			className="min-h-screen w-full mx-auto overflow-hidden pt-20"
		>
			{/* Page Header */}
			<div className="max-w-6xl mx-auto px-6 pt-20 md:pt-32 mb-16 md:mb-24">
				<h1 className="header-anim text-5xl md:text-[clamp(4rem,8vw,6rem)] leading-[0.9] font-bold tracking-tighter text-foreground mb-8">
					All Work
				</h1>
				<p className="header-anim text-xl md:text-2xl text-foreground/80 max-w-2xl text-balance font-medium">
					A comprehensive list of systems, applications, and experiments
					separated by context.
				</p>
			</div>

			{/* Personal Projects */}
			<section className="project-category max-w-6xl mx-auto px-6 mb-24 md:mb-40">
				<h2 className="list-anim text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-12 font-medium border-b border-border/40 pb-4">
					Personal Projects
				</h2>
				<div className="flex flex-col">
					{personalProjects.map((project, idx) => (
						<a
							key={idx}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="list-anim group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-border/30 hover:border-foreground/40 transition-colors duration-500"
						>
							<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 md:w-2/3">
								<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground transition-transform duration-500 group-hover:-translate-x-2 md:w-1/2">
									{project.title}
								</h3>
								<div className="flex flex-col gap-2 mt-2 md:mt-0 md:w-1/2 transition-opacity duration-500 group-hover:text-foreground/80">
									<p className="text-muted-foreground font-medium text-base md:text-lg">
										{project.description}
									</p>
									<p className="text-xs font-mono text-muted-foreground/70 mt-4 uppercase tracking-widest">
										{project.role} · {project.year}
									</p>
								</div>
							</div>

							<div className="hidden md:flex flex-col items-end gap-2 w-1/3">
								<div className="opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-foreground mb-4">
									<ArrowUpRight className="w-8 h-8" />
								</div>
								<p className="text-xs font-mono text-muted-foreground text-right w-2/3">
									{project.stack}
								</p>
							</div>

							{/* Mobile distinct elements */}
							<div className="flex md:hidden justify-between items-center mt-6 w-full gap-4">
								<p className="text-xs font-mono text-muted-foreground max-w-[80%] leading-relaxed">
									{project.stack}
								</p>
								<ArrowUpRight className="w-6 h-6 text-foreground opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
							</div>
						</a>
					))}
				</div>
			</section>

			{/* Professional Projects */}
			<section className="project-category max-w-6xl mx-auto px-6 mb-24 md:mb-40">
				<h2 className="list-anim text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-12 font-medium border-b border-border/40 pb-4">
					Professional Engagements
				</h2>
				<div className="flex flex-col">
					{professionalProjects.map((project, idx) => (
						<a
							key={idx}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="list-anim group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-border/30 hover:border-foreground/40 transition-colors duration-500"
						>
							<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 md:w-2/3">
								<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground transition-transform duration-500 group-hover:-translate-x-2 md:w-1/2">
									{project.title}
								</h3>
								<div className="flex flex-col gap-2 mt-2 md:mt-0 md:w-1/2 transition-opacity duration-500 group-hover:text-foreground/80">
									<p className="text-muted-foreground font-medium text-base md:text-lg">
										{project.description}
									</p>
									<p className="text-xs font-mono text-muted-foreground/70 mt-4 uppercase tracking-widest">
										{project.role} · {project.year}
									</p>
								</div>
							</div>

							<div className="hidden md:flex flex-col items-end gap-2 w-1/3">
								<div className="opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-foreground mb-4">
									<ArrowUpRight className="w-8 h-8" />
								</div>
								<p className="text-xs font-mono text-muted-foreground text-right w-2/3">
									{project.stack}
								</p>
							</div>

							{/* Mobile distinct elements */}
							<div className="flex md:hidden justify-between items-center mt-6 w-full gap-4">
								<p className="text-xs font-mono text-muted-foreground max-w-[80%] leading-relaxed">
									{project.stack}
								</p>
								<ArrowUpRight className="w-6 h-6 text-foreground opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
							</div>
						</a>
					))}
				</div>
			</section>

			<ContactSection />
		</main>
	);
}
