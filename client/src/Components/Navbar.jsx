import "./Navbar.css"
import React from 'react'
import nav from "../navImg.gif"
import { Link } from "react-router-dom"
function Navbar() {
    
  return (
  <>
  <img className="navImg" src={nav} alt="" />
  <div className="nav">
    <div className="div1">
    <ul>
       <Link to={"/"}> <li>Home</li></Link>
        <li>Gadgets</li>
        <li>Explore</li>
        <Link to={"/form"}><li>Add</li></Link>
    </ul> 
    </div>
    <div className="div2">
  <input type="text" className="searchBar" placeholder="Explore the Gadgets here..."/>
    </div>
  </div>
  </>
  )
}

export default Navbar