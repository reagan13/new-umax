import { GoogleLogin } from "react-google-login";


const clientID =
	"774046045515-7ddl57ul7aar0lc4karbto27i0u3e5os.apps.googleusercontent.com";
const login = () => {
	const onSuccess = (res) => {
		console.log("[Login Success] currentUser:", res.profileObj);
	};
	const onFailure = (res) => {
		console.log("[Login Failed] res:", res);
	};
	return (
		<div id="signInButton">
			<GoogleLogin
				clientId={clientID}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy="single_host_origin"
                isSignedIn={true}
                
                
			/>
		</div>
	);
};

export default login;
