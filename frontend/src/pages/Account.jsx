import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { Container, Row, Col, Image } from "react-bootstrap"; // Import Bootstrap components
import profilepic from "../assets/manager.jpg"; // Import Bootstrap

function Account() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    loginHandle();
  }, []);

  const loginHandle = async () => {
    try {
      //request body
      const insertData = {
        id: id,
      };

      const insertUrl = "http://localhost:5000/findUserById";

      //sends the post request
      const response = await axios.post(insertUrl, insertData);

      if (response.data.success) {
        console.log("Recieved Data from Response", response.data.data);
        setUser(response.data.data);
      } else {
        alert("Unsuccessful");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container className="mt-4">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      <h1>User Account</h1>
      <Row>
        <Col md={4}>
          <Image src={profilepic} alt="User" rounded fluid />
        </Col>
        <Col md={8}>
          <h3>{user.username}</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
          {/* Add more user details as needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default Account;
