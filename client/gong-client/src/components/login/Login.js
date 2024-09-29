
import {useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  


    function createUser(){
        navigate('/register')
    }

    async function loginClicked() {
        try {
            const response = await axios.post("http://localhost:5000/users/login", {
                email,
                password
            });
             console.log(response)
            let token = response.data;
            localStorage.setItem('token', token);
            navigate("/userLog/activities")
            
            //let successfulLoginData = JSON.parse(strSuccessfulLoginData);

           // console.log(successfulLoginData);

            axios.defaults.headers.common['Authorization'] = token;

        } catch (e) {
            console.error(e);
            if (e.response?.data?.error?.message) {  
                alert(e.response.data.error.message);
            } else {
                alert("Login invalid, try later");
            }
        }
    }

    return (
        <div className='Login'>
            <div className="login-container">
                <form className="login-form">
                    <h2>Welcome to Gong!</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input type="button" className="btn" value="Login" onClick={loginClicked} />
                    <div className="login-register">
                            <p>                                
                                <div className="link" onClick={() => createUser()} >Don't have an account?</div>
                            </p>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
