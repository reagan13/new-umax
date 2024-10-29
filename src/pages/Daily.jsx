import {
	FaQrcode,
	FaEllipsisV,
	FaCheck,
	FaFacebookMessenger,
	FaUserSecret,
} from "react-icons/fa";
import face from "../assets/face.png";
import { FaFire, FaCog } from "react-icons/fa";
import Button from "../components/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import purple from "../assets/bg-purple.jpg";
import smile from "../assets/smile.png";
const Daily = () => {
	const handleNextSection = () => {
		console.log("Next Section");
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
		<div className="flex flex-col items-center text-white h-screen px-6 py-8 relative">
			<div className="flex justify-between items-center w-80 ">
				<h1 className="text-2xl font-semibold flex gap-2">
					1 <FaFire className="text-2xl text-red-500" /> day streak
				</h1>
				<FaCog className="text-2xl text-white" />
			</div>
			<div
				className=" mt-4 w-full rounded-2xl flex justify-evenly items-center p-4"
				style={{ backgroundImage: `url(${purple})` }}
			>
				<div className="flex flex-col gap-5 text-xl font-semibold">
					<h3 className="  ">Your progress</h3>
					<button className="bg-white text-purple-600 rounded-xl py-2">
						View
					</button>
				</div>
				<img src={smile} alt="" className=" size-20" />
			</div>

			<h1 className="text-2xl font-semibold flex gap-2 py-3 w-full text-left">
				Your routine
			</h1>
			<div className="font-semibold bg-slate-700 rounded-2xl flex justify-center items-center h-40 w-full">
				<h1>Scan to get your daily glow up routine</h1>
			</div>
			<div className="absolute bottom-0 left-0 w-full flex justify-evenly mb-4 border">
				<div className="flex gap-5">
					<div className="flex flex-col items-center justify-center size-14 p-1 bg-gray-600 rounded-full">
						<FaQrcode className="text-base" />
						<span className="text-sm">Scan</span>
					</div>
					<div className="flex flex-col items-center justify-center size-14 p-1 bg-gray-600 rounded-full">
						<FaEllipsisV className="text-base" />
						<span className="text-sm">Extras</span>
					</div>
					<div className="flex flex-col items-center justify-center size-14 p-1 bg-gray-600 rounded-full">
						<FaCheck className="text-base" />
						<span className="text-sm">Daily</span>
					</div>
					<div className="flex flex-col items-center justify-center size-14 p-1 bg-gray-600 rounded-full">
						<FaFacebookMessenger className="text-base" />
						<span className="text-sm">Coach</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Daily;
