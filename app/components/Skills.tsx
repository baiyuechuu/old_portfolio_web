"use client";

import React from "react";
import Image from "next/image";
import bash from "../images/bash-2.svg";
import c from "../images/c-1.svg";
import css from "../images/css-3.svg";
import git_bash from "../images/git-bash.svg";
import github_icon from "../images/github-icon-1.svg";
import html from "../images/html-1.svg";
import javascript from "../images/logo-javascript.svg";
import Neovim from "../images/Neovim-mark.svg";
import nextjs from "../images/next-js.svg";
import nodejs_icon from "../images/nodejs-icon.svg";
import python from "../images/python-5.svg";
import react from "../images/react-2.svg";
import sass from "../images/sass-1.svg";
import tailwind from "../images/tailwind-css-2.svg";
import typescript from "../images/typescript-2.svg";
import visual_studio_code from "../images/visual-studio-code-1.svg";

const Skills = () => {
	const skills = [
		{ src: bash, alt: "bash", name: "Bash" },
		{ src: c, alt: "c", name: "C" },
		{ src: css, alt: "css", name: "CSS" },
		{ src: git_bash, alt: "git_bash", name: "Git Bash" },
		{ src: github_icon, alt: "github_icon", name: "GitHub" },
		{ src: html, alt: "html", name: "HTML" },
		{ src: javascript, alt: "javascript", name: "JavaScript" },
		{ src: nextjs, alt: "nextjs", name: "Next.js" },
		{ src: nodejs_icon, alt: "nodejs_icon", name: "Node.js" },
		{ src: python, alt: "python", name: "Python" },
		{ src: react, alt: "react", name: "React" },
		{ src: sass, alt: "sass", name: "Sass" },
		{ src: tailwind, alt: "tailwind", name: "Tailwind" },
		{ src: typescript, alt: "typescript", name: "TypeScript" },
		{ src: visual_studio_code, alt: "visual_studio_code", name: "VSCode" },
		{ src: Neovim, alt: "Neovim", name: "Neovim" },
	];

	return (
		<div className="w-full mt-5 overflow-hidden mx-auto">
			<div className="w-full flex animate-scroll gap-5">
				{[...skills, ...skills].map((skill, index) => (
					<div
						key={index}
						className="bg-slate-800 dark:bg-black-200 border border-black-300 p-2 rounded-md shadow-md"
					>
						<div className="flex items-center justify-center mr-1">
							<Image
								width={30}
								height={30}
								src={skill.src}
								alt={skill.alt}
								className="mr-2"
							/>
							<span className="text-sm text-white text-nowrap font-bold">
								{skill.name}
							</span>
						</div>
					</div>
				))}
			</div>
			<style jsx>{`
				.animate-scroll {
					display: flex;
					width: max-content;
					animation: scroll 40s linear infinite;
				}

				@keyframes scroll {
					from {
						transform: translateX(0);
					}
					to {
						transform: translateX(calc(-50% - 0.5rem));
					}
				}
			`}</style>
		</div>
	);
};

export default Skills;
