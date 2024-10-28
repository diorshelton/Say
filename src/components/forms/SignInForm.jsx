import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "./styles";
import {PropTypes} from "prop-types"

const SignInForm = ({passMessages}) => {
	const navigate = useNavigate()
	 const handleSignIn = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		
		try {
			const response = await fetch('http://localhost:3000/api/v1/auth/login', {
				method:"POST",
				headers: {
						"Content-Type": "application/json"
				}, body: JSON.stringify({
					email:data.email,
					password:data.password,
				})
			})
			const readableStream = await response.json()
			console.log(readableStream.token)
			passMessages(readableStream)
			if (readableStream.token) {
				navigate("/posts")
			}
		} catch(error){
			console.log(error)
		}
	};

	return (
		<StyledForm className="sign-in" method="post" action="auth/login" onSubmit={handleSignIn}>
			<div>
				<label name="email" htmlFor="email">
					enter your email:
				</label>
				<input name="email" id="email" />
			</div>
			<div>
				<label name="password" htmlFor="password">enter your password:</label>
				<input type="password" name="password" id="password" />
			</div>
			<button type="submit">Sign in</button>
			<Link to={"/"}>
				<button type="submit">Cancel</button>
			</Link>
		</StyledForm>
	);
};

SignInForm.propTypes = {
	passMessages: PropTypes.string
}

export default SignInForm;
