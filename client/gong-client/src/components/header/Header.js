import { useState, useEffect } from "react"
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from './logo.webp';

import { ReactComponent as MoneyWallet } from "../../assets/money_wallet.svg"



export default function Header() {
    const [currentComponent, setCurrentComponent] = useState("מעקב פעולות")
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId, component) => {
        setCurrentComponent(component);
        setActiveButton(activeButton === buttonId ? null : buttonId);
    };


useEffect(() => {
if(currentComponent === "מעקב פעולות"){
    navigate("/userLog/activities")
    setActiveButton("button1")
}else {
    navigate("/userLog/statics")
    setActiveButton("button2")
}
}, [currentComponent])

    return (
        <div>
            <div className='line-one'> 
                 <div className='inside-line-one'>  
                   <span className="logo1">כסף </span> 
                    <span className="logo2">חכם</span> 
                     <MoneyWallet style={{width:"24px",marginTop: "18px",marginRight:"5px"}}/>
            </div>
            <div>
                <button style ={{marginTop: "18px"}} className='button'>הוסף</button>
             </div>
            </div>
         
            <div className='line-two'>
                 <button  
                 className={`button_nav_bar ${activeButton === 'button1' ? 'active' : 'inactive'}`}
                  onClick={() => handleButtonClick('button1',"מעקב פעולות")} >מעקב פעולות </button>
                 <button  
                 className={`button_nav_bar ${activeButton === 'button2' ? 'active' : 'inactive'}`} 
                 onClick={() => handleButtonClick('button2',"צידע סטטי")}>Statics</button>     
            </div>  
            <div class="line"></div>    
        </div>
    );
}
