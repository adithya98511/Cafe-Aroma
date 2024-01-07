import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Price from "./pages/Price";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Account from "./pages/Account";
function App() {
  return (
    <div className="App">
      <Router>
        {/* outof the specific routes */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
