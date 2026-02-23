import React from "react";
import CardWithImage from "../blocks/cardBlock";

export default function SectionOne() {
	return (
		<section className="min-h-screen max-w-7xl  mx-auto w-full relative z-10">
			<div className="text-7xl font-sans font-light flex flex-col gap-10 justify-center min-h-screen w-full">
				<h1>FULLSTACK ENGINEER</h1>
				<p>
					WEB <br />
					MOBILE <br />
					AI
				</p>
			</div>

			<div>
				<h3>LIVE PROJECT</h3>
				<div className="grid grid-cols-4 gap-5 grid-rows-4 mx-auto max-w-4xl">
					<div className="rounded-xl bg-red-900 col-span-2 row-span-3 gap-4 min-h-10 wmin-w-[5rem]"></div>
					<div className="rounded-xl bg-blue-900 col-span-3 row-span-2 gap-4 min-h-10 wmin-w-[5rem]"></div>
					<div className="rounded-xl bg-yellow-900 col-span-1 row-span-1 gap-4 min-h-10 wmin-w-[5rem]"></div>
					<div className="rounded-xl bg-green-900 col-span-5 row-span-1 gap-4 min-h-10 wmin-w-[5rem]"></div>
				</div>
			</div>
		</section>
	);
}
