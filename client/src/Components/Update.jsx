import React from "react";
import Navbar from "./Navbar";
import "./Update.css";

function Update() {
  return (
    <>
      <Navbar />
      <div className="box">
        <h2>Let's Update Gadgets here🌟</h2>
        <label>
          Gadget Name:{" "}
          <div className="inbox">
            <input className="inputupdate" type="text" />
          </div>
        </label>
        <label>
          Description:{" "}
          <div className="inbox">
            <input className="inputupdate" type="text" />
          </div>
        </label>
        <label>
          Category:{" "}
          <div className="inbox">
            <input className="inputupdate" type="text" />
          </div>
        </label>
        <label>
          Gadget Image:
          <div className="inbox">
            <input className="inputupdate" type="text" />
          </div>
        </label>
        <button className="save">Save</button>
      </div>
    </>
  );
}

export default Update;
