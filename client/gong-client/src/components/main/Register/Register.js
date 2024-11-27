import { useState } from "react";
import RegisterView from "./Register.view";
import axios from 'axios';

export default function Register(){
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState ('');
    const [name, setName] = useState('');
    const [phone,setPhone]=useState ('');

    async function registerClicked() {
        try {
               
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, {
                email,
                password,
                name,
                phone
            });
             console.log(response)


        } catch (e) {
            console.error(e);
            if (e.response?.data?.error?.message) {  
                console.log(e.response.data.error.message);
            } else {
                console.log("Register invalid, try later");
            }
        }
    }
   return(
   <RegisterView 
   email={email}
   setEmail={setEmail}
   password={password}
   setPassword={setPassword}
   name={name}
   setName={setName}
   phone={phone}
   setPhone={setPhone}
   registerClicked={registerClicked}
   />
   );
}