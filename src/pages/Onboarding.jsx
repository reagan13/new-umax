import { useState } from "react";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa";
import InputBox from "../components/InputBox";
import { FaBell, FaGoogle, FaApple, FaCog } from "react-icons/fa";
import face from "../assets/face.png";
import {
	FaQrcode,
	FaEllipsisV,
	FaCheck,
	FaFacebookMessenger,
} from "react-icons/fa";

const Onboarding = () => {
	const [currentSection, setCurrentSection] = useState(0);

	const handleNextSection = () => {
		setCurrentSection((prevSection) => (prevSection + 1) % 10);
	};

	return (
		<>
			{currentSection === 0 && (
				<div className="flex flex-col items-center text-white justify-center h-screen">
					<h1 className="text-3xl font-bold">Onboarding</h1>
					<div className="w-64 flex flex-col gap-4 py-8">
						<Button name="Male" onClick={handleNextSection} />
						<Button name="Female" onClick={handleNextSection} />
					</div>
					<h1 className="text-base text-slate-400 pt-4">Skip</h1>
				</div>
			)}
			{currentSection === 1 && (
				<div className="flex flex-col items-center text-white justify-center h-screen">
					<h1 className="text-xl md:text-3xl font-bold">
						Trusted by 1,000,000+ people
					</h1>
					<div className="flex items-center justify-center h-36 w-80 border mt-4 rounded-xl bg-gray-800 mx-4">
						<div className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
							U
						</div>
					</div>
					<div className="flex pt-5">
						{[...Array(5)].map((_, index) => (
							<FaStar key={index} size={24} className="text-yellow-500" />
						))}
					</div>
					<div className="w-80 py-8">
						<Button name="Continue" onClick={handleNextSection} />
					</div>

					<h1 className="text-base text-slate-400 pt-4">Skip</h1>
				</div>
			)}
			{/* 3rd section */}
			{currentSection === 2 && (
				<div className="flex flex-col items-center text-white justify-center h-screen">
					<h1 className="text-2xl font-bold">Do you have a referral code?</h1>
					<div className="w-80 flex flex-col gap-4 py-8">
						<InputBox />
						<Button name="Continue" onClick={handleNextSection} />
					</div>
					<h1 className="text-base text-slate-400">Skip</h1>
				</div>
			)}
			{currentSection === 3 && (
				<div className="flex flex-col items-center text-white justify-center h-screen">
					<h1 className="text-2xl font-bold">Enable Notifications</h1>
					<div className="flex items-center justify-center bg-gray-700 p-8 mt-5 rounded-full">
						<FaBell size={60} className="text-yellow-500" />
					</div>
					<div className="w-80 flex flex-col gap-4 py-8">
						<Button name="Continue" onClick={handleNextSection} />
					</div>

					<h1 className="text-base text-slate-400">Skip</h1>
				</div>
			)}
			{currentSection === 4 && (
				<div className="flex flex-col items-center text-white justify-center h-screen">
					<h1 className="text-3xl font-bold">Create your account</h1>
					<div className="w-64 flex flex-col gap-4 py-8">
						<button
							className="flex items-center justify-center rounded-full bg-white text-black w-full py-2"
							onClick={handleNextSection}
						>
							<FaGoogle className="mr-2" /> Sign In With Google
						</button>
						<button
							className="flex items-center justify-center rounded-full bg-black border text-white w-full py-2"
							onClick={handleNextSection}
						>
							<FaApple className="mr-2" /> Sign In With Apple
						</button>
					</div>
				</div>
			)}
			{currentSection === 5 && (
				<div className="flex flex-col items-center text-white justify-center h-screen">
					<div className="flex justify-between items-center w-80">
						<h1 className="text-xl font-bold">Facial Analysis </h1>
						<FaCog className="text-xl text-white" />
					</div>
					<div className="flex items-center justify-center w-full py-3">
						<div className="flex items-center justify-center h-96 w-80 rounded-2xl bg-gray-800 ">
							<div className="flex items-center justify-center h-96 w-80 p-4 rounded-2xl bg-gray-600 relative">
								<img
									src={face}
									alt="man"
									className="h-full w-full object-cover rounded-2xl"
								/>
								<div className="absolute bottom-0 left-0 right-0 p-4  rounded-b-2xl">
									<h1 className="text-base text-white text-center mb-2">
										Get your ratings and recommendations
									</h1>
									<Button name="Begin Scan" onClick={handleNextSection} />
								</div>
							</div>
						</div>
					</div>
					<div className="flex space-x-2 mt-4">
						<div className="h-2 w-2 bg-white rounded-full"></div>
						<div className="h-2 w-2 bg-white rounded-full"></div>
						<div className="h-2 w-2 bg-white rounded-full"></div>
					</div>
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
			)}
			{currentSection === 6 && (
				<div className="flex flex-col items-center gap-4 text-white justify-center h-screen">
					<div className="flex items-center justify-center w-full py-3">
						<div className="flex items-center justify-center h-96 w-80 rounded-2xl bg-gray-800 ">
							<div className="flex items-center justify-center h-96 w-80 p-4 rounded-2xl bg-gray-600 ">
								<img
									src={face}
									alt="man"
									className="h-full w-full object-cover rounded-2xl"
								/>
							</div>
						</div>
					</div>
					<div className="w-80">
						<Button
							name="Upload or take a selfie"
							onClick={handleNextSection}
						/>
					</div>
				</div>
			)}
			{currentSection === 7 && (
				<div className="flex flex-col items-center gap-4 text-white justify-center h-screen">
					<div className="flex items-center justify-center w-full py-3">
						<div className="flex items-center justify-center h-96 w-80 rounded-2xl bg-gray-800 ">
							<div className="flex items-center justify-center h-96 w-80 p-4 rounded-2xl bg-gray-600 ">
								<img
									src={face}
									alt="man"
									className="h-full w-full object-cover rounded-2xl"
								/>
							</div>
						</div>
					</div>
					<div className="w-80">
						<Button name="Take Picture" onClick={handleNextSection} />
					</div>
				</div>
			)}
			{currentSection === 8 && (
				<div className="flex flex-col items-center gap-4 text-white justify-center h-screen">
					<div className="flex items-center justify-center w-full py-3">
						<div className="flex items-center justify-center h-96 w-80 rounded-2xl bg-gray-800 ">
							<div className="flex items-center justify-center h-96 w-80 p-4 rounded-2xl bg-gray-600 ">
								<img
									src={face}
									alt="man"
									className="h-full w-full object-cover rounded-2xl"
								/>
							</div>
						</div>
					</div>
					<div className="w-80 space-y-4">
						<button
							className="rounded-full bg-gray-600 w-full py-2"
							onClick={handleNextSection}
						>
							Use Another
						</button>
						<Button name="Continue" onClick={handleNextSection} />
					</div>
				</div>
			)}
			{currentSection === 9 && (
				<div className="flex flex-col items-center text-white justify-center h-screen">
					<div className="space-y-3 text-center">
						<h1 className="text-2xl font-bold">Reveal your results</h1>
						<p className="text-slate-300">
							Invite 3 friends or get Umax Pro to view your results
						</p>
					</div>
					<div className="flex items-center justify-center bg-gray-700 p-8 mt-5 rounded-full">
						<FaBell size={60} className="text-yellow-500" />
					</div>
					<div className="w-80 flex flex-col gap-4 py-8">
						<Button name="Continue" onClick={handleNextSection} />
					</div>

					<h1 className="text-base text-slate-400">Skip</h1>
				</div>
			)}
		</>
	);
};

export default Onboarding;
