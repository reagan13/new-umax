import { GoogleLogout } from "react-google-login";
const clientID =
	"774046045515-7ddl57ul7aar0lc4karbto27i0u3e5os.apps.googleusercontent.com";
const logout = () => {
	const onSuccess = () => {
		console.log("[Logout Success] Logged out successfully");
	};
	return (
		<div id="signOutButton">
			<GoogleLogout
				clientId={clientID}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			/>
		</div>
	);
};

export default logout;
