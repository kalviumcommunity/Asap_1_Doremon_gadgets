import React, { useState } from "react";
import "./Form.css";
import Navbar from "./Navbar";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");

  const PostData = async () => {
    try {
      const newGadget = {
        name: name,
        category: category,
        img: img,
        des: des,
      };

      const res = await axios
        .post("http://localhost:3000/post", newGadget)
        .then((res) => {
          console.log(res);
        });
      console.log("Data posted successfully!", res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="cont">
        <h2>🌟Add the Gadgets here!🪄</h2>
        <input
          className="inp"
          type="text"
          placeholder="Enter Gadget name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inp"
          type="text"
          placeholder="Enter Gadget description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
        <input
          className="inp"
          type="text"
          placeholder="Enter the Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="inp"
          type="text"
          placeholder="Enter the image url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button className="submit" onClick={PostData}>
          submit
        </button>
      </div>
    </>
  );
};

export default Form;
