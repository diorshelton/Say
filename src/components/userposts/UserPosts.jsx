import { StyledUserPosts } from "./styles";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import Post from "../post/Post";

const UserPosts = () => {
	const [postData, setPostData] = useState([]);

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

	return (
		<StyledUserPosts>
			<Layout>
				<div className="posts-container">
					<h2 className="post-heading">User Posts</h2>
					<div className="new-post">
						<button>Create a new post</button>
					</div>
					<div className="post-wrapper">
						{postData.map((post, index) => {
							return (
								<Post
									title={post.title}
									key={index}
									id={post._id}
									message={post.message}
									comments={post.comments}
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
