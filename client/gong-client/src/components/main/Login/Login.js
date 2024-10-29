
import {useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import LoginView from "./Login.view"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  

    function createUser(){
        navigate('/register')
    }

    async function loginClicked() {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, {email,password});
            console.log(response)
            let token = response.data.token;
            sessionStorage.setItem("token", "Bearer " + response.data.token);
            navigate("/userLog/activities")
            // axios.defaults.headers.common['Authorization'] = token;

        } catch (e) {
            console.error(e);
            if (e.response?.data?.error?.message) {  
                console.log(e.response.data.error.message);
            } else {
                console.log("Login invalid, try later");
            }
        }
    }

    return (
       <LoginView 
       email={email}
       setEmail={setEmail}
       password={password}
       setPassword={setPassword}
       createUser={createUser}
       loginClicked={loginClicked}
       />
    );
}

export default Login;
