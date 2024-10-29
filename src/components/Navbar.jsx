import {
	FaQrcode,
	FaEllipsisV,
	FaCheck,
	FaFacebookMessenger,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="flex gap-5 mt-4">
			<button
				className="flex flex-col items-center justify-center size-14 p-1 gap-1"
				onClick={() => navigate("/upload")}
			>
				<FaQrcode className="text-base " />
				<span className="text-sm">Scan</span>
			</button>
			<button
				className="flex flex-col items-center justify-center size-14 p-1 gap-1"
				onClick={() => navigate("/home")}
			>
				<FaEllipsisV className="text-base " />
				<span className="text-sm">Extras</span>
			</button>
			<button
				className="flex flex-col items-center justify-center size-14  p-1 gap-1"
				onClick={() => navigate("/daily")}
			>
				<FaCheck className="text-base " />
				<span className="text-sm">Daily</span>
			</button>
			<button
				className="flex flex-col items-center justify-center size-14 p-1 gap-1"
				onClick={() => navigate("/coach")}
			>
				<FaFacebookMessenger className="text-base" />
				<span className="text-sm">Coach</span>
			</button>
		</div>
	);
};

export default Navbar;
