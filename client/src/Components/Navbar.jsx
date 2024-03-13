import "./Navbar.css";
import React from "react";
import nav from "../navImg.gif";
import { Link } from "react-router-dom";
function Navbar() {
  
  const handleLogout = () => {
    document.cookie = `userName=;expires=` + new Date(2000, 0, 1).toUTCString();
    alert("Logged out successfully")
    document.cookie = `token=;expires=` + new Date(2000, 0, 1).toUTCString();
  };
  return (
    <>
      <img className="navImg" src={nav} alt="" />
      <div className="nav">
        <div className="div1">
          <ul>
            <Link to={"/login"}>
              {" "}
              <li>Login</li>
            </Link>
            <li onClick={handleLogout}>Logout</li>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/explore"}>
              <li>Explore</li>
            </Link>
            <Link to={"/form"}>
              <li>Add</li>
            </Link>
          </ul>
        </div>
        <div className="div2">
          <input
            type="text"
            className="searchBar"
            placeholder="Explore the Gadgets here..."
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
