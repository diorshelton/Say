import { StyledNewEditPost } from "./styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewEditPost = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch(
				"http://localhost:3000/api/v1/posts",
				{
					method: "POST",
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
      console.log(jsonData.status)
			if (response.status === 201) {
        setMessage("")
				navigate("/posts");
			}
		} catch (error) {
			console.log(error);
			setMessage(error.message);
		}
	};

	return (
		<StyledNewEditPost className="new-edit" method="post" onSubmit={handleSubmit}>
			<p>{message}</p>
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
			<div className="button-wrapper">
				<button type="submit">
					Create
				</button>
				<Link to="/posts">
					<button type="submit">Cancel</button>
				</Link>
			</div>
		</StyledNewEditPost>
	);
};

export default NewEditPost;

NewEditPost.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};
