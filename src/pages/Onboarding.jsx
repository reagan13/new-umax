import { useEffect, useState } from "react";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa";
import umax from "../assets/umax-logo.png";
import InputBox from "../components/InputBox";
import bell from "../assets/bell.png";
import { FaGoogle, FaApple } from "react-icons/fa";

import { useSwipeable } from "react-swipeable";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Onboarding = () => {
	const navigate = useNavigate();

	const clientID =
		"774046045515-7ddl57ul7aar0lc4karbto27i0u3e5os.apps.googleusercontent.com";
	const scope = "profile email"; // Add the required scopes

	const [activeIndex, setActiveIndex] = useState(0);

	const handleUnderlineClick = (index) => {
		setActiveIndex(index);
	};

	const handleSwipe = (delta) => {
		setActiveIndex((prevIndex) => {
			const newIndex = prevIndex + delta;
			if (newIndex < 0) return 0;
			if (newIndex > 4) return 4;
			return newIndex;
		});
	};

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe(1),
		onSwipedRight: () => handleSwipe(-1),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});
	const handleNextSection = () => {
		setActiveIndex((prevIndex) => {
			const newIndex = prevIndex + 1;
			if (newIndex > 4) return 4; // Assuming there are 5 sections
			return newIndex;
		});
	};
	const handleHomePage = () => {
		navigate("/home");
	};
	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId: clientID,
				scope: scope,
			});
		}
		gapi.load("client:auth2", start);
	}, [clientID, scope]);
	return (
		<div className="flex flex-col justify-between items-center h-screen w-full text-white relative px-4">
			<div className="flex space-x-4 pt-10 w-auto justify-center items-center ">
				{[...Array(5)].map((_, index) => (
					<div
						key={index}
						className={`w-12 border-b-2 cursor-pointer ${
							activeIndex === index ? "border-white" : "border-gray-500"
						}`}
						onClick={() => setActiveIndex(index)}
					></div>
				))}
			</div>
			<div
				{...swipeHandlers}
				className="flex justify-center items-center flex-grow w-full mt-8"
			>
				{/* 1st section */}
				{activeIndex === 0 && (
					<div className="flex flex-col items-center text-white justify-center  w-full md:w-auto relative h-full">
						<h1 className="text-3xl font-bold absolute top-0 left-0">
							Choose Gender
						</h1>
						<div className="w-80 flex flex-col gap-5 py-8">
							<Button name="Male" onClick={handleNextSection} />
							<Button name="Female" onClick={handleNextSection} />
						</div>
						<div className="w-full text-center mb-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
							<button
								className="text-lg text-slate-400"
								onClick={handleNextSection}
							>
								Skip
							</button>
						</div>
					</div>
				)}
				{/* 2nd Section */}
				{activeIndex === 1 && (
					<div className="flex flex-col items-center text-white justify-center w-full md:w-auto relative h-full  ">
						<h1 className="text-3xl md:text-2xl font-semibold absolute top-0 left-0 ">
							Trusted by 1,000,000+ people
						</h1>
						<div className="rounded-2xl shadow-lg shadow-gray-700 ">
							<img src={umax} alt="face" className="size-52" />
						</div>
						<div className="flex gap-2 mt-10">
							{[...Array(5)].map((_, index) => (
								<FaStar key={index} size={40} className="text-yellow-500" />
							))}
						</div>
						<div className=" py-8 w-80 text-center mb-5 absolute bottom-0 left-1/2 transform -translate-x-1/2">
							<Button name="Continue" onClick={handleNextSection} />
						</div>
					</div>
				)}
				{/* 3rd Section */}
				{activeIndex === 2 && (
					<div className="flex flex-col items-center text-white justify-center w-full md:w-auto relative h-full ">
						<h1 className="text-3xl font-semibold absolute top-0 left-0 ">
							Do you have a referral code?
						</h1>
						<InputBox />
						<div className=" py-8 w-80 text-center mb-5 absolute bottom-0 left-1/2 transform -translate-x-1/2">
							<Button name="Continue" onClick={handleNextSection} />
						</div>
					</div>
				)}
				{activeIndex === 3 && (
					<div className="flex flex-col items-center text-white w-full md:w-auto relative h-full ">
						<h1 className="text-3xl font-semibold absolute top-0 left-0 ">
							Enable Notifications
						</h1>
						<div className="flex items-center size-72 justify-center mt-24 bg-gray-700 p-8 rounded-full">
							<img src={bell} alt="bell" />
						</div>
						<div className=" py-8 w-80 text-center mb-5 absolute bottom-0 left-1/2 transform -translate-x-1/2">
							<Button name="Continue" onClick={handleNextSection} />
						</div>
					</div>
				)}
				{activeIndex === 4 && (
					<div className="w-80 flex flex-col gap-5 py-8 ">
						<button
							className="flex items-center justify-center rounded-full bg-white text-black border border-gray-300 shadow-md hover:bg-gray-100 w-full py-4 transition duration-200 ease-in-out"
							onClick={handleHomePage}
						>
							<FaGoogle className="mr-2" />
							Sign In With Google
						</button>

						<button
							className="flex items-center justify-center rounded-full bg-black border py-4 text-white w-full "
							onClick={handleHomePage}
						>
							<FaApple className="mr-2" /> Sign In With Apple
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Onboarding;
