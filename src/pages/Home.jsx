import {
	FaQrcode,
	FaEllipsisV,
	FaCheck,
	FaFacebookMessenger,
} from "react-icons/fa";
import face from "../assets/face.png";
import { FaBell, FaGoogle, FaApple, FaCog } from "react-icons/fa";
import Button from "../components/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import discord from "../assets/discord.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
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
								<h1 className="text-base text-white text-center mb-2">
									Get your ratings and recommendations
								</h1>
								{/* <Button name="Begin Scan" onClick={handleNextSection} /> */}
								<button
									className="rounded-full bg-violet-800 w-full py-3 text-lg"
									onClick={handleNextSection}
								>
									Begin Scan
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center  h-full">
					<p className="text-lg font-semibold text-white w-52 text-center">
						Your scanned image will be uploaded here.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center mt-2 p-6 rounded-lg shadow-lg">
					<img
						src={discord} // Replace with your Discord image URL
						alt="Discord"
						className="w-80 h-80 mb-2 object-cover" // Adjusted to your specified size
						style={{ border: "2px solid #5865F2", borderRadius: "12px" }} // Adding a border with rounded corners
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
