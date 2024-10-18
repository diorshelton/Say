import Header from "./components/Header";
import "./App.css";
import Button from "./components/Button";

function App() {
	return (
		<>
			<Header>Welcome to Say</Header>
			<div>
				<Button>Sign in</Button>
				<Button>Register</Button>
			</div>
		</>
	);
}

export default App;
