import React from "react";
import './Menu.style.css'
import { RxActivityLog } from "react-icons/rx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWavePulse } from "@fortawesome/free-solid-svg-icons";


export default  function MenuView({
  activeButton,
  setActiveButton,
  
  handleButtonClick,
  
}) {
  
  return (
    <div>
      
      <div className="line-two">
        <button
          className={`button_nav_bar ${
            activeButton === "button1" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("button1", "מעקב פעולות")}
        >
          < RxActivityLog 
           style={{ width: "25px" }}/>
        </button>
        <button
          className={`button_nav_bar ${
            activeButton === "button2" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("button2", "מידע סטטי")}
        >
          Statics
        </button>
        <button
          className={`button_nav_bar ${
            activeButton === "button3" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("button3", "יצירת תקציב")}
        >
         <img className="icon" src="/icons/icon-budget.svg" alt="icon" />
        </button>
      </div>
      {/* <div className="line"></div> */}
    </div>
  );
}

;
