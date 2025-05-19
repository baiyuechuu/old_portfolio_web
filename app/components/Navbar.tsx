"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
	return <SlideTabs />;
};

const SlideTabs = () => {
	const [position, setPosition] = useState<Position>({
		left: 0,
		width: 0,
		opacity: 0,
	});

	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 69;
			const elementPosition =
				element.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: elementPosition - offset,
				behavior: "smooth",
			});
		}
	};

	return (
		<ul
			onMouseLeave={() => {
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}));
			}}
			className="fixed z-50 top-0 mx-auto my-3 flex w-fit rounded-full bg-slate-900 dark:bg-white p-1 shadow-md"
		>
			<Tab setPosition={setPosition} onClick={() => handleClick("home")}>
				Home
			</Tab>
			<Tab setPosition={setPosition} onClick={() => handleClick("about")}>
				About
			</Tab>
			<Tab setPosition={setPosition} onClick={() => handleClick("projects")}>
				Projects
			</Tab>
			<Tab setPosition={setPosition} onClick={() => handleClick("contact")}>
				Contact
			</Tab>

			<Cursor position={position} />
		</ul>
	);
};

const Tab = ({
	children,
	setPosition,
	onClick,
}: {
	children: string;
	setPosition: Dispatch<SetStateAction<Position>>;
	onClick: () => void;
}) => {
	const ref = useRef<null | HTMLLIElement>(null);

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current) return;

				const { width } = ref.current.getBoundingClientRect();

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
				});
			}}
			onClick={onClick}
			className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
		>
			{children}
		</li>
	);
};

const Cursor = ({ position }: { position: Position }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-7 rounded-full bg-white dark:bg-black md:h-12"
		/>
	);
};

type Position = {
	left: number;
	width: number;
	opacity: number;
};

export default Navbar;
