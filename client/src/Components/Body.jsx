// Body.jsx
import React, { useEffect, useState } from "react";
import "./Body.css";
import axios from "axios";
import friend from "../friends.jpg";
import bg from "../newBg.png";
import Card from "./Card";
import Navbar from "./Navbar";

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/test").then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <img className="bgImg" src={bg} alt="" />
        <h1 className="head">DOREMON'S GADGETS!</h1>
        <img className="friends" src={friend} alt="" />
      </div>
      <div className="display">
        {data.map((ele, i) => (
          <Card key={i} {...ele} fetchData={fetchData} />
        ))}
      </div>
    </>

    
);
}

export default Body;
