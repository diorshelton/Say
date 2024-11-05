import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "./styles";
import Layout from "../Layout";
import { useState } from "react";

const SignInForm = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState(" ");

	const handleSignIn = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch("http://localhost:3000/api/v1/auth/login", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: data.email,
					password: data.password,
				}),
			});
			const jsonData = await response.json();
			if (jsonData.token) {
				navigate("/posts");
			}
			return setMessage(jsonData.msg)
		} catch (error) {
			console.log(error);
			setMessage(error);
		}
	};

	return (
		<Layout>
			<StyledForm
				className="sign-in"
				method="post"
				action="auth/login"
				onSubmit={handleSignIn}
			>
				<p>{message}</p>
				<div className="form-wrapper">
					<div>
						<label name="email" htmlFor="email" aria-required>
							enter your email:
						</label>
						<input name="email" id="email" />
					</div>
					<div>
						<label name="password" htmlFor="password" aria-required>
							enter your password:
						</label>
						<input type="password" name="password" id="password" />
					</div>
					<div className="button-wrapper">
						<button type="submit">Submit</button>
						<Link to={"/"}>
							<button type="submit">Cancel</button>
						</Link>
					</div>
				</div>
			</StyledForm>
		</Layout>
	);
};

export default SignInForm;
