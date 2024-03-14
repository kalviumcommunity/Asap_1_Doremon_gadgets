import React, { useEffect, useState } from "react";
import Body from "./Body";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users,setUsers] = useState("")
  const navigate = useNavigate();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (userName.trim() === "" || password.trim() === "") {
      alert("Username and password are required.");
      return;
    }

    navigate("/");
    console.log(userName, password);
    document.cookie =
      `userName=${userName};expires=` + new Date(2030, 0, 1).toUTCString();
      alert("You have Login in successfully!")
      let filteredData = users.filter((el)=>{
        return el.user === userName
      })
      if(filteredData.length > 0){
        localStorage.setItem("users",userName)
      }
      else{
      axios.post("http://localhost:3000/auth",{userName:userName})
      .then((res)=>{
        // console.log(res.data.token)
        document.cookie =
        `token=${res.data.token};expires=` + new Date(2030, 0, 1).toUTCString();
        localStorage.setItem("users",userName)
      })}
  };

  useEffect(()=>{
    axios.get("http://localhost:3000/user")
    .then((res)=>{
      console.log(res)
      setUsers(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  },[])

  return (
    <>
      <Navbar />
      <form className="loginPage">
        <label>
          Enter your Name:
          <input
            className="page"
            type="text"
            placeholder="enter your valid name"
            value={userName}
            onChange={handleUserNameChange}
          />
        </label>
        <label>
          Enter the Password:
          <input
            className="page"
            type="password"
            placeholder="enter a valid password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="loginBtn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
