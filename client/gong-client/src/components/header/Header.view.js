import React from "react";
import { ReactComponent as MoneyWallet } from "../../assets/money_wallet.svg";
import CreateActivities from "../main/Activities/CreateActivities/CreateActivities.js";
import "./Header.style.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

function HeaderView({
  activeButton,
  setActiveButton,
  isModalOpen,
  setIsModalOpen,
  handleButtonClick,
  openModal,
  closeModal,
}) {
  const customStyles = {
    content: {
      top: "30%",
      left: "14%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#8fb1de",
      height: "50%",
      width: "25%",
      border: "2px solid #006dff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      opacity: "0.95",
    },
  };
  return (
    <div>
      <div className="line-one">
        <div className="inside-line-one">
          <span className="logo1">כסף </span>
          <span className="logo2">חכם</span>
          <MoneyWallet
            style={{ width: "24px", marginTop: "18px", marginRight: "5px" }}
          />
        </div>
        <div>
          <button
            style={{ marginTop: "18px" }}
            className="button"
            onClick={openModal}
          >
            הוסף
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CreateActivities setIsModalOpen={setIsModalOpen} />
      </Modal>
      <div className="line-two">
        <button
          className={`button_nav_bar ${
            activeButton === "button1" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("button1", "מעקב פעולות")}
        >
          מעקב פעולות
        </button>
        <button
          className={`button_nav_bar ${
            activeButton === "button2" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("button2", "צידע סטטי")}
        >
          Statics
        </button>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default HeaderView;
