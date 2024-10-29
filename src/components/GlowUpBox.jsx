import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const GlowUpBox = ({ icon, name, sequence, color }) => {
	return (
		<div className="border rounded-3xl py-4 px-6 flex items-center justify-between bg-gray-800 text-white shadow-lg">
			<div className="flex flex-col  gap-2">
				<div className=" flex items-center gap-4  w-full">
					{icon}
					<h1 className=" font-semibold">{name}</h1>
				</div>
				<div className="flex flex-col text-lg  font-bold ">
					<p className={`${color}`}>{sequence}</p>
				</div>
			</div>
			<FaChevronRight className="text2xl text-slate-400" />
		</div>
	);
};

GlowUpBox.propTypes = {
	icon: PropTypes.element.isRequired,
	name: PropTypes.string.isRequired,
	sequence: PropTypes.string.isRequired,
	color: PropTypes.string, // Add color prop type
};

export default GlowUpBox;
