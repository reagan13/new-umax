import { FaCog } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";
import monument from "../assets/monument.png";
import cream from "../assets/cream.png";
import endocrinology from "../assets/endocrinology.png";
import muscle from "../assets/muscle.png";
import fire from "../assets/fire.png";
import messenger from "../assets/messenger.png";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
const CoachButton = ({ name, onClick, background, icon }) => {
	return (
		<button
			className="rounded-2xl border w-full  text-lg flex items-center h-14 border-gray-300"
			onClick={onClick}
		>
			<div
				className={`flex items-center h-full ${background} rounded-l-2xl border-r-4 border-white px-4  border-transparent`}
			>
				<img src={icon} alt="" className=" size-8" />
			</div>
			<h1 className=" ml-4">{name}</h1>
			<FaArrowRight className="text-gray-300 ml-auto mr-4" />
		</button>
	);
};

CoachButton.propTypes = {
	name: PropTypes.string,
	onClick: PropTypes.func,
	background: PropTypes.string,
	icon: PropTypes.string,
};

const Daily = () => {
	return (
		<div className="flex flex-col items-center text-white h-screen px-6 py-8 relative ">
			<div className="flex justify-between items-center w-80 mb-4">
				<h1 className="text-2xl font-semibold flex gap-2">Your coach</h1>
				<FaCog className="text-2xl text-white" />
			</div>
			<div className="w-80">
				<CoachButton
					name="Ask me anything"
					onClick={() => console.log("Button clicked")}
					background="bg-gradient-to-r from-purple-400 via-blue-500 to-blue-600"
					icon={messenger}
				/>
			</div>
			<h1 className="text-2xl font-semibold flex gap-2 py-6 w-80 text-left">
				Learn how to...
			</h1>
			<div className="space-y-4 w-80">
				<CoachButton
					name="Improve your overall"
					onClick={() => console.log("Button clicked")}
					background="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600"
					icon={fire}
				/>
				<CoachButton
					name="Gain more muscle"
					onClick={() => console.log("Button clicked")}
					background="bg-gradient-to-r from-blue-400 via-yellow-500 to-green-500"
					icon={muscle}
				/>
				<CoachButton
					name="Lose body fat"
					onClick={() => console.log("Button clicked")}
					background="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-600"
					icon={endocrinology}
				/>
				<CoachButton
					name="Get clear skin"
					onClick={() => console.log("Button clicked")}
					background="bg-gradient-to-r from-lime-400 to-green-500"
					icon={cream}
				/>
				<CoachButton
					name="Sharpen your jawline"
					onClick={() => console.log("Button clicked")}
					background="bg-gradient-to-r from-blue-400 to-light-blue-500"
					icon={monument}
				/>
			</div>

			<div className="absolute bottom-0 left-0 w-full flex justify-evenly mb-4 ">
				<Navbar />
			</div>
		</div>
	);
};

export default Daily;
