import PropTypes from "prop-types";
const FeaturesBox = ({ icon: Icon, feature, findings }) => {
	return (
		<div className="flex flex-col gap-2 w-full  text-left">
			<Icon className="text-3xl " />
			<p className="text-xl text-slate-500">{feature}</p>
			<h1 className="text-2xl font-bold">{findings}</h1>
		</div>
	);
};
export default FeaturesBox;
FeaturesBox.propTypes = {
	icon: PropTypes.elementType,
	feature: PropTypes.string,
	findings: PropTypes.string,
};
