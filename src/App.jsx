import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Welcome from "./components/Welcome";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/sign-in" element={<Form isSignInForm={true} />} />
				<Route path="/register" element={<Form isSignInForm={false} />} />
			</Routes>
		</>
	);
}

export default App;
