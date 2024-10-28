import styled from "styled-components";
import Header from "./header/Header";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./button/Button";

const StyledWelcome = styled.div``;

const Welcome = ({ messageCenter }) => {
	return (
		<StyledWelcome>
			<Header headingText={"Welcome To Say"}></Header>
			<p>{messageCenter}</p>
			<Link to= '/auth/login'> 
				<Button>Sign in</Button>
			</Link>
			<Link to={"/auth/register"}>
				<Button>Register</Button>
			</Link>
		</StyledWelcome>
	);
};

Welcome.propTypes = {
	messageCenter: PropTypes.string,
};
export default Welcome;
