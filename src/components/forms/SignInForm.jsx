import { Link } from "react-router-dom";
import { StyledForm } from "./styles";

const SignInForm = () => {
	const submitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		console.log(data, data.email,);
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
			console.log(readableStream)
		} catch(error){
			console.log(error)
		}
	};

	return (
		<StyledForm className="sign-in" onSubmit={submitHandler}>
			<div>
				<label name="email">enter your email:</label>
				<input name="email" id="email" />
			</div>
			<div>
				<label name="password">enter your password:</label>
				<input type="password" name="password" id="password" />
			</div>
			<button type="submit">Sign in</button>
			<Link to={"/"}>
				<button type="submit">Cancel</button>
			</Link>
		</StyledForm>
	);
};

export default SignInForm;
