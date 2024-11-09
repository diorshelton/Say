import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInForm from "./components/forms/SignInForm.jsx";
import RegisterForm from "./components/forms/RegisterForm.jsx";
import UserPosts from "./components/userposts/UserPosts.jsx"
import NewPost from "./components/NewPost.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/auth/login",
		element: <SignInForm />,
	},
	{
		path: "/auth/register",
		element: <RegisterForm />,
	},
	{
	  path:"/posts",
	  element: <UserPosts />
	},
	{
	  path:"/newpost",
	  element: <NewPost />
	}
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
