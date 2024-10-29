import { useNavigate } from "react-router-dom";
import { FaTimes, FaDownload, FaTelegramPlane } from "react-icons/fa";
import { FaSmile, FaEye, FaBalanceScale, FaEyeSlash } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import face from "../assets/face.png";
import FeaturesBox from "../components/FeaturesBox";
import IndividualRating from "../components/InvidualRating";
import GlowUpBox from "../components/GlowUpBox";
import { FaKiss, FaUser, FaGrinBeam } from "react-icons/fa";
import Button from "../components/Button";
import { useState } from "react";
const Analysis = () => {
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = useState(0);

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
	const handleSlideChange = (previousSlide, { currentSlide }) => {
		setCurrentSlide(currentSlide);
	};
	return (
		<div className="h-screen w-full max-w-md mx-auto flex flex-col  text-white">
			{/* Header */}
			<div className="py-8 px-4 relative flex items-center">
				<FaTimes
					className="absolute left-4 text-2xl cursor-pointer"
					onClick={() => navigate("/home")}
				/>
				<h1 className="w-full text-center text-2xl font-semibold tracking-wide">
					Ratings
				</h1>
			</div>

			{/* Main Content with Carousel */}
			<div className="flex-1 overflow-hidden flex flex-col">
				<div className="flex-1">
					<Carousel
						responsive={responsive}
						swipeable={true}
						showDots={true}
						className="h-full"
						afterChange={handleSlideChange}
					>
						{/* Slide 1 - Ratings */}
						<div className="px-4 pb-4">
							<div className="relative">
								<img
									src={face}
									alt="Profile"
									className="w-28 h-28 rounded-full border-4 border-gray-700 mx-auto mb-4"
								/>

								<div className="grid grid-cols-2 gap-3">
									<CustomBox name="Overall" percentage={80} />
									<CustomBox name="Masculinity" percentage={90} />
									<CustomBox name="Potential" percentage={70} />
									<CustomBox name="Skin quality" percentage={70} />
									<CustomBox name="Jawline" percentage={70} />
									<CustomBox name="Cheekbones" percentage={70} />
								</div>
							</div>
						</div>

						{/* Slide 2 - Features */}
						<div className="px-4 pb-4">
							<div className="relative">
								<img
									src={face}
									alt="Profile"
									className="w-28 h-28 rounded-full border-4 border-gray-700 mx-auto mb-4"
								/>
								<div className="bg-gray-800 rounded-2xl p-4">
									<div className="grid grid-cols-2 gap-4">
										<FeaturesBox
											icon={FaSmile}
											feature="Face Shape"
											findings="Heart"
										/>
										<FeaturesBox
											icon={FaBalanceScale}
											feature="Canthal Tilt"
											findings="Neutral"
										/>
										<FeaturesBox
											icon={FaEye}
											feature="Eye Shape"
											findings="Almond"
										/>
										<FeaturesBox
											icon={FaEyeSlash}
											feature="Eye Type"
											findings="Hunter"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Slide 3 - Individual Rating */}
						<IndividualRating name="Overall" percentage={89} face={face} />
						<IndividualRating name="Potential" percentage={96} face={face} />
						<IndividualRating name="Masculinity" percentage={92} face={face} />
						<IndividualRating name="Skin Quality" percentage={86} face={face} />
						<IndividualRating name="Jawline" percentage={87} face={face} />
						<IndividualRating name="Cheekbone" percentage={90} face={face} />

						<div className="px-4 pb-4">
							<div className="relative">
								<h1 className="text-xl font-semibold mb-4">
									Your glow-up routine
								</h1>
								<div className="space-y-5">
									<GlowUpBox
										icon={<FaKiss />}
										name="Lip health"
										sequence={"First Priority"}
										color="text-purple-500"
									/>
									<GlowUpBox
										icon={<FaUser />}
										name="Grow a thicker beard"
										sequence={"SECOND PRIORITY"}
										color="text-blue-500"
									/>
									<GlowUpBox
										icon={<FaEye />}
										name="Get rid of eye bags"
										sequence={"DO THIS THIRD"}
										color="text-blue-700"
									/>
									<GlowUpBox
										icon={<FaGrinBeam />}
										name="Grow thicker eyebrows"
										sequence={"DO THIS FOURTH"}
										color="text-blue-700"
									/>
								</div>{" "}
							</div>
						</div>
					</Carousel>
				</div>

				{/* Buttons integrated within the container */}
				<div className="p-4">
					{currentSlide !== 8 ? (
						<div className="flex justify-between items-center gap-3">
							<button className="flex-1 py-3 flex justify-center items-center gap-2 bg-white text-black rounded-full text-lg">
								Save
								<FaDownload className="text-base" />
							</button>
							<button className="flex-1 py-3 flex justify-center items-center gap-2 bg-white text-black rounded-full text-lg">
								Share
								<FaTelegramPlane className="text-base" />
							</button>
						</div>
					) : (
						<Button name="Continue" onClick={() => navigate("/home")} />
					)}
				</div>
			</div>
		</div>
	);
};

const CustomBox = ({ name, percentage }) => {
	const getColor = (percentage) => {
		if (percentage >= 80) return "bg-green-500";
		if (percentage >= 60) return "bg-lime-500";
		if (percentage >= 40) return "bg-yellow-500";
		if (percentage >= 20) return "bg-orange-500";
		return "bg-red-500";
	};

	return (
		<div className="p-3 rounded-xl bg-gray-700">
			<p className="text-gray-200 text-sm">{name}</p>
			<p className="text-white text-xl font-bold mt-1">{percentage}%</p>
			<div className="w-full h-1.5 bg-gray-600 rounded-full mt-2">
				<div
					className={`h-full rounded-full ${getColor(percentage)}`}
					style={{ width: `${percentage}%` }}
				/>
			</div>
		</div>
	);
};

CustomBox.propTypes = {
	name: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};

export default Analysis;
