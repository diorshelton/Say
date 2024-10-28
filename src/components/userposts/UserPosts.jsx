import { StyledUserPosts } from "./styles";
import { StyledUserPost } from "../post/styles";

const UserPosts = () => {
	return (
		<StyledUserPosts>
			<div className="posts-container">
				<h2 className="post-heading">User Posts</h2>
        <StyledUserPost></StyledUserPost>
			</div>
		</StyledUserPosts>
	);
};

export default UserPosts