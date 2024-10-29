import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Analyzing.css"; // Make sure to create and import your CSS file
import { ImageContext } from "../Provider/ImageProvider"; // Adjust the import path as needed

const Analyzing = () => {
	const [isAnalyzing, setIsAnalyzing] = useState(true);
	const navigate = useNavigate();
	const { imageSrc, imageSrc1, imageSrc2 } = useContext(ImageContext);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsAnalyzing(false);
			navigate("/revealdemo"); // Replace with your next page route
		}, 3000); // 3 seconds

		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
			{isAnalyzing ? (
				<>
					<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
						<div
							className="w-full h-1/3 bg-cover bg-center"
							style={{ backgroundImage: `url(${imageSrc})` }}
						></div>
						<div
							className="w-full h-1/3 bg-cover bg-center"
							style={{ backgroundImage: `url(${imageSrc1})` }}
						></div>
						<div
							className="w-full h-1/3 bg-cover bg-center"
							style={{ backgroundImage: `url(${imageSrc2})` }}
						></div>
					</div>
					<div className="absolute flex flex-col items-center justify-center">
						<div className="analyzing-symbol mb-4"></div>
						<p className="text-lg">Analyzing...</p>
					</div>
				</>
			) : (
				<p className="mt-4 text-lg">Analysis Complete</p>
			)}
		</div>
	);
};

export default Analyzing;
