"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Music = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [showNotification, setShowNotification] = useState(true);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const startMusic = () => {
		if (audioRef.current) {
			audioRef.current.play().catch((error) => {
				console.log("Play failed:", error);
				setIsPlaying(false);
			});
			setIsPlaying(true);
		}
		setShowNotification(false);
	};

	const closeNotification = () => {
		setShowNotification(false);
	};

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<>
			{showNotification && (
				<div className="fixed top-0 right-0 z-[999] m-3 md:top-5 md:right-5 md:m-0 w-[calc(100%-24px)] max-w-[400px] bg-white/80 p-3 md:p-4 rounded-lg backdrop-blur-sm shadow-lg">
					<div className="flex justify-between items-start mb-2 md:mb-3">
						<h3 className="text-black font-bold text-base md:text-lg">
							🎵 Enable Music?
						</h3>
						<button
							onClick={closeNotification}
							className="text-black/70 hover:text-white transition-colors p-1"
						>
							<IoMdClose size={18} />
						</button>
					</div>
					<p className="text-black/90 text-sm md:text-base mb-3 md:mb-4">
						Would you like to enhance your experience with background music?
					</p>
					<div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
						<button
							onClick={startMusic}
							className="w-full xs:w-auto bg-white/60 hover:bg-white/70 text-black px-3 md:px-4 py-2 rounded-md transition-colors text-sm md:text-base"
						>
							Yes, play music
						</button>
						<button
							onClick={closeNotification}
							className="w-full xs:w-auto bg-white/40 hover:bg-white/20 text-black px-3 md:px-4 py-2 rounded-md transition-colors text-sm md:text-base"
						>
							No, thanks
						</button>
					</div>
				</div>
			)}
			<div className="fixed bottom-5 left-5 z-50">
				<div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm shadow-lg">
					<audio ref={audioRef} src="/music.mp3" loop />
					<button
						onClick={togglePlay}
						className="flex items-center space-x-2 text-black hover:text-gray-300 transition-colors"
					>
						<div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
							{isPlaying ? (
								<FaPause className="w-2 h-4" />
							) : (
								<FaPlay className="w-3 h-3 ml-1" />
							)}
						</div>
						<span className="text-md font-bold">
							{isPlaying ? "Now Playing" : "Play Music"}
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Music;
