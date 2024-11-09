import { StyledUserPosts } from "./styles";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import ViewPost from "../post/ViewPost";
import Post from "../post/Post";

const UserPosts = () => {
	const [postData, setPostData] = useState([]);
	// const [message, setMessage] = useState("nothing");

	useEffect(() => {
		const getPosts = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/v1/posts", {
					method: "GET",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const posts = await response.json();
				setPostData(posts.data);
			} catch (error) {
				console.log(error);
			}
		};
		getPosts();
	}, []);

  const buttonHandler = (e) => {
    e.preventDefault()
		let string = e.target.textContent;
		let methodString = string.toUpperCase()
		console.log(methodString)
  }

	return (
		<StyledUserPosts>
			<Layout>
				<div className="posts-container">
					<h2 className="post-heading">User Posts</h2>
					{/* <p>{message}</p> */}
					<div className="new-post">
						<Link to='/newpost'>
						<button>Create new post</button>
						</Link>
					</div>
					<div id="post-wrapper">
						{postData.map((post, index) => {
							return (
								<Post
									title={post.title}
									key={index}
									id={post._id}
									message={post.message}
									comments={post.comments.length}
									buttonHandler={(e) => buttonHandler(e, post._id)}
								/>
							);
						})}
					</div>
				</div>
			</Layout>
		</StyledUserPosts>
	);
};

export default UserPosts;
