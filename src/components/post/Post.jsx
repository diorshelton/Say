import ViewPost from "./ViewPost";
import EditPost from "./EditPost";
// import { StyledPost } from "./styles";
import PropTypes from "prop-types";

const Post = ({ title, message, id, comments, buttonHandler}) => {
  // let mode = true;
	return (
    // <EditPost title={title}
    // message={message}
    // id={id}
    // buttonHandler={buttonHandler}/>
    <ViewPost title={title}
    message={message}
    id={id}
    buttonHandler={buttonHandler}/>
		// <StyledPost onClick={buttonHandler} >
		// 		<div className="form-wrapper">
		// 			<div>
		// 				<label rows="4" name="title">
		// 					Title:
		// 				</label>
		// 				<br />
		// 				<input
		// 					name="title"
		// 					type="text"
		// 					id="title"
		// 					placeholder="Post Title"
		// 				></input>
		// 			</div>
		// 			<br />
		// 			<div>
		// 				<label name="message">Message</label>
		// 				<br></br>
		// 				<textarea
		// 					name="message"
		// 					rows="4"
		// 					cols="30"
		// 					type="text"
		// 					id="message"
		// 					placeholder="Message"
		// 				></textarea>
		// 			</div>
		// 		</div>
		// </StyledPost>
	);
};

export default Post;

Post.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	comments: PropTypes.array,
	buttonHandler: PropTypes.func.isRequired,
  mode: PropTypes.bool,
};
