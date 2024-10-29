import PropTypes from "prop-types";
import BellCurveChart from "./Graph";
const IndividualRating = ({ name, percentage, face }) => {
	return (
		<div className="px-4 pb-4">
			<div className="relative">
				<img
					src={face}
					alt="Profile"
					className="w-28 h-28 rounded-full border-4 border-gray-700 mx-auto mb-4"
				/>
				<div className="bg-gray-800 rounded-2xl p-4">
					<div className=" w-full  flex-col text-center h-full flex justify-center ">
						<h1 className="text-2xl">{name}</h1>
						<h1 className="text-7xl font-bold">{percentage}</h1>
						<BellCurveChart percentage={percentage} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndividualRating;

IndividualRating.propTypes = {
	name: PropTypes.string,
	percentage: PropTypes.number,
	face: PropTypes.string,
};
