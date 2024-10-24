import { Link } from "react-router-dom";
import {StyledForm} from "./styles"

const RegisterForm = () => {
	return (
		<StyledForm className="register">
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
				<input name="email"  id= "email"/>
			</div>
			<div>
				<label name="password"> password</label>
				<input type="password" name="password" id="password" />
			</div>
			<div>
				<label name="password1">confirm password:</label>
				<input type="password" name="password1" id="password1" />
			</div>
			<button type="submit">Register</button>
			<Link to={"/"}>
				<button type="submit">Cancel</button>
			</Link>
		</StyledForm>
	);
};

export default RegisterForm;
