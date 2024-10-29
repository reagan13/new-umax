import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { FaEye, FaCopy } from "react-icons/fa";
import face from "../assets/face.png";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import ticket from "../assets/ticket.png";
const RevealResulstDemo = () => {
	const navigate = useNavigate();
	const [inviteCode] = useState("KYZ378MQ");
	const modalRef = useRef(null);

	const handleNextSection = () => {
		navigate("/getumaxpro");
	};
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const copyToClipboard = () => {
		navigator.clipboard.writeText(inviteCode);
		alert("Invite code copied to clipboard!");
	};
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				closeModal();
			}
		};

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};

		if (isModalOpen) {
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isModalOpen]);

	return (
		<div className="flex flex-col items-center text-white h-screen py-8 w-full  relative">
			<div className="flex   items-center ">
				<FaEye className="text-white text-2xl mr-2" />
				<FaEye className="text-white text-2xl mr-2" />
				<h1 className="text-2xl font-semibold">Reveal your results</h1>
			</div>
			<p className="px-10 tracking-wide text-center">
				Invite 3 friends or get Umax Pro to view your results
			</p>
			<div className="relative w-full  text-center flex justify-center h-full mt-2">
				<img
					src={face}
					alt=""
					className="size-28 rounded-full z-10 size-30 border-4 "
				/>
				<div
					className="shadow-lg grid grid-cols-2 p-4 gap-6 rounded-3xl absolute top-12 bg-gray-700 pt-16
                 "
				>
					<CustomBox name="Overall" percentage={80} />
					<CustomBox name="Masculinity" percentage={90} />
					<CustomBox name="Potential" percentage={70} />
					<CustomBox name="Skin quality" percentage={70} />
					<CustomBox name="Jawline" percentage={70} />
					<CustomBox name="Cheekbones" percentage={70} />
				</div>
			</div>
			<div className="w-full px-4 flex flex-col gap-3">
				<Button name="Get Umax Pro" onClick={handleNextSection} />
				<button
					className="rounded-full bg-gray-600  w-full py-4 text-lg"
					onClick={openModal}
				>
					Invite 3 friends
				</button>
			</div>
			{/* Modal */}
			{/* {isModalOpen && (
				<div className="fixed bottom-0 w-96 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div
						className={`bg-gray-600 h-96 w-full max-w-md p-4 rounded-t-3xl transform transition-transform duration-300 ease-out ${
							isModalOpen ? "modal-enter-active" : "modal-exit-active"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="w-full flex items-center justify-between mb-4">
							<img src={ticket} alt="" className="size-16" />
							<h1 className="font-semibold text-xl">Redeem</h1>
						</div>
						<h2 className="text-3xl font-bold mb-4">Share your invite code</h2>
						<p className="mb-4 text-lg">Invite 3 friends to unlock results</p>
						<div className="flex items-center mb-4 justify-center mx-8 h-14 rounded-2xl shadow-xl">
							<span className="text-xl tracking-widest font-mono p-2  ">
								{inviteCode}
								<button
									className="ml-2 p-2  rounded-lg hover:bg-gray-400"
									onClick={copyToClipboard}
								>
									<FaCopy className="" />
								</button>
							</span>
						</div>
						<div className="flex justify-end mt-8">
							<Button name="Share" onClick={closeModal} />
						</div>
					</div>
				</div>
			)} */}

			{isModalOpen && (
				<div
					className="fixed bottom-0 w-96 flex items-center justify-center bg-black bg-opacity-50 z-50"
					onClick={closeModal}
				>
					<div
						ref={modalRef}
						className={`bg-gray-600 h-96 w-full max-w-md p-4 rounded-t-3xl transform transition-transform duration-300 ease-out ${
							isModalOpen ? "modal-enter-active" : "modal-exit-active"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="w-full flex items-center justify-between mb-4">
							<img src={ticket} alt="" className="size-16" />
							<h1 className="font-semibold text-xl">Redeem</h1>
						</div>
						<h2 className="text-3xl font-bold mb-4">Share your invite code</h2>
						<p className="mb-4 text-lg">Invite 3 friends to unlock results</p>
						<div className="flex items-center mb-4 justify-center mx-8 h-14 rounded-2xl shadow-xl">
							<span className="text-xl tracking-widest font-mono p-2">
								{inviteCode}
								<button
									className="ml-2 p-2 rounded-lg hover:bg-gray-400"
									onClick={copyToClipboard}
								>
									<FaCopy className="" />
								</button>
							</span>
						</div>
						<div className="flex justify-end mt-8">
							<Button name="Share" onClick={closeModal} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default RevealResulstDemo;

const CustomBox = ({ name, percentage }) => {
	return (
		<div className=" w-32 flex flex-col   rounded-lg shadow-lg text-left">
			<h1 className="text-lg">{name}</h1>
			<h1 className="text-xl text-slate-100">{percentage}</h1>

			<div className="bg-slate-300 mt-1 h-4 rounded-full w-full"></div>
		</div>
	);
};

CustomBox.propTypes = {
	name: PropTypes.string,
	percentage: PropTypes.number,
};
