import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import face from "../assets/face.png";
import PropTypes from "prop-types";
const RevealResulstDemo = () => {
	const navigate = useNavigate();
	const handleNextSection = () => {
		navigate("/upload/front");
	};
	return (
		<div className="flex flex-col items-center text-white h-screen py-8 w-full  ">
			<div className="flex   items-center ">
				<FaEye className="text-white text-2xl mr-2" />
				<FaEye className="text-white text-2xl mr-2" />
				<h1 className="text-2xl font-semibold">Reveal your results</h1>
			</div>
			<p className="px-10 tracking-wide text-center">
				Invite 3 friends or get Umax Pro to view your results
			</p>
			<div className="relative w-full  text-center flex justify-center h-full mt-2">
				<img
					src={face}
					alt=""
					className="size-28 rounded-full z-10 size-30 border-4 "
				/>
				<div
					className="shadow-lg grid grid-cols-2 p-4 gap-6 rounded-3xl absolute top-12 bg-gray-700 pt-16
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
			<div className="w-full px-4 flex flex-col gap-3">
				<Button name="Get Umax Pro" onClick={handleNextSection} />
				<button
					className="rounded-full bg-gray-600  w-full py-4 text-lg"
					onClick={handleNextSection}
				>
					Invite 3 friends
				</button>
			</div>
		</div>
	);
};

export default RevealResulstDemo;

const CustomBox = ({ name, percentage }) => {
	return (
		<div className=" w-32 flex flex-col   rounded-lg shadow-lg text-left">
			<h1 className="text-lg">{name}</h1>
			<h1 className="text-xl text-slate-100">{percentage}</h1>

			<div className="bg-slate-300 mt-1 h-4 rounded-full w-full"></div>
		</div>
	);
};

CustomBox.propTypes = {
	name: PropTypes.string,
	percentage: PropTypes.number,
};
