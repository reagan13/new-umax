import { FaArrowLeft } from "react-icons/fa";
import upload from "../assets/upload.jpg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Upload = () => {
	const navigate = useNavigate();
	const handleNextSection = () => {
		navigate("/upload/front");
	};
	return (
		<div className="flex flex-col items-center text-white justify-between h-screen py-8  w-full ">
			<div className="flex items-center w-full">
				<button onClick={() => navigate("/home")}>
					<FaArrowLeft className="ml-2 text-white text-xl" />
				</button>
				<h1 className="text-2xl font-bold text-center  w-full mr-2">
					Upload a front selfie
				</h1>
			</div>
			<div className="w-full p-4 ">
				<img src={upload} alt="" className="h-96 w-full rounded-3xl" />
			</div>

			<div className="w-full px-4">
				<Button name="Upload or take a selfie" onClick={handleNextSection} />
			</div>
		</div>
	);
};

export default Upload;
