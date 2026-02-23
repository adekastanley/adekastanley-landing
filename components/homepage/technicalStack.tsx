"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stackCategories = [
	{
		title: "Frontend (Web)",
		items: [
			"React",
			"Next.js",
			"TypeScript",
			"Redux Toolkit",
			"TailwindCSS",
			"GSAP",
		],
	},
	{
		title: "Backend",
		items: [
			"FastAPI",
			"Firebase",
			"REST API Design",
			"Authentication (JWT)",
			"SQLAlchemy",
		],
	},
	{
		title: "Databases",
		items: ["PostgreSQL", "SQLite", "Firestore"],
	},
	{
		title: "Mobile & Desktop",
		items: ["React Native", "Electron"],
	},
	{
		title: "Tooling & DevOps",
		items: [
			"Git",
			"Docker (Basic)",
			"Vercel",
			"Linux Server Deployment",
			"API Integration",
		],
	},
];

export default function TechnicalStack() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.from(".stack-anim", {
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
					<h2 className="stack-anim text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 font-medium">
						Technical Stack
					</h2>
					<h3 className="stack-anim text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
						Structured & Categorized
					</h3>
				</div>

				{/* Right: Stack Grid */}
				<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
					{stackCategories.map((category, idx) => (
						<div key={idx} className="stack-anim flex flex-col gap-4">
							<h4 className="text-lg font-bold tracking-tight text-foreground border-b border-border/30 pb-2">
								{category.title}
							</h4>
							<ul className="flex flex-col gap-2">
								{category.items.map((item, itemIdx) => (
									<li
										key={itemIdx}
										className="text-sm font-mono tracking-wide text-muted-foreground transition-colors hover:text-foreground"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
