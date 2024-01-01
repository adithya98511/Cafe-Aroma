import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home1.jpg";
import "../styles/Home.css";
import {useNavigate,useLocation} from 'react-router-dom';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>COFFEE street </h1>
        <p>Coffee of your Choice</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
