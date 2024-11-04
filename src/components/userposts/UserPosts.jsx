import { StyledUserPosts } from "./styles";
import { StyledPost } from "../post/styles";
import Layout from "../Layout";
import { useEffect, useState } from "react";

const UserPosts = () => {
	// const [posts, setPosts] = useState([])

	useEffect(()=>{
		const getPosts = async () => {
			try {
				const data = await fetch("http://localhost:3000/api/v1/posts", {
					method: "GET",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const posts = await data.json();
				console.log(posts);
			} catch (error) {
				console.log(error);
			}
		} 
getPosts()
	})

	return (
		<StyledUserPosts>
			<Layout>
			<div className="posts-container">
				<h2 className="post-heading">User Posts</h2>
        <StyledPost></StyledPost>
			</div>
			</Layout>
		</StyledUserPosts>
	);
};

export default UserPosts