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
  const [currentUsers, setCurrentUsers] = useState("All");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
    axios
      .get("https://asap-1-doremon-gadgets-3.onrender.com/user")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUsers]);

  const fetchData = () => {
    axios
      .get("https://asap-1-doremon-gadgets-3.onrender.com/test")
      .then((res) => {
        let filteredData =
          currentUsers === "All"
            ? res.data
            : res.data.filter((ele) => {
                return ele.user === currentUsers;
              });
        setData(filteredData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(data , "data")
  return (
    <>
      <Navbar />
      <div>
        <img className="bgImg" src={bg} alt="" />
        <h1 className="head">DOREMON'S GADGETS!</h1>
        <select name="Usernames" id="drop" onChange={(e)=>{setCurrentUsers(e.target.value)}}>
          <option value="All">All</option>
          {users.map((ele, index) => {
            return (
              <option key={index} value={ele.user}>
                {ele.user}
              </option>
            );
          })}
        </select>
        <img className="friends" src={friend} alt="" />
      </div>
      <div className="display">
        {data.length == 0 ? "No Data Found" : data.map((ele, i) => (
          <Card key={i} {...ele} fetchData={fetchData} />
        ))}
      </div>
    </>
  );
}

export default Body;
