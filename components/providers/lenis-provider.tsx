"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
	return (
		<ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }}>
			{children}
		</ReactLenis>
	);
}
