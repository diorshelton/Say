import { Link } from "react-router-dom";
import { StyledNav } from "./styles";
import Button from "../button/Button";

const Nav = () => {
  return (
    <>
    <StyledNav className="width-wrapper" aria-label="main">
      <h1>Say</h1>
      <ul>
        <li >
          <Link to={'/posts'}>Posts</Link>
        </li>
      </ul>
      <Link to={"/auth/login"}>
        <Button>{"Logon"}</Button>
      </Link>
      <Link to={"/auth/register"}>
        <Button>{"Register"}</Button>
      </Link>
    </StyledNav>
    </>
  )
}

export default Nav;