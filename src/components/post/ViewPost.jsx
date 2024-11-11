import { StyledPost } from "./styles";
import PropTypes from "prop-types";

const ViewPost = ({ title, message, comments, id, clickHandler }) => {
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
				<button onClick={clickHandler}>edit</button>
				<button onClick={clickHandler}>delete</button>
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
	clickHandler: PropTypes.func,
};
