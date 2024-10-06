
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'; // Import Modal from react-modal
import './Header.css';
import { ReactComponent as MoneyWallet } from "../../assets/money_wallet.svg";
import CreateActivities from "../activities/createActivities/CreateActivities";

const customStyles = {
    content: {
        top: '30%',
        left: '14%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        height: '65%',
        width: '25%',
       
    },
};

Modal.setAppElement('#root');

export default function Header() {
    const [currentComponent, setCurrentComponent] = useState("מעקב פעולות");
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = (buttonId, component) => {
        setCurrentComponent(component);
        setActiveButton(activeButton === buttonId ? null : buttonId);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (currentComponent === "מעקב פעולות") {
            navigate("/userLog/activities");
            setActiveButton("button1");
        } else {
            navigate("/userLog/statics");
            setActiveButton("button2");
        }
    }, [currentComponent]);

    return (
        <div>
            <div className='line-one'>
                <div className='inside-line-one'>
                    <span className="logo1">כסף </span>
                    <span className="logo2">חכם</span>
                    <MoneyWallet style={{ width: "24px", marginTop: "18px", marginRight: "5px" }} />
                </div>
                <div>
                    <button style={{ marginTop: "18px" }} className='button' onClick={openModal}>הוסף</button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
                <CreateActivities />
            </Modal>
            <div className='line-two'>
                <button
                    className={`button_nav_bar ${activeButton === 'button1' ? 'active' : 'inactive'}`}
                    onClick={() => handleButtonClick('button1', "מעקב פעולות")}>מעקב פעולות</button>
                <button
                    className={`button_nav_bar ${activeButton === 'button2' ? 'active' : 'inactive'}`}
                    onClick={() => handleButtonClick('button2', "צידע סטטי")}>Statics</button>
            </div>
            <div className="line"></div>
        </div>
    );
}
