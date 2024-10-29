import PropTypes from "prop-types";

const Button = ({ name, onClick }) => {
	return (
		<button
			className="rounded-full bg-violet-800 w-full py-4 text-lg"
			onClick={onClick}
		>
			{name}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
