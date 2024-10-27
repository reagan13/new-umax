import PropTypes from "prop-types";

const Button = ({ name, onClick }) => {
	return (
		<button
			className="rounded-full bg-violet-600 w-full py-2"
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
