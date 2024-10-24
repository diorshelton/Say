import styled from "styled-components";

export const StyledForm = styled.form`
	form {
		text-align: left;
		margin: 0 auto;
		padding: 3.875rem;
		box-shadow: 1px 2px 3px rgba(245, 242, 242, 0.1);
		border-radius: 0.625rem;
		color: white;
	}
	input {
		background-color: white;
		padding: 0.625rem 0.755rem;
		border-radius: 0.25rem;
		border: 1px solid #1d1d1d;
		font-size: 1em;
		width: 100%;
		padding: 0 0.55rem;
    color: black;
	}
	label {
		display: block;
		margin: 1.25rem 0 0.625rem;
		color: white;
	}
	button {
		margin-top: 30px;
		border-radius: 36px;
		border: 0;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 0.8em;
		display: block;
		padding: 10px 16px;
		letter-spacing: 2px;
	}
`;