import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import BudgetsView from "./Budgets.view";

export default function Budget(){
const [budgets,setBudgets]= useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const token = sessionStorage.getItem("token");
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        async function getBudgets() {
            try {
                const url = `${process.env.REACT_APP_SERVER_URL}/budgets`;
                const response = await axios.get(url, {
                    headers: { Authorization: token },
                });
                //setBudgets(response?.data);
                setBudgets(Array.isArray(response?.data) ? response.data : []);

    
            } catch (e) {
                console.error("Failed to fetch budgets:", e);
            }
        }
        getBudgets();
    }, []);

    const columns = [
        "סך כל ההוצאה",
        "רשימת ההוצאות",
        "תאריך תקציב",
        "ערןך"
    
    ];

    return(
        <BudgetsView
        budgets={budgets}
        columns={columns}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        />
    );
}


