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

  const registerHnadle = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmed === "" ||
      country === ""
    ) {
      return window.alert("Please fill all the fields");
    }

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
    <div className="register">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${RegisterLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Register</h1>

        <form>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Username"
          />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="country"
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
          <button type="submit" onClick={registerHnadle}>
            {" "}
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
