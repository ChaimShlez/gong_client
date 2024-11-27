import React, { useEffect, useState, useContext} from "react";
import axios from 'axios';
import BudgetsView from "./Budgets.view.js";
import { CategoriesContext } from "../Activities/ActivitiesProvider.js";
import {useNavigate } from 'react-router-dom';

const Budgets = () => {
    const [sumBudgets, setSumBudgets] = useState([]);
    const [remainingAmount, setRemainingAmount] = useState(0);
    const { categories, setCategories } = useContext(CategoriesContext);
    const [budgetUpdates, setBudgetUpdates] = useState({});
    const [ sumCurrentBudgets,setCurrentSumBudgets]=useState(0);
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
        async function getBudgets() {
            try {
                const url = `${process.env.REACT_APP_SERVER_URL}/budgets`;
                const response = await axios.get(url, {
                    headers: { Authorization: token },
                });
                setSumBudgets(response.data);
                setRemainingAmount(response.data[0]?.total_income || 0);
                
            } catch (e) {
                console.error("Failed to fetch budgets:", e);
            }
        }
        getBudgets();
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
        console.log(budgetUpdates)
        console.log(sumCurrentBudgets)
        try {
            const payload = {
                budgetUpdates,
                sumCurrentBudgets
            };
            const url = `${process.env.REACT_APP_SERVER_URL}/budgets`;
            await axios.post(url, payload, {
                headers: { Authorization: token },
            });
            navigate("/userLog/activities")
        } catch (e) {
            console.error("Failed to create budgets:", e);
        }
    }

    return (
        <BudgetsView
            sumBudgets={sumBudgets}
            remainingAmount={remainingAmount}
            calculateBudgets={calculateBudgets}
            categories={categories}
            budgetUpdates={budgetUpdates}
            handleBudgetUpdate={handleBudgetUpdate}
            createBudgets={createBudgets}
        />
    );
};

export default Budgets;
