import styled from "styled-components";
import PropTypes from "prop-types"
const StyledPosts = styled.div`
  
`;


const Posts = ({children}) => {

	return (
  <StyledPosts>
    {children}
  </StyledPosts>
  )
};

Posts.propTypes = {
	children: PropTypes.element
};

export default Posts;
