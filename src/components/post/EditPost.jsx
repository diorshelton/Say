import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledNewEditPost } from "../new-edit/styles";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

const EditPost = ({ title, message, id, clickHandler, submitHandler, messageHandler }) => {

	const [alertMessage, setAlertMessage] = useState(messageHandler);

	return (
		<StyledNewEditPost
			className="new-edit"
			method="post"
			onSubmit={submitHandler}
			id={id}
		>
			<p>{alertMessage}</p>
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
			<div className="button-wrapper">
				<button type="submit">update</button>
				<Link to="/posts">
					<button onClick={clickHandler} type="button">
						cancel
					</button>
				</Link>
			</div>
		</StyledNewEditPost>
	);
};

export default EditPost;

EditPost.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
	submitHandler: PropTypes.func.isRequired,
	messageHandler: PropTypes.string,
};
