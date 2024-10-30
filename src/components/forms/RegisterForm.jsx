import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "./styles";
import { PropTypes } from "prop-types";
import Layout from "../Layout";

const RegisterForm = ({ passMessages }) => {
	const navigate = useNavigate();
	const handleForm = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		console.log(data);
		try {
			const response = await fetch(
				"http://localhost:3000/api/v1/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: data.name,
						email: data.email,
						username: data.username,
						password: data.password,
					}),
				}
			);
			const readableStream = await response.json();
			console.log(readableStream);
			passMessages(readableStream);
			// navigate to posts page if success
			if (readableStream.token) {
				navigate("/posts");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
			<StyledForm className="register" onSubmit={handleForm}>
				<div className="form-wrapper">
					<div>
						<label name="name">name:</label>
						<input name="name" />
					</div>
					<div>
						<label name="username">username</label>
						<input name="username" />
					</div>
					<div>
						<label name="email">email</label>
						<input name="email" id="email" />
					</div>
					<div>
						<label name="password"> password</label>
						<input type="password" name="password" id="password" />
					</div>
					<div>
						<label name="password1">confirm password:</label>
						<input type="password" name="password1" id="password1" />
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

RegisterForm.propTypes = {
	passMessages: PropTypes.func,
};

export default RegisterForm;
