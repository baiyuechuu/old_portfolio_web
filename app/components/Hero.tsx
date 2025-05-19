"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import ProfilePic from "../images/profile.png";
import SparklesText from "./ui/Sparkles";
import { RainbowButton } from "./ui/RainbowButton";
import { RainbowButtonDownload } from "./ui/RainbowButtonDownload";
import { TypingAnimation } from "./ui/TypingText";
import { TextAnimate } from "./ui/AnimateText";
import HeroIcons from "./HeroIcons";
import { IoMdArrowDown } from "react-icons/io";
import { BackgroundBeams } from "./ui/BeamBg";
import { OrbitingCircles } from "./ui/Ring";
import { useEffect, useState } from "react";

const Hero = () => {
	const [radius, setRadius] = useState(150);

	useEffect(() => {
		const handleResize = () => {
			const newRadius = window.innerWidth < 640 ? 110 : 200;
			console.log("New radius:", newRadius);
			setRadius(newRadius);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section id="home">
			<div className="flex relative flex-col items-center justify-center bg-white dark:bg-slate-900 dark:text-white">
				<Navbar />
				<div className="grid grid-cols-1 min-[940px]:grid-cols-2 w-full p-20 my-5 sm:my-10">
					<div className="flex flex-col items-center justify-center z-10">
						<div className="relative flex flex-col items-center justify-center mb-10 sm:mt-20">
							<OrbitingCircles
								radius={radius}
								iconSize={20}
								className="absolute z-1"
								delay={1}
							>
								<Icons.dot />
								<Icons.dot />
								<Icons.dot />
								<Icons.dot />
								<Icons.dot />
							</OrbitingCircles>
							<Image
								src={ProfilePic}
								alt="Profile Pic"
								className="w-[300px] h-[280px] sm:w-[500px] sm:h-[500px] relative z-2"
							/>
						</div>
						<HeroIcons />
					</div>
					<div className="flex flex-col items-center justify-center z-10">
						<SparklesText
							text="Hello, world!"
							className="text-center mb-10 z-[1] text-nowrap"
						/>
						<TextAnimate
							animation="blurIn"
							as="h1"
							className="text-3xl font-bold text-center"
						>
							Welcome to my portfolio!
						</TextAnimate>
						<TypingAnimation
							delay={0}
							duration={3}
							className="font-bold text-center leading-relaxed"
						>
							I specialize in crafting clean, efficient, and creative solutions
							through code. This space is where I showcase my skills, projects,
							and journey as a developer.
						</TypingAnimation>
						<div className="flex flex-col sm:flex-row justify-center sm:gap-3 mt-5">
							<RainbowButtonDownload className="uppercase mb-5" />
							<RainbowButton className="uppercase mb-5 flex items-center gap-1">
								<span className="text-nowrap">Explore about me</span>{" "}
								<IoMdArrowDown className="text-2xl" />
							</RainbowButton>
						</div>
					</div>
				</div>
				<BackgroundBeams />
			</div>
		</section>
	);
};

export default Hero;

const Icons = {
	dot: () => (
		<svg width="100" height="100" viewBox="0 0 100 100">
			<circle cx="50" cy="50" r="50" className="fill-current" />
		</svg>
	),
};
