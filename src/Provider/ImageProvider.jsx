import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
	const [imageSrc, setImageSrc] = useState(null);
	const [imageSrc1, setImageSrc1] = useState(null);
	const [imageSrc2, setImageSrc2] = useState(null);
	useEffect(() => {}, [imageSrc]);
	return (
		<ImageContext.Provider
			value={{
				imageSrc,
				setImageSrc,
				imageSrc1,
				setImageSrc1,
				imageSrc2,
				setImageSrc2,
			}}
		>
			{children}
		</ImageContext.Provider>
	);
};

ImageProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
