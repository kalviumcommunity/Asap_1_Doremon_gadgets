import React from "react";
import "./Card.css";
import {Link} from "react-router-dom"

const Card = (props) => {
  console.log(props)
  return (
    <div className="contain">
      <div id="card">
      <div className="cards">
        <img className="images" width={315} src={props.img} alt="" />

        <h2>{props.name}</h2>
        <p>{props.des}</p>
        <h3 className="sub">Category : {props.category}</h3>
        <div className="btns">
        <Link to={"/update"}><button className="update">Update</button></Link>
        <button className="delete">Delete</button>
        </div>
        <br />
        <br />
        <br />
      </div>
      </div>
    </div>
  );
};

export default Card;
