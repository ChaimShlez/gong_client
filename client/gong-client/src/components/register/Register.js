import { useState } from "react";
import './Register.css';
import axios from 'axios';

export default function Register(){
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState ('');
    const [name, setName] = useState('');
    const [phone,setPhone]=useState ('');

    async function registerClicked() {
        try {
            console.log(name);
            console.log(phone);
            const response = await axios.post("http://localhost:5005/users/register", {
                email,
                password,
                name,
                phone
            });
             console.log(response)


        } catch (e) {
            console.error(e);
            if (e.response?.data?.error?.message) {  
                alert(e.response.data.error.message);
            } else {
                alert("Register invalid, try later");
            }
        }
    }
   return(
    <div className='Register'>
    <div className="register-container">
        <form className="register-form">
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
            <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
            />
            <input type="button" className="btn" value="Register" onClick={registerClicked} />
        </form>
    </div>
</div>
   );
}