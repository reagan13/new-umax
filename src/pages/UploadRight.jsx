import { useState, useRef, useCallback, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const UploadRight = () => {
	const navigate = useNavigate();
	const webcamRef = useRef(null);
	const [imageSrc, setImageSrc] = useState(null);
	const [cameraAccessible, setCameraAccessible] = useState(true);
	const [cameraError, setCameraError] = useState("");

	const handleNextSection = () => {
		navigate("/revealdemo");
		window.location.reload();
	};

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImageSrc(imageSrc);
	}, [webcamRef]);

	const handleTryAgain = () => {
		setImageSrc(null);
	};

	useEffect(() => {
		const checkCameraAccess = async () => {
			try {
				await navigator.mediaDevices.getUserMedia({ video: true });
				setCameraAccessible(true);
			} catch (error) {
				setCameraAccessible(false);
				setCameraError(
					"Camera access is not available. Please check your camera settings."
				);
				console.error("Camera access error:", error);
			}
		};

		checkCameraAccess();
	}, []);

	return (
		<div className="flex flex-col items-center text-white justify-between h-screen py-8 w-full">
			<div className="flex items-center w-full">
				<button onClick={() => navigate(-1)}>
					<FaArrowLeft className="ml-2 text-white text-xl" />
				</button>
				<h1 className="text-2xl font-bold text-center w-full mr-2">
					Upload a front selfie
				</h1>
			</div>
			<div className="p-4 h-96 w-full rounded-3xl flex items-center justify-center ">
				{cameraAccessible ? (
					imageSrc ? (
						<img
							src={imageSrc}
							alt="Captured"
							className="h-full w-full object-cover rounded-3xl"
						/>
					) : (
						<Webcam
							audio={false}
							ref={webcamRef}
							screenshotFormat="image/jpeg"
							className="h-full w-full object-cover rounded-3xl"
						/>
					)
				) : (
					<p className="text-center text-red-500">{cameraError}</p>
				)}
			</div>
			<div className="w-full px-4 flex flex-col gap-4">
				{imageSrc ? (
					<>
						<Button name="Try Again" onClick={handleTryAgain} />
						<button
							className="rounded-full bg-gray-600 border w-full py-4 text-lg"
							onClick={handleNextSection}
						>
							Continue
						</button>
					</>
				) : (
					cameraAccessible && <Button name="Capture" onClick={capture} />
				)}
			</div>
		</div>
	);
};

export default UploadRight;
