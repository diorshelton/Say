import { StyledPost } from "./styles";
import PropTypes from "prop-types";

const ViewPost = ({ title, message, comments, id, handleClick }) => {
	return (
		<StyledPost>
			<div className="post" id={id}>
				<h3>{title}</h3>
				<p>{message}</p>
				<ul>
					comments
					{comments? comments.length :" 0"}
					{/* TO DO Render comments */}
					{/* {console.log(comments)} */}
					{/* {comments.map(comment, index) => { <li>{}</li>}} */}
				</ul>
				<button onClick={handleClick}>Edit</button>
				<button>Delete</button>
			</div>
		</StyledPost>
	);
};

export default ViewPost;

ViewPost.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	id: PropTypes.string,
	comments: PropTypes.array,
	handleClick: PropTypes.func,
};
