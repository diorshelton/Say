// import { useState } from "react";
// import "./App.css";
import Welcome from "./components/Welcome";
import Layout from "./components/Layout";
// import SignInForm from "./components/forms/SignInForm";
// import RegisterForm from "./components/forms/RegisterForm";

function App() {
  // const [message, setMessage]= useState([])

  // const passMessages = (input) => {
  //   setMessage(input);
  // }

	return (
		<>
			<Welcome/>
			{/* <SignInForm passMessages={passMessages}/> */}
      {/* <RegisterForm passMessages={passMessages}></RegisterForm> */}
		</>
	);
}

export default App;
