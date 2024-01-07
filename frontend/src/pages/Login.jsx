import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Registration from "./Registration";
import "../styles/Login.css";

//images
import LoginLeft from "../assets/login.jpg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (email === "" || password === "") {
      return window.alert("Please fill all the fields");
    }

    try {
      //request body
      const insertData = {
        email: email,
        password: password,
      };

      const insertUrl = "http://localhost:5000/login";

      //sends the post request
      const response = await axios.post(insertUrl, insertData);

      if (response.data.success) {
        setEmail("");
        setPassword("");
        navigate("/account");
      } else {
        alert("Unsuccessful");
      }
    } catch (error) {
      console.error(error.message);
      window.alert("Error: An error occurred while login");
    }
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
          <button type="submit" onClick={loginHandle}>
            Login
          </button>
        </form>

        <br />
        <div className="para">
          <p>
            <span> Or</span>
            <Link to="/register"> Signup Page</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
