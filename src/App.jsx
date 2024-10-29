import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
const clientID =
	"774046045515-7ddl57ul7aar0lc4karbto27i0u3e5os.apps.googleusercontent.com";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import Coach from "./pages/Coach";
import Upload from "./pages/Upload";
import UploadFront from "./pages/UploadFront";
import UploadLeft from "./pages/UploadLeft";
import UploadRight from "./pages/UploadRight";
import RevealResulstDemo from "./pages/RevealResulstDemo";
import GetUmaxPro from "./pages/GetUmaxPro";

function App() {
	const onSuccess = () => {
		console.log("[Logout Success] Logged out successfully");
	};
	return (
		<div className="flex items-center justify-center min-h-screen bg-black">
			<div className="w-96 mx-auto border">
				{/* Your app content here */}
				{/* <div id="signOutButton">
                    <GoogleLogout
                        clientId={clientID}
                        buttonText="Logout"
                        onLogoutSuccess={onSuccess}
                    />
                </div> */}
				<Router>
					<Routes>
						<Route path="/" element={<Onboarding />} />
						<Route path="/home" element={<Home />} />
						<Route path="/daily" element={<Daily />} />
						<Route path="/coach" element={<Coach />} />
						<Route path="/upload" element={<Upload />} />
						<Route path="/upload/front" element={<UploadFront />} />
						<Route path="/upload/left" element={<UploadLeft />} />
						<Route path="/upload/right" element={<UploadRight />} />
						<Route path="/revealdemo" element={<RevealResulstDemo />} />
						<Route path="/getumaxpro" element={<GetUmaxPro />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
