import Nav from "./nav/Nav";
import Reset from "./Reset";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
	return (
		<>
			<Reset />
			<Nav />
			{children}
		</>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.element,
};
