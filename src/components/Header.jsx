import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.h1`
	font-size: 1rem;
	text-align: center;
	color: #1be662;
	padding: 2rem;
`;
const Header = ({ headingText }) => {
	return (
		<StyledHeader>
			<h1>{headingText}</h1>
		</StyledHeader>
	);
};

Header.propTypes = {
	headingText: PropTypes.string.isRequred,
};

export default Header;
