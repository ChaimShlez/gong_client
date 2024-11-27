
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
            let url =`${process.env.REACT_APP_SERVER_URL}/users/login`
            const response = await axios.post(url, {email,password});
            let token = response.data.token;
            sessionStorage.setItem("token", "Bearer " + token);
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
