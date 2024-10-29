import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { FaEye, FaCopy } from "react-icons/fa";
import face from "../assets/face.png";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import ticket from "../assets/ticket.png";
const GetUmaxPro = () => {
	const navigate = useNavigate();
	const [inviteCode] = useState("KYZ378MQ");
	const modalRef = useRef(null);

	return (
		<div className="flex flex-col items-center text-white h-screen py-8 w-full  relative"></div>
	);
};

export default GetUmaxPro;

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
