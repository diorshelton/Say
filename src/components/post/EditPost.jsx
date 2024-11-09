import { StyledPost } from "./styles";
import PropTypes from "prop-types";

const EditPost = ({ title, message, id, buttonHandler }) => {
	return (
		<StyledPost onClick={buttonHandler} id={id}>
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
						placeholder={title}
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
						placeholder={message}
					></textarea>
				</div>
			</div>
		</StyledPost>
	);
};

export default EditPost;

EditPost.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	buttonHandler: PropTypes.func.isRequired,
};
