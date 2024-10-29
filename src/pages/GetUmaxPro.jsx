import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { FaEye, FaCopy } from "react-icons/fa";
import face from "../assets/face.png";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import ticket from "../assets/ticket.png";
import { FaTimes } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import discord from "../assets/discord.jpg";
import { FaArrowRight } from "react-icons/fa";

const GetUmaxPro = () => {
	const navigate = useNavigate();
	const [inviteCode] = useState("KYZ378MQ");
	const modalRef = useRef(null);
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
	return (
		<div className="flex flex-col items-center text-white  h-screen pb-2 pt-4 w-full">
			<div className="w-full text-left px-4">
				<FaTimes className="text-2xl  " onClick={() => navigate("/home")} />
			</div>
			<h1 className="text-4xl font-semibold tracking-wide italic">LEVEL UP</h1>
			<p className="py-4 text-slate-400">Proven to help you max your look</p>
			<Carousel
				responsive={responsive}
				className="w-full h-full  rounded-3xl  border-4 border-slate-500"
			>
				<div className="flex flex-col px-10 h-full    justify-center w-full  ">
					<h1 className="text-2xl font-bold tracking-wide py-4">
						Get your ratings
					</h1>
					<div className="grid grid-cols-3  my-2 gap-x-1 gap-y-3">
						<CustomBox name="Overall" percentage={68} />
						<CustomBox name="Potential" percentage={91} />
						<CustomBox name="Jawline" percentage={56} />
						<CustomBox name="Masculinity" percentage={81} />
						<CustomBox name="Skin quality" percentage={65} />
						<CustomBox name="Cheekbones" percentage={76} />
					</div>
				</div>
				<div className="flex flex-col px-10 h-full    justify-center w-full  ">
					<h1 className="text-2xl font-bold tracking-wide py-4">
						Improvement coach
					</h1>
					<div className=" w-full  space-y-4 text-sm">
						<div className="bg-white text-black py-2 pl-4 mr-10 rounded-2xl">
							<p>
								What&apos;s up! I&apos;m your personal self improve coach. What
								are you looking to learn?
							</p>
						</div>
						<div className="bg-purple-600 text-white  py-2 pl-4 ml-14 rounded-2xl">
							<p>How do I become more attractive?</p>
						</div>
						<div className="bg-white text-black py-2 pl-4 mr-4 rounded-2xl">
							<p>
								Becoming more attractive includes a few different steps. You can
								start by...
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col px-10 h-full    justify-center w-full  ">
					<h1 className="text-2xl font-bold tracking-wide py-4">
						Learn About Yourself
					</h1>
					<div className=" w-full  space-y-4 ">
						<div className=" flex  justify-between bg-gray-700 p-4 rounded-full ">
							<h1 className="text-slate-200">Canthal Tilt</h1>
							<h1 className="text-white font-semibold">Positive</h1>
						</div>
						<div className=" flex  justify-between bg-gray-700 p-4 rounded-full ">
							<h1 className="text-slate-200">Face Shape</h1>
							<h1 className="text-white font-semibold">Diamond</h1>
						</div>
						<div className=" flex  justify-between bg-gray-700 p-4 rounded-full ">
							<h1 className="text-slate-200">Eye Shape</h1>
							<h1 className="text-white font-semibold">Almond</h1>
						</div>
					</div>
				</div>
				<div className="flex flex-col h-full justify-center w-full  ">
					<h1 className="text-2xl px-10 font-bold tracking-wide py-4">
						Start improving
					</h1>
					<div className=" w-full px-5 space-y-4 text-sm ">
						<div className="flex items-center gap-12 border p-5 rounded-3xl bg-gray-700">
							<div className="space-y-2">
								<div className="flex items-center gap-3">
									<span className="rounded-full size-3 bg-yellow-500"></span>
									<h3>Start a skin care routing</h3>
								</div>
								<p className=" tracking-wide text-slate-300">
									Skincare routines are crucial for a clear, health face. Tap to
									learn more.
								</p>
							</div>
							<FaArrowRight className="text-2xl" />
						</div>
						<div className="flex items-center gap-12 border p-5 rounded-3xl bg-gray-700">
							<div className="space-y-2">
								<div className="flex items-center gap-3">
									<span className="rounded-full size-3 bg-slate-200"></span>
									<h3>Diamond face styling</h3>
								</div>
								<p className=" tracking-wide text-slate-300">
									You have a diamond face shape... let&apos;s teach you how to
									style it!.
								</p>
							</div>
							<FaArrowRight className="text-2xl" />
						</div>
					</div>
				</div>
			</Carousel>
			<p className="text-slate-400 pt-4 pb-10">1,000,000 scans completed</p>
			<div className="w-full text-center ">
				<div className=" mx-4">
					<Button name="Unlock Now" />
				</div>

				<p className="text-slate-400 py-3">3.99 £ per week </p>
				<div className="flex justify-between px-2">
					<p>Terms of Use</p>
					<p>Restore Purchase</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</div>
	);
};

export default GetUmaxPro;

const CustomBox = ({ name, percentage }) => {
	// Determine the color based on the percentage
	const getColor = (percentage) => {
		if (percentage >= 80) return "bg-green-500";
		if (percentage >= 60) return "bg-lime-500";
		if (percentage >= 40) return "bg-yellow-500";
		if (percentage >= 20) return "bg-orange-500";
		return "bg-red-500";
	};

	return (
		<div className="flex flex-col bg-slate-600 rounded-3xl size-24 justify-center p-4">
			<p className="text-white text-sm">{name}</p>
			<p className="text-white text-2xl font-bold">{percentage}%</p>
			<div className="w-full h-2  bg-gray-300 mt-2">
				<div
					className={`h-2  ${getColor(percentage)}`}
					style={{ width: `${percentage}%` }}
				></div>
			</div>
		</div>
	);
};

CustomBox.propTypes = {
	name: PropTypes.string,
	percentage: PropTypes.number,
};

CustomBox.propTypes = {
	name: PropTypes.string,
	percentage: PropTypes.number,
};
