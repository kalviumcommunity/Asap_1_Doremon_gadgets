import React from "react"
import "./Body.css"
import friend from "../friends.jpg"
import bg from "../newBg.png"
import airCannon from "../gadgets/air-cannon.png"
import anywhereDoor from "../gadgets/Anywhere-Door.png"
import copyMachine from "../gadgets/Copy-Machine.png"
import hopter from "../gadgets/Hopter.png"
import invisibleCape from "../gadgets/Invisible-Cape.png"

function Body() {
  
  
  return (
    <>
    <div>
      <img className="bgImg" src={bg} alt="" />
      <h1 className="head">DOREMON'S GADGETS!</h1>
      <img className="friends" src={friend} alt="" />
    </div>
    <div className="display">
    <div className="row1">
      <div id="divi"><img width={250}px src={airCannon} alt="" />
      <h2>Air Cannon</h2></div>
      <div id="divi"><img width={250}px src={anywhereDoor} alt="" />
      <h2>Anywhere Door</h2></div>
      <div id="divi"><img width={250}px src={copyMachine} alt="" />
      <h2>Copy Machine</h2></div>
    </div>
    <div className="row2">
      <div id="divi"><img width={250}px src={hopter} alt="" />
      <h2>Hopter</h2></div>
      <div id="divi"><img width={250}px src={invisibleCape} alt="" />
      <h2>Invisible Cape</h2></div>
      <div id="divi"><img width={250}px src={copyMachine} alt="" />
      <h2>Copy Machine</h2></div>

    </div>
    </div>
    </>
  )
}

export default Body