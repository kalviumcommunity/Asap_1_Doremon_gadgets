import "./Navbar.css"
import React from 'react'

const nav = "./src/navImg.gif"
function Navbar() {
    
  return (
  <>
  <img className="navImg" src={nav} alt="" />
  <div className="nav">
    <div className="div1">
    <ul>
        <li>Home</li>
        <li>Gadgets</li>
        <li>Explore</li>
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