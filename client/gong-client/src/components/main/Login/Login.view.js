
import React from "react";
import './Login.style.css';
function LoginView ({email,setEmail,password,setPassword,createUser,loginClicked}) {

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

)}
export default LoginView;