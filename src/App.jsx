import Header from "./components/Header";
import "./App.css";
import Button from "./components/Button";

function App() {
	return (
		<>
			<div>
				<Header headingText={"Welcome To Say"}></Header>
				<Button>Sign in</Button>
				<Button>Register</Button>
			</div>
		</>
	);
}

export default App;
