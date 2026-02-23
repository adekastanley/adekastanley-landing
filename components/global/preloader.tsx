"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
	const [progress, setProgress] = useState(0);
	const preloaderRef = useRef<HTMLDivElement>(null);
	const counterRef = useRef<HTMLDivElement>(null);
	const [isComplete, setIsComplete] = useState(false);

	useGSAP(
		() => {
			// Ensure scrolling is disabled during preloader
			document.body.style.overflow = "hidden";
			document.documentElement.classList.add("lenis-stopped");

			const tl = gsap.timeline({
				onComplete: () => {
					document.body.style.overflow = "";
					document.documentElement.classList.remove("lenis-stopped");
					setIsComplete(true);
				},
			});

			// Simulate loading progress
			let currentProgress = { value: 0 };
			tl.to(currentProgress, {
				value: 100,
				duration: 2.5,
				ease: "power2.inOut",
				onUpdate: () => {
					setProgress(Math.round(currentProgress.value));
				},
			})
				// Fade out counter text
				.to(counterRef.current, {
					opacity: 0,
					y: -20,
					duration: 0.5,
					ease: "power3.in",
				})
				// Slide up the entire preloader overlay
				.to(
					preloaderRef.current,
					{
						yPercent: -100,
						duration: 1.2,
						ease: "expo.inOut",
					},
					"-=0.2",
				);
		},
		{ scope: preloaderRef },
	);

	if (isComplete) return null;

	return (
		<div
			ref={preloaderRef}
			className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-foreground text-background pointer-events-none overflow-hidden"
		>
			<div
				ref={counterRef}
				className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center"
			>
				<div className="relative flex justify-center w-full">
					{/* Dimmed Text */}
					<h1 className="text-[clamp(2.5rem,8vw,9rem)] font-bold tracking-tighter leading-none text-background/10 whitespace-nowrap select-none">
						ADEKA STANLEY
					</h1>

					{/* Filled Text (Reveals left to right) */}
					<h1
						className="absolute top-0 left-1/2 -translate-x-1/2 text-[clamp(2.5rem,8vw,9rem)] font-bold tracking-tighter leading-none text-background whitespace-nowrap select-none"
						style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
					>
						ADEKA STANLEY
					</h1>
				</div>

				<div className="flex justify-between items-center w-full max-w-[clamp(2.5rem,8vw,9rem)] 2xl:max-w-none 2xl:w-[85%] mt-8 md:mt-12 font-mono text-xs md:text-sm uppercase tracking-widest opacity-60 border-t border-background/20 pt-4">
					<span>{progress}%</span>
				</div>
			</div>
		</div>
	);
}
