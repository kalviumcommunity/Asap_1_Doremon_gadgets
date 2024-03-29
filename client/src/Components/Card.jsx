// Card.jsx
import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = (props) => {
  const handleDelete = () => {
    axios
      .delete(`https://asap-1-doremon-gadgets-3.onrender.com/delete/${props._id}`)
      .then((res) => {
        console.log(res);
        props.fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cards">
      <img className="images" width={315} src={props.img} alt="" />

      <h2>{props.name}</h2>
      <p>{props.des}</p>
      <h3 className="sub">Category: {props.category}</h3>
      <div className="btns">
        <Link to={`/update/${props._id}`}>
          <button className="update">Update</button>
        </Link>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Card;
