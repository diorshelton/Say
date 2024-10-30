import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4f60bf;
  border-radius: 36px;
  transition: border-color 0.25s;
:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`;

export default Button;