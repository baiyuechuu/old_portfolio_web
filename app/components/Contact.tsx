"use client";

import React from "react";
import SparklesText from "./ui/Sparkles";
import GridBackground from "./ui/GridBg";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Contact = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const text = "baiyuechu11@gmail.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<section id="contact" className="bg-white dark:bg-slate-900">
			<div className="h-fit bg-white dark:bg-slate-900">
				<SparklesText
					text="Contact"
					className="mb-10 text-black dark:text-white text-center mt-10"
				/>
				<GridBackground>
					<div className="flex flex-col items-center justify-center">
						<p className="text-black dark:text-white md:mt-10 my-5 text-center text-4xl p-5">
							Reach out to me today and let&apos;s discuss how I can help you
							achieve your goals.
						</p>
						<div className="flex flex-col sm:flex-row sm:gap-4 gap-3 items-center justify-center">
							<MagicButton
								title={copied ? "Email is Copied!" : "Copy my email address"}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								otherClasses="!bg-[#161A31]"
							/>
							<MagicButton
								title="Let's get in touch"
								icon={<FaLocationArrow />}
								position="right"
							/>
						</div>
						<div className="flex w-full flex-col-reverse px-20 sm:flex-row text-center justify-between items-center mt-5 ">
							<p className="text-black dark:text-white text-xl relative z-20">
								Copyright © 2023 Baiyuechu. All rights reserved.
							</p>
							<div className="flex flex-row justify-center items-center gap-5 mb-8 relative z-20">
								<Link
									className="text-white rounded-md bg-black-200 p-1 flex item-center justify-center shadow-md border border-black-300"
									href="https://github.com/xiaoyaoo11"
									target="_blank"
								>
									<FaGithub className="text-2xl sm:text-4xl" />
								</Link>
								<Link
									className="text-white rounded-md bg-black-200 p-1 flex item-center justify-center shadow-md border border-black-300"
									href="/"
									target="_blank"
								>
									<FaDiscord className="text-2xl sm:text-4xl" />
								</Link>
								<Link
									className="text-white rounded-md bg-black-200 p-1 flex item-center justify-center shadow-md border border-black-300"
									href="https://www.facebook.com/dongfangxiaobai11"
									target="_blank"
								>
									<FaFacebook className="text-2xl sm:text-4xl" />
								</Link>
								<Link
									className="text-white rounded-md bg-black-200 p-1 flex item-center justify-center shadow-md border border-black-300"
									href="/"
									target="_blank"
								>
									<FaXTwitter className="text-2xl sm:text-4xl" />
								</Link>
							</div>
						</div>
					</div>
				</GridBackground>
			</div>
		</section>
	);
};

export default Contact;
