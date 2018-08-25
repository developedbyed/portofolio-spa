import React from "react";
import portrait from "../img/logoBig.svg";
import { Home, Mail, Activity } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="nav-wrapper">
    <div className="nav-image">
      <img className="logo" src={portrait} alt="portrait" />
    </div>
    <ul className="nav-links">
      <Link to="/" className="nav-link">
        <Home />
      </Link>
      <Link to="/projects" className="nav-link">
        <Activity />
      </Link>
      <Link to="/contact" className="nav-link">
        <Mail />
      </Link>
    </ul>
  </div>
);

export default Navbar;
