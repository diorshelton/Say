import { StyledUserPost } from "./styles";
import PropTypes from "prop-types";

const Post = ({ title, message, id, comments }) => {
	return (
		<StyledUserPost>
			<div className="post" id={id}>
				<h3>{title}</h3>
				<p>{message}</p>
				<ul>
					{comments.map((comment) => (
						<li key={comment.id}>{comment}</li>
					))}
				</ul>
			</div>
		</StyledUserPost>
	);
};

export default Post;

Post.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	comments: PropTypes.string.isRequired,
};
