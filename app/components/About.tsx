"use client";

import React from "react";
import SparklesText from "./ui/Sparkles";
import { HeroHighlight, Highlight } from "./ui/HighlightText";
import { motion } from "framer-motion";
import { CanvasRevealEffectDemo } from "./CavasDemo";
import { TimelineDemo } from "./Timeline";

const About = () => {
	return (
		<section id="about">
			<div className="h-fit bg-white dark:bg-slate-900 flex flex-col items-center justify-center">
				<SparklesText
					text="About"
					className="mb-10 text-black dark:text-white text-center mt-10"
				/>
				<HeroHighlight>
					<motion.h1
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: [20, -5, 0],
						}}
						transition={{
							duration: 0.5,
							ease: [0.4, 0.0, 0.2, 1],
						}}
						className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
					>
						With insomnia, nothing&apos;s real. Everything is far away.
						Everything is a{" "}
						<Highlight className="text-black dark:text-white">
							copy, of a copy, of a copy.
						</Highlight>
					</motion.h1>
				</HeroHighlight>
				<CanvasRevealEffectDemo />
				<TimelineDemo />
			</div>
		</section>
	);
};

export default About;
