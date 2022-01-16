import { useRef, useContext } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
//import {CircularProgress} from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import {  Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {  isFetching,  dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialTrip</h3>
          <span className="loginDesc">
            Connect with friends about your travel.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              required
              minLength="6"
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" size="30px" />: "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" size="30px" /> :
              
              
              <Link className="loginRegisterButtonLink" to="/register">
                Create a New Account
              </Link>
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
