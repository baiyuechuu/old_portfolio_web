import React from "react";
import Skills from "./Skills";

const Extras = () => {
	return (
		<div className="h-fit bg-white dark:bg-slate-900 text-white dark:text-black">
			<h1 className="text-center text-4xl font-bold text-black dark:text-white">
				{" "}
				My <span className="text-purple-600">Skills</span>
			</h1>
			<Skills />
		</div>
	);
};

export default Extras;
