import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar(props) {
    const [showLinks,setShowLinks]= useState(false);
    function Click(){
        setShowLinks(!showLinks);
    }
  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks ? "open":"close"}>
        <img src={logo} alt="" />
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={()=>Click()}>
        <ReorderIcon></ReorderIcon>
        </button>       
      </div>
    </div>
  );
}

export default Navbar;
