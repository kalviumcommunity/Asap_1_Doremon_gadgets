import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Update.css";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Update(props) {
  const navigate = useNavigate();
  const [gadgetData, setGadgetData] = useState({
    name: "",
    des: "",
    category: "",
    image: "",
    user: localStorage.getItem("users")
  });

  const { id } = useParams();
  console.log(id);
  const handleUpdate = () => {
    console.log(gadgetData);
    try {
      axios
        .put(`http://localhost:3000/update/${id}`, gadgetData)
        .then((res) => {
          console.log(res);
        });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGadgetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="box">
        <h2>Let's Update Gadgets here🌟</h2>
        <label>
          Gadget Name:{" "}
          <div className="inbox">
            <input
              className="inputupdate"
              type="text"
              name="name"
              value={gadgetData.name}
              onChange={handleChange}
            />
          </div>
        </label>
        <label>
          Description:{" "}
          <div className="inbox">
            <input
              className="inputupdate"
              type="text"
              name="des"
              value={gadgetData.des}
              onChange={handleChange}
            />
          </div>
        </label>
        <label>
          Category:{" "}
          <div className="inbox">
            <input
              className="inputupdate"
              type="text"
              name="category"
              value={gadgetData.category}
              onChange={handleChange}
            />
          </div>
        </label>
        <label>
          Gadget Image:
          <div className="inbox">
            <input
              className="inputupdate"
              type="text"
              name="image"
              value={gadgetData.image}
              onChange={handleChange}
            />
          </div>
        </label>
        <button className="save" onClick={handleUpdate}>
          Save
        </button>
      </div>
    </>
  );
}

export default Update;
