"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
	ArrowUpRight,
	Github,
	Instagram,
	Linkedin,
	Twitter,
	Facebook,
	ExternalLink,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
	{ title: "Home", href: "/" },
	{ title: "Projects", href: "/projects" },
	{ title: "About", href: "/#engineering-approach" },
	{ title: "Contact", href: "/#contact" },
];

const socials = [
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/stanley-adeka-54a33b1a7/",
		icon: Linkedin,
	},
	{ title: "Github", href: "https://github.com/adekastanley", icon: Github },
	{
		title: "Instagram",
		href: "https://instagram.com/cheshiregram",
		icon: Instagram,
	},
	{
		title: "Twitter",
		href: "https://twitter.com/cheshireville",
		icon: Twitter,
	},
	{
		title: "TikTok",
		href: "https://tiktok.com/@cheshireville",
		icon: ExternalLink,
	}, // Custom as lucide doesn't have tiktok
	{
		title: "Facebook",
		href: "https://www.facebook.com/cheshireville/",
		icon: Facebook,
	},
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const pathname = usePathname();

	// Close menu on route change
	useEffect(() => {
		if (isOpen) toggleMenu();
	}, [pathname]);

	useGSAP(
		() => {
			gsap.set(".menu-content", { display: "none" });
			gsap.set(".menu-bg", {
				yPercent: -100,
				borderBottomLeftRadius: "50%",
				borderBottomRightRadius: "50%",
			});

			timeline.current = gsap
				.timeline({ paused: true })
				.to(".menu-bg", {
					yPercent: 0,
					duration: 0.8,
					ease: "power3.inOut",
					borderBottomLeftRadius: "0%",
					borderBottomRightRadius: "0%",
				})
				.set(".menu-content", { display: "flex" })
				.from(
					".nav-link-anim",
					{
						y: 50,
						opacity: 0,
						duration: 0.8,
						ease: "power3.out",
						stagger: 0.1,
					},
					"-=0.2",
				)
				.from(
					".social-anim",
					{
						y: 20,
						opacity: 0,
						duration: 0.6,
						ease: "power3.out",
						stagger: 0.05,
					},
					"-=0.4",
				);
		},
		{ scope: menuRef },
	);

	const toggleMenu = () => {
		if (isOpen) {
			timeline.current?.reverse();
			// Re-enable scrolling but wait for animation
			setTimeout(() => {
				document.body.style.overflow = "";
				document.documentElement.classList.remove("lenis-stopped");
			}, 800);
		} else {
			timeline.current?.play();
			document.body.style.overflow = "hidden";
			// Stop lenis smooth scrolling while menu is open
			document.documentElement.classList.add("lenis-stopped");
		}
		setIsOpen(!isOpen);
	};

	return (
		<div ref={menuRef} className="z-50">
			{/* Hamburger Trigger - Fixed everywhere */}
			<button
				onClick={toggleMenu}
				className="fixed top-6 right-6 md:top-10 md:right-10 z-60 group flex flex-col gap-2 w-12 h-12 items-center justify-center mix-blend-difference"
				aria-label="Toggle Menu"
			>
				<div
					className={`w-8 h-[2px] bg-white transition-all duration-500 origin-center ${isOpen ? "rotate-45 translate-y-[10px]" : "group-hover:-translate-y-1"}`}
				/>
				<div
					className={`w-8 h-[2px] bg-white transition-all duration-500 origin-center ${isOpen ? "-rotate-45" : "group-hover:translate-y-1"}`}
				/>
			</button>

			{/* Fullscreen Menu Overlay */}
			<div
				className="menu-bg fixed inset-0 z-55 bg-foreground text-background pointer-events-none data-[open=true]:pointer-events-auto"
				data-open={isOpen}
			>
				<div className="menu-content h-full w-full flex-col justify-between px-6 py-28 md:p-32 max-w-7xl mx-auto">
					{/* Main Links */}
					<nav className="flex flex-col gap-4 md:gap-8 mt-10 md:mt-20">
						{navLinks.map((link, idx) => (
							<div key={idx} className="overflow-hidden">
								<Link
									href={link.href}
									className="nav-link-anim block text-5xl md:text-8xl font-bold tracking-tighter hover:italic transition-all duration-300 w-fit"
									onClick={(e) => {
										// If it's a hash link on the current page, close menu immediately so scroll happens
										if (link.href.startsWith("/#") && pathname === "/") {
											toggleMenu();
											// Manually navigate after a tiny delay to let the menu closing start
											setTimeout(() => {
												window.location.hash = link.href.replace("/#", "#");
											}, 100);
										}
									}}
								>
									{link.title}
								</Link>
							</div>
						))}
					</nav>

					{/* Footer / Socials */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-background/20 pt-8 mt-auto rounded-none">
						<div className="social-anim max-w-sm">
							<p className="font-mono text-sm tracking-widest uppercase mb-4 opacity-70">
								Socials
							</p>
							<div className="grid grid-cols-2 gap-x-8 gap-y-4">
								{socials.map((social, idx) => {
									const Icon = social.icon;
									return (
										<a
											key={idx}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-center gap-2 hover:opacity-70 transition-opacity"
										>
											<Icon className="w-4 h-4" />
											<span className="font-medium text-sm md:text-base">
												{social.title}
											</span>
										</a>
									);
								})}
							</div>
						</div>

						<div className="social-anim text-left md:text-right">
							<p className="font-mono text-sm tracking-widest uppercase mb-2 opacity-70">
								Get in touch
							</p>
							<a
								href="mailto:adekastanley2@gmail.com"
								className="text-xl md:text-3xl font-medium hover:underline underline-offset-8 decoration-1"
							>
								adekastanley2@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
