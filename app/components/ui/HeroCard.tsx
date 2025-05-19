import React from "react";
import Image from "next/image";
import ImageCard from "../../images/back.png";

const HeroCard = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl full">
				<Image
					src={ImageCard}
					alt="Intro Pic"
					className="w-[90%] h-[90%] rounded-[5px] shadow-xl"
				/>
			</div>
		</div>
	);
};

export default HeroCard;
