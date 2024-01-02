import React from "react";
import { useState } from "react";
import axios from "axios";

import CoffeeLeft from "../assets/ContactUs.jpg";
import "../styles/Contact.css";


 function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [comment, setComment] = useState("");

  const handleAddFormSubmit = () => {
    if (email === "" || name === "" || contactNo === "" || comment === "") {
      return window.alert("Please fill all the fields");
    }

    //request body
    const insertData = {
      name: name,
      email:email,
      contactNo: contactNo,
      comment: comment,
    };
    console.log(insertData);

    const insertUrl = 'http://localhost:5000/contact';

    axios
      //sends the post request
      .post(insertUrl, insertData)
      .then((response) => {
        if (response.data.success) {
          setName("");
          setEmail("");
          setContactNo("");
          setComment("");
        } else {
          window.alert("Unsuccessful", response.data.message);
        }
      })
      .catch((error) => {
        console.error(error.message);
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

        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text"  onChange={(e) => { setName(e.target.value) }}/>
          
          <label htmlFor="contact">Number</label>
          <input name="name" placeholder="Enter mobile...." type="number"   onChange={(e) => { setContactNo(e.target.value) }}/>

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email"  onChange={(e) => { setEmail(e.target.value) }} />

          <label htmlFor="mesage">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            className="no-border"
            required
            onChange={(e) => { setComment(e.target.value) }}
          ></textarea>
          <hr border="1" />
          <button type="submit" onClick={handleAddFormSubmit}> Send Message</button>
        </form>

      </div>
    </div>
  );
}
  

  export default Contact;

