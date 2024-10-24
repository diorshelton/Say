import styled from "styled-components";
import Header from "./header/Header";
import { Link } from "react-router-dom";
import Button from "./button/Button";

const StyledWelcome = styled.div`
`;


const Welcome = () => {
	return (
		<StyledWelcome>
			<Header headingText={"Welcome To Say"}></Header>
			<Link to={"/sign-in"}>
				<Button>Sign in</Button>
			</Link>
			<Link to={"/register"}>
				<Button>Register</Button>
			</Link>
		</StyledWelcome>
	);
};
export default Welcome;
