import React, { useEffect, useState } from "react";
import "./Body.css";
import axios from "axios";
import friend from "../friends.jpg";
import bg from "../newBg.png";
import Card from "./Card";
import airCannon from "../gadgets/air-cannon.png";
import anywhereDoor from "../gadgets/Anywhere-Door.png";
import copyMachine from "../gadgets/Copy-Machine.png";
import hopter from "../gadgets/Hopter.png";
import invisibleCape from "../gadgets/Invisible-Cape.png";

function Body() {
const [data,setData] = useState([])

  useEffect(() => {
    axios.get("https://asap-1-doremon-gadgets.onrender.com/test")
      .then((res) => {
        // console.log(res.data)
        setData(res.data)
      });
  }, []);
// console.log(data)
  return (
    <>
      <div>
        <img className="bgImg" src={bg} alt="" />
        <h1 className="head">DOREMON'S GADGETS!</h1>
        <img className="friends" src={friend} alt="" />
      </div>
      <div className="display">
        {data.map((ele,i)=>{
          return <Card key={i} props={ele}/>
        })}
      </div>
    </>
  );
}

export default Body;
