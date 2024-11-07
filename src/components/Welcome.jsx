import styled from "styled-components";
import Header from "./header/Header";
import Layout from "./Layout";
import Post from "./post/Post";

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
			<Post title={"title"}
			message={"message"}
			id={"34"}
			comments={["3", "4"]}
			/>
		</Layout>
	);
};

export default Welcome;
