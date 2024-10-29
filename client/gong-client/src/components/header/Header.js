
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


import HeaderView from "./Header.view.js"






export default function Header() {
    const [currentComponent, setCurrentComponent] = useState("מעקב פעולות");
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = (buttonId, component) => {
        setCurrentComponent(component);
        setActiveButton(activeButton === buttonId ? null : buttonId);
        if (component === "מעקב פעולות") {
            navigate("/userLog/activities");
        } else {
            navigate("/userLog/statics");
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
     <HeaderView 
     activeButton={activeButton}
     setActiveButton={setActiveButton}
     isModalOpen={isModalOpen}
     setIsModalOpen={setIsModalOpen}
     handleButtonClick={handleButtonClick}
     openModal={openModal}
     closeModal={closeModal}
     />
    );
}
