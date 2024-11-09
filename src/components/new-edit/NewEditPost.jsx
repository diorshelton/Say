import { StyledNewEditPost } from "./styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewEditPost = ({ handleSubmit }) => {
	return (
		<StyledNewEditPost className="new-edit" method="post">
			<div className="form-wrapper">
				<div>
					<label rows="4" name="title">
						Title:
					</label>
					<br />
					<input
						name="title"
						type="text"
						id="title"
						placeholder="Post Title"
					></input>
				</div>
				<br />
				<div>
					<label name="message">Message</label>
					<br></br>
					<textarea
						name="message"
						rows="4"
						cols="30"
						type="text"
						id="message"
						placeholder="Message"
					></textarea>
				</div>
			</div>
			<button type="submit" onSubmit={handleSubmit}>
				Create
			</button>
			<Link to="/posts">
				<button type="submit">Cancel</button>
			</Link>
		</StyledNewEditPost>
	);
};

export default NewEditPost;

NewEditPost.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};
