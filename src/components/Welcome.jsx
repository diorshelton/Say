import styled from "styled-components";
import Header from "./header/Header";
import Layout from "./Layout";
import Post from "./post/Post";
import NewEditPost from "./new-edit/NewEditPost"

const StyledWelcome = styled.div`
	display: flex;
	place-content:center;
`;

const Welcome = () => {
	return (
		<Layout>
			<StyledWelcome>
				<Header headingText={"Welcome To Say"}></Header>
			</StyledWelcome>
		</Layout>
	);
};

export default Welcome;
