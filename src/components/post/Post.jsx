import ViewPost from "./ViewPost";
import EditPost from "./EditPost";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ title, message, id, comments }) => {
	const [inEditMode, setInEditMode] = useState(false);
	const navigate = useNavigate();
	const toggleEditMode = () => {
		setInEditMode(!inEditMode);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let postId = id;
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch(
				`http://localhost:3000/api/v1/posts/${postId}`,
				{
					method: "PATCH",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						title: data.title,
						message: data.message,
					}),
				}
			);
			const jsonData = await response.json();
			// navigate to posts page if successful
			console.log(jsonData);
			if (response.status === 200) {
				// messageHandler("");
				navigate("/posts");
			}
		} catch (error) {
			console.log(error);
			// setMessage(error.message);
		}
	};

	const handleClick = (e) => {
		e.preventDefault();
		let action = e.target.innerText;
		console.log(e.target, id);
		// if edit button is clicked toggle editmode
		if (action === "edit") {
			toggleEditMode();
		} else if (action === "cancel") {
			toggleEditMode();
		} else {
			// delete post
		}
	};

	return inEditMode ? (
		<EditPost
			title={title}
			message={message}
			id={id}
			submitHandler={handleSubmit}
			clickHandler={handleClick}
			messageHandler={"userMessage"}
		/>
	) : (
		<ViewPost
			title={title}
			message={message}
			id={id}
			comments={comments}
			clickHandler={handleClick}
		/>
	);
};

export default Post;

Post.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	comments: PropTypes.array,
	clickHandler: PropTypes.func.isRequired,
	mode: PropTypes.bool,
};
