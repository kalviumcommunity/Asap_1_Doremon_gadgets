import React, { useEffect, useState } from "react";
import "./Body.css";
import axios from "axios";
import friend from "../friends.jpg";
import bg from "../newBg.png";
import Card from "./Card";
import Navbar from "./Navbar";

function Body() {
  const [data, setData] = useState([]);

  const Getdata = () => {
    useEffect(() => {
      axios
        .get("https://asap-1-doremon-gadgets-1.onrender.com/test")
        .then((res) => {
          setData(res.data);
        });
    }, []);
  };

  Getdata();

  return (
    <>
      <Navbar />
      <div>
        <img className="bgImg" src={bg} alt="" />
        <h1 className="head">DOREMON'S GADGETS!</h1>
        <img className="friends" src={friend} alt="" />
      </div>
      <div className="display">
        {data.map((ele, i) => {
          return <Card key={i} props={ele} />;
        })}
      </div>
    </>
  );
}

export default Body;
