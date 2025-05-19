import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const HeroIcons = () => {
	return (
		<div className="flex flex-row justify-center items-center gap-5 mb-8">
			<Link
				className="text-white dark:text-black rounded-full bg-black dark:bg-white p-2 flex item-center justify-center shadow-md"
				href="https://github.com/xiaoyaoo11"
				target="_blank"
			>
				<FaGithub className="text-2xl sm:text-4xl" />
			</Link>
			<Link
				className="text-white dark:text-black rounded-full bg-black dark:bg-white p-2 flex item-center justify-center shadow-md"
				href="/"
				target="_blank"
			>
				<FaDiscord className="text-2xl sm:text-4xl" />
			</Link>
			<Link
				className="text-white dark:text-black rounded-full bg-black dark:bg-white p-2 flex item-center justify-center shadow-md"
				href="https://www.facebook.com/dongfangxiaobai11"
				target="_blank"
			>
				<FaFacebook className="text-2xl sm:text-4xl" />
			</Link>
			<Link
				className="text-white dark:text-black rounded-full bg-black dark:bg-white p-2 flex item-center justify-center shadow-md"
				href="/"
				target="_blank"
			>
				<FaXTwitter className="text-2xl sm:text-4xl" />
			</Link>
		</div>
	);
};

export default HeroIcons;
