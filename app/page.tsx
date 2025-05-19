import React from "react";
import Hero from "./components/Hero";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import HeroCard from "./components/ui/HeroCard";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Extras from "./components/Extras";
import Music from "./components/Music";

export default function Home() {
	return (
		<>
			<ScrollProgress className="top-0" />
			<div className="flex flex-col w-full h-screen bg-white dark:bg-slate-900">
        <Music />
				<Hero />
				<HeroCard />
				<About />
				<Project />
				<Extras />
				<Contact />
			</div>
		</>
	);
}
