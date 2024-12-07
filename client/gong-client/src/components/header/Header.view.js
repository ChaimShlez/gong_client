import React from "react";
import { ReactComponent as MoneyWallet } from "../../assets/money_wallet.svg";
import CreateActivities from "../main/Activities/CreateActivities/CreateActivities.js";
import "./Header.style.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

function HeaderView({
  
}) {
  return (
    <div className="Header">
      <div className="line-one">
        <div className="inside-line-one">
          <span className="logo1">כסף </span>
          <span className="logo2">חכם</span>
          <MoneyWallet
            style={{ width: "24px", marginTop: "18px", marginRight: "5px" }}
          />
        </div>
      </div>
      
     
    </div>
  );
}

export default HeaderView;
