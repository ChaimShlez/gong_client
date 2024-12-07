
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MenuView from "./Mneu.view";

export default function Nemu() {
    const [currentComponent, setCurrentComponent] = useState("מעקב פעולות");
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);


    const handleButtonClick = (buttonId, component) => {
        setCurrentComponent(component);
        setActiveButton(activeButton === buttonId ? null : buttonId);
        if (component === "מעקב פעולות") {
            navigate("/userLog/activities");
        } else if (component === "מידע סטטי") {
            navigate("/userLog/statics");
        }
        else {
            navigate("/budgets");
        }
    };
    return (
        <MenuView
            activeButton={activeButton}
            setActiveButton={setActiveButton}

            handleButtonClick={handleButtonClick}
        />
    );

}