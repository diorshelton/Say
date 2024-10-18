import Header from "./components/Header";
import "./App.css";
import Button from "./components/Button";
// import Form from "./components/Form";

function App() {
	return (
		<>
			<Header>Welcome to Say</Header>
			<div>
				<Button>Sign in</Button>
				<Button>Register</Button>
				{/* <Form></Form> */}
			</div>
		</>
	);
}

export default App;
