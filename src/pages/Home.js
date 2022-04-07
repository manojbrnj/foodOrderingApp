import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/food.jpeg";
import '../styles/Home.css'
function Home(props) {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>Indian Food At A Click</p>
        <Link to="/menu">
        <button >Order Now</button>
        </Link>
       <div>changes</div>
      </div>
    </div>
  );
}

export default Home;
