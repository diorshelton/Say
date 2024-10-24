import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignInForm from "./components/forms/SignInForm";
import RegisterForm from "./components/forms/RegisterForm";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/sign-in" element={<SignInForm/>} />
				<Route path="/register" element={<RegisterForm/>}/>
			</Routes>
		</>
	);
}

export default App;
