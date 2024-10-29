import {
	FaQrcode,
	FaEllipsisV,
	FaCheck,
	FaFacebookMessenger,
} from "react-icons/fa";
import face from "../assets/face.png";
import { FaCog } from "react-icons/fa";
import Button from "../components/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import discord from "../assets/discord.jpg";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaTimes, FaDownload, FaTelegramPlane } from "react-icons/fa";
const Analysis = () => {
	const navigate = useNavigate();
	const handleNextSection = () => {
		navigate("/upload");
	};
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
		<div className=" text-white min-h-screen py-8 flex flex-col items-center px-8 relative  ">
			<div className="relative w-full flex items-center px-4">
				<FaTimes
					className="absolute left-4 text-2xl"
					onClick={() => navigate("/home")}
				/>
				<h1 className="flex-1 text-center text-xl font-semibold tracking-wide">
					Ratings
				</h1>
			</div>

			<Carousel
				responsive={responsive}
				className="w-full rounded-3xl h-[500px] mt-10"
				showDots={true}
			>
				<div className="relative w-full h-[500px] text-center flex justify-center  mt-2">
					<img
						src={face}
						alt=""
						className="size-28 rounded-full z-10 size-30 border-4 "
					/>
					<div
						className="shadow-lg grid grid-cols-2 p-4 gap-6 w-full rounded-3xl absolute top-12 bg-gray-700 pt-16
                 "
					>
						<CustomBox name="Overall" percentage={80} />
						<CustomBox name="Masculinity" percentage={90} />
						<CustomBox name="Potential" percentage={70} />
						<CustomBox name="Skin quality" percentage={70} />
						<CustomBox name="Jawline" percentage={70} />
						<CustomBox name="Cheekbones" percentage={70} />
					</div>
				</div>
			</Carousel>

			<div className="flex w-full justify-between items-center gap-4 mt-4 absolute bottom-0 px-8 mb-8">
				<button className="text-2xl w-44 py-3 flex justify-center  items-center gap-4 bg-white text-black rounded-full ">
					Save
					<FaDownload className="text-base" />
				</button>
				<button className="text-2xl py-3  w-44  flex justify-center items-center gap-4 bg-white text-black rounded-full ">
					Share
					<FaTelegramPlane className="text-xl" />
				</button>
			</div>
		</div>
	);
};

export default Analysis;

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
		<div className="flex flex-col rounded-3xl  w-full text-left p-4">
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
