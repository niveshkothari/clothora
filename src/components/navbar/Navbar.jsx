import React, { useState } from "react";
import "./Navbar.css";
import shop_png from "../../assets/logo.png";
import cart_logo from "../../assets/cartlogo.png";
import { Link } from "react-router-dom";

const navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="navlogo">
        <img src={shop_png} alt="shop logo" height="150px" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => setMenu("home")}
          style={{
            backgroundColor: menu === "home" ? "#f0f0f0" : "transparent",
            borderRadius: "6px",
            padding: "8px 12px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
            Home
          </Link>
        </li>

        <li
          onClick={() => setMenu("men")}
          style={{
            backgroundColor: menu === "men" ? "#f0f0f0" : "transparent",
            borderRadius: "6px",
            padding: "8px 12px",
          }}
        >
          <Link to="/men" style={{ textDecoration: "none", color: "gray" }}>
            Men
          </Link>
        </li>

        <li
          onClick={() => setMenu("women")}
          style={{
            backgroundColor: menu === "women" ? "#f0f0f0" : "transparent",
            borderRadius: "6px",
            padding: "8px 12px",
          }}
        >
          <Link to="/women" style={{ textDecoration: "none", color: "gray" }}>
            Women
          </Link>
        </li>

        <li
          onClick={() => setMenu("kid")}
          style={{
            backgroundColor: menu === "kid" ? "#f0f0f0" : "transparent",
            borderRadius: "6px",
            padding: "8px 12px",
          }}
        >
          <Link to="/kid" style={{ textDecoration: "none", color: "gray" }}>
            Kid
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="./login">
          <button>login</button>
        </Link>
        <Link to="./cart">
          <img src={cart_logo} alt="logo" height="40px" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default navbar;
