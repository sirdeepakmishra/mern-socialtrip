import "./register.css";
//import { AuthContext } from "../../context/AuthContext";
//import { loginCall } from "../../apiCalls";
import { useRef } from "react";
//import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        axiosInstance.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialTrip</h3>
          <span className="loginDesc">
            Connect with friends about your travel.
            <br />
            <i style={{ color: "#00b3b3", fontSize: "20px" }}>
              A pilot project by Deepak Mishra
            </i>
          </span>
        </div>
        <div className="loginRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="User Name"
              required
              ref={username}
              className="loginInput"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              ref={email}
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              minLength="6"
              required
              ref={password}
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              minLength="6"
              required
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">
              <Link className="loginRegisterButtonLink" to="/login">
                Log into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
