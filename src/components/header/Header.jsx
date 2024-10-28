import { StyledHeader } from "./styles";
import PropTypes from "prop-types";


const Header = ({ headingText }) => {
	return (
		<StyledHeader>
			{headingText}
		</StyledHeader>
	);
};

Header.propTypes = {
	headingText: PropTypes.string.isRequired,
};

export default Header;
