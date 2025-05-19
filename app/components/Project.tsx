import React from "react";
import SparklesText from "./ui/Sparkles";
import BentoGridThirdDemo from "./ProjectContent";

const Project = () => {
	return (
		<section id="projects" className="bg-white dark:bg-slate-900">
			<div className="h-fit bg-white dark:bg-slate-900">
				<SparklesText
					text="Project"
					className="mb-10 text-black dark:text-white text-center mt-10"
				/>
				<BentoGridThirdDemo />
			</div>
		</section>
	);
};

export default Project;
