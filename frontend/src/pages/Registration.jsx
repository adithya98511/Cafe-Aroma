import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Registration.css";

//images
import RegisterLeft from "../assets/registration.jpg";

function Registration() {
  // const history = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState("");

  const registerHanadle = async () => {
    if (
      username === "" ||
      email === "" ||
      country === "" ||
      password === "" ||
      confirmed === ""
    ) {
      return window.alert("Please fill all the fields");
    } else {
      try {
        //request body
        const insertData = {
          email: email,
          username: username,
          country: country,
          password: password,
          confirmed: confirmed,
        };

        //console.log(insertData);

        const insertUrl = "http://localhost:5000/reg";

        const response = await axios.post(insertUrl, insertData);
        console.log("Response :", response.data);
        if (response.data.status) {
          // This block will be executed if status is true
          setUserName("");
          setEmail("");
          setCountry("");
          setPassword("");
          setConfirmed("");
          window.alert("Success");
          console.log(response.data);
          console.log("successfully");
          // } else if (response.data.status === false) {
          //   // This block will be executed if status is false
          //   console.log("Email already registered");
          //   window.alert("Email already registered");
          //   console.log(response.data);
          // }
        } else {
          //This block will be executed if status is false
          console.log("Email already registered");
          window.alert("Email already registered");
          console.log(response.data);
        }
      } catch (error) {
        console.error("Registration error:", error);
        window.alert(
          "Error occurred during registration. Check console for details."
        );
      }
    }
  };

  return (
    <div className="register">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${RegisterLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Register</h1>

        <form>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="username"
          />
          <input
            type="text"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            placeholder="country"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input
            type="password"
            onChange={(e) => {
              setConfirmed(e.target.value);
            }}
            placeholder="Confirm Password"
          />
          <button type="submit" onClick={registerHanadle}>
            Register
          </button>
        </form>

        <br />

        <div className="para">
          <p>
            <span> Already have an Account ? </span>
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
