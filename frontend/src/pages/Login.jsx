import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

//images
import LoginLeft from "../assets/login.jpg";

function Login() {
  // const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHnadle = () => {
    if (email === "" || password === "") {
      return window.alert("Please fill all the fields");
    }

    //request body
    const insertData = {
      email: email,
      password: password,
    };

    //console.log(insertData);

    const insertUrl = "http://localhost:5000/login";

    axios
      //sends the post request
      .post(insertUrl, insertData)
      .then((response) => {
        if (response.data.success) {
          setEmail("");
          setPassword("");
        } else {
          window.alert("Unsuccessful", response.data.message);
        }
      })
      .catch((error) => {
        console.error(error.message);
        window.alert("Error", "An error occurred while login");
      });
  };

  return (
    <div className="login">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${LoginLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Login</h1>

        <form>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button type="submit" onClick={loginHnadle}>
            {" "}
            Login
          </button>
        </form>

        <br />
        <div className="para">
          <p>
            <span> Or</span>
            <Link to="/signup"> Signup Page</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
