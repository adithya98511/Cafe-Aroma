import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CoffeeLeft from "../assets/ContactUs.jpg";
import "../styles/Contact.css";
import BASE_URL from "../apiConfig.js/apiConfig";

 function Contact() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [comment, setComment] = useState("");

  const handleAddFormSubmit = () => {
    if (email == "" || name == "" || contactNo == "" || comment == "") {
      return window.alert("Invalid Input", "Please fill all the fields");
    }else{
      window.alert("Your message has been submitted");
    }

    //request body
    const insertData = {
      name: name,
      email: email,
      contactNo: contactNo,
      comment: comment,
    };

    const insertUrl = '/contact';

    axios
      //sends the post request
      .post(insertUrl, insertData)
      .then((response) => {
        if (response.data.success) {
          // showToast();
          // Alert.alert("Success", response.data.message);
          setName("");
          setEmail("");
          setContactNo("");
          setComment("");
        } else {
          window.alert("Unsuccessful", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error sending Otp:", error);
        window.alert("Error", "An error occurred while sending Message");
      });
 }

  return (
    <div className="contact">

      <div
        className="leftSide"
        style={{ backgroundImage: `url(${CoffeeLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          
          <label htmlFor="name">Number</label>
          <input name="name" placeholder="Enter mobile...." type="number" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="mesage">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            className="no-border"
            required
          ></textarea>
          <hr border="1" />
          <button type="submit" onClick={handleAddFormSubmit()}> Send Message</button>
        </form>

      </div>
    </div>
  );
}
  

  export default Contact;

