import {
	FaQrcode,
	FaEllipsisV,
	FaCheck,
	FaFacebookMessenger,
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

import face from "../assets/face.png";
import { FaBell, FaGoogle, FaApple, FaCog } from "react-icons/fa";
import Button from "../components/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import discord from "../assets/discord.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ImageContext } from "../Provider/ImageProvider";

const Home = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { imageSrc } = useContext(ImageContext);

	const handleNextSection = () => {
		navigate("/upload");
	};

	useEffect(() => {
		if (imageSrc) {
			console.log("Image is present:", imageSrc);
		} else {
			console.log("Image is not present:", imageSrc);
		}
	}, [imageSrc]);
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	useEffect(() => {
		if (imageSrc) {
			console.log("Image is present:", imageSrc);
		}
	}, [imageSrc]);

	const getFormattedDate = () => {
		const date = new Date();
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const day = date.getDate();
		const month = monthNames[date.getMonth()];

		const getOrdinalSuffix = (day) => {
			if (day > 3 && day < 21) return "th"; // covers 11th to 20th
			switch (day % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		};

		return `${month} ${day}${getOrdinalSuffix(day)}`;
	};
	return (
		<div className="flex flex-col items-center text-white justify-between h-screen py-8">
			<div className="flex justify-between items-center w-80 ">
				<h1 className="text-2xl font-semibold">Facial Analysis </h1>
				<FaCog className="text-2xl text-white" />
			</div>

			<Carousel responsive={responsive} className="w-full h-full ">
				<div className="flex items-center justify-center w-full h-[450px] ">
					<div className="flex items-center justify-center h-full w-80 rounded-2xl border-slate-500">
						<div className="flex items-center justify-center h-full w-80 p-2 rounded-2xl bg-gray-600 relative">
							<img
								src={face}
								alt="man"
								className="h-full w-full object-cover rounded-2xl"
							/>

							<div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-2xl">
								{imageSrc ? (
									<>
										<h1 className="text-xl font-bold tracking-wide text-white text-center mb-2">
											Free scan in 7 days
										</h1>
										<button
											className="rounded-full bg-violet-800 w-full py-3 text-lg"
											onClick={handleNextSection}
										>
											Supercharge now
										</button>
									</>
								) : (
									<>
										<h1 className="text-base text-white text-center mb-2">
											Get your ratings and recommendations
										</h1>
										<button
											className="rounded-full bg-violet-800 w-full py-3 text-lg"
											onClick={handleNextSection}
										>
											Begin Scan
										</button>
									</>
								)}

								{/* <Button name="Begin Scan" onClick={handleNextSection} /> */}
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center  h-full">
					{imageSrc ? (
						<div className="relative">
							<img
								src={imageSrc}
								alt="Captured"
								className="h-96 w-96 object-cover rounded-3xl"
							/>
							<div className="flex flex-col items-center justify-center gap-5 absolute bottom-0 w-full p-4">
								<h1 className="tracking-wide text-xl font-semibold">
									{getFormattedDate()}
								</h1>
								<Button
									name="View Results"
									onClick={() => navigate("/analysis")}
								/>
							</div>
						</div>
					) : (
						<p className="text-lg font-semibold text-white w-52 text-center">
							Your scanned image will be uploaded here.
						</p>
					)}
				</div>
				<div className="flex flex-col items-center justify-center mt-2 p-6 rounded-lg shadow-lg">
					<img
						src={discord}
						alt="Discord"
						className="w-80 h-80 mb-2 object-cover"
						style={{ border: "2px solid #5865F2", borderRadius: "12px" }}
					/>
					<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition transform duration-200 hover:scale-105 mt-2">
						Join Now
					</button>
				</div>
			</Carousel>

			{/* <div className="flex space-x-2 mt-4">
				<div className="h-2 w-2 bg-white rounded-full"></div>
				<div className="h-2 w-2 bg-white rounded-full"></div>
				<div className="h-2 w-2 bg-white rounded-full"></div>
			</div> */}
			{/* Floating buttons */}
			<div className="flex gap-5 mt-4">
				<div className="flex flex-col items-center justify-center size-14 p-1 bg-gray-600 rounded-full">
					<FaQrcode className="text-base " />
					<span className="text-sm">Scan</span>
				</div>
				<div className="flex flex-col items-center justify-center size-14 p-1 bg-gray-600 rounded-full">
					<FaEllipsisV className="text-base " />
					<span className="text-sm">Extras</span>
				</div>
				<div className="flex flex-col items-center justify-center size-14  p-1 bg-gray-600 rounded-full">
					<FaCheck className="text-base " />
					<span className="text-sm">Daily</span>
				</div>
				<div className="flex flex-col items-center justify-center size-14 p-1 bg-gray-600 rounded-full">
					<FaFacebookMessenger className="text-base" />
					<span className="text-sm">Coach</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
