import React, { useState } from 'react';
import Body from './Body';
import "./Login.css";
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
     const navigate = useNavigate()

    const handleUserNameChange = (event) => {

        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault()
        navigate('/')
        console.log(userName,password)
        document.cookie = `userName=${userName};expires=` +new Date(2030,0,1).toUTCString
    };

    return (
        <>
            <Navbar />
            <form className='loginPage'>
                <label>Enter your Name:
                    <input
                        className='page'
                    
                        type="text"
                        placeholder='enter your valid name'
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                </label>
                <label>Enter the Password:
                    <input
                 
                        className='page'
                        type="password"
                        placeholder='enter a valid password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button className='loginBtn' onClick={handleLogin}>Login</button>
            </form>
        </>
    );
}

export default Login;
