import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import CreateBudgetsView from "./CreateBudgets.view.js";
import { CategoriesContext } from "../../Activities/ActivitiesProvider.js";
import { useNavigate } from 'react-router-dom';

const CreateBudgets = () => {
    const [sumBudgets, setSumBudgets] = useState([]);
    const [remainingAmount, setRemainingAmount] = useState(0);
    const { categories, setCategories } = useContext(CategoriesContext);
    const [date ,setDate] =useState(""); 
    const [isExsist,setIsExsist]= useState(Boolean)
    const [budgetUpdates, setBudgetUpdates] = useState({});
    const [sumCurrentBudgets, setCurrentSumBudgets] = useState(0);
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();


    

    useEffect(() => {
        async function getCategories() {
            try {
                const url = `${process.env.REACT_APP_SERVER_URL}/categories`;
                const response = await axios.get(url, {
                    headers: { Authorization: token },
                });
                setCategories(response.data);
            } catch (e) {
                console.error("Failed to fetch categories:", e);
            }
        }
        getCategories();
    }, [token]);

    useEffect(() => {
        async function getSumIncome() {
            try {
                const url = `${process.env.REACT_APP_SERVER_URL}/budgets/sumIncome`;
                const response = await axios.get(url, {
                    headers: { Authorization: token },
                });
                setSumBudgets(response.data);
                setRemainingAmount(response.data[0]?.total_income || 0);

            } catch (e) {
                console.error("Failed to fetch budgets:", e);
            }
        }
        getSumIncome();
    }, []);

    function calculateBudgets(expense) {
        const expenseAmount = Number(expense);
        const newRemaining = remainingAmount - expenseAmount;

        setRemainingAmount(newRemaining);

    };

    const handleBudgetUpdate = (category, amount) => {
        console.log(budgetUpdates)
        setBudgetUpdates((prev) => ({
            ...prev,
            [category]: Number(amount),

        }));
        setCurrentSumBudgets((prevSum) => prevSum + Number(amount));

    };

    async function createBudgets() {
        try {
            const payload = {
                budgetUpdates,
                sumCurrentBudgets,
                date,
            };
    
          
            const url1 = `${process.env.REACT_APP_SERVER_URL}/budgets/isExsist/${date}`;
            const response = await axios.get(url1, {
                headers: { Authorization: token },
            });
    
            console.log("Response from /isExsist:", response.data);
    
            
            if ( response.data.isExsist === 1) {
                alert("היצירה כבר התרחשה, תוכל רק לעדכן את התקציב");
                console.log("היצירה כבר התרחשה, תוכל רק לעדכן את התקציב");
                return;
            }
    
         
            const url = `${process.env.REACT_APP_SERVER_URL}/budgets`;
            await axios.post(url, payload, {
                headers: { Authorization: token },
            });
    
            navigate("/budgets");
        } catch (e) {
            console.error("Failed to create budgets:", e);
        }
    }
    
    
    return (
        <CreateBudgetsView
            sumBudgets={sumBudgets}
            remainingAmount={remainingAmount}
            calculateBudgets={calculateBudgets}
            categories={categories}
            setDate={setDate}
            budgetUpdates={budgetUpdates}
            handleBudgetUpdate={handleBudgetUpdate}
            createBudgets={createBudgets}
        />
    );
};

export default CreateBudgets;
