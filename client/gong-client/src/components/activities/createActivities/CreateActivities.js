import { useState, useEffect, useContext } from "react";
import './CreateActivities.css';
import axios from 'axios';
import { ActivitiesProvider } from '../ActivitiesProvider';
  import { ActivitiesContext } from '../ActivitiesProvider';

export default function CreateActivities({ setIsModalOpen }) {
    const [subCategories, setSubCategories] = useState([{ id: 0, name: '' }]);
    const [categories, setCategories] = useState([{ id: 0, name: '' }]);
    const [isPurchaseUpdate, setIsPurchaseUpdate] = useState(true);
    const [isIncome, setIsIncome] = useState(false);
    //const [categories, setCategories] = useState([{ id: 0, name: '' }]);
    const [incomes, setIncomes] = useState([{ id: 0, name: '' }]);
    const [category, setCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [price, setPrice] = useState("");
    const [storeName, setStoreName] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [incomeManner, setIncomeManner] = useState("");
    const [incomeSource, setIncomeSource] = useState("");
    const [incomeAmount, setIncomeAmount] = useState("");
    const { activities, setActivities } = useContext(ActivitiesContext);  // Access activities from context

    useEffect(() => {
        getCategories();
        getIncomes();
    }, []);

    async function getCategories() {
        try {
            let url = `http://localhost:5005/categories`;
            let response = await axios.get(url);
            setCategories(response.data);
        } catch (e) {
            console.error(e);
            alert("Failed to fetch categories, try again later");
        }
    }

    async function getIncomes() {
        try {
            let url = `http://localhost:5005/income`;
            let response = await axios.get(url);
            console.log(response)
            setIncomes(response.data);
        } catch (e) {
            console.error(e);
            alert("Failed to fetch incomes, try again later");
        }
    }

    async function clickedCategory(categoryId) {
        try {
            let url = `http://localhost:5005/categories/subCategory/${categoryId}`;
            let response = await axios.get(url);
            setSubCategories(response.data);
        } catch (e) {
            console.error(e);
            alert("Failed to fetch subcategories, try again later");
        }
    }

    async function createActivity() {
        try {
            const response = await axios.post("http://localhost:5005/logs", {
                selectedSubCategory,
                category,
                userID: 2,
                price,
                storeName,
                paymentMethod
            });
            console.log(response)
            setActivities(response.data); 
            setIsModalOpen(false);
        } catch (e) {
            console.error(e);
            alert("Failed to create activity, try again later " + e);
        }
    }

    async function createExpense() {
        try {
            const response = await axios.post("http://localhost:5005/logs/income", {
                userID: 1,
                incomeManner,
                incomeSource,
                incomeAmount
            });
            setActivities([...activities, response.data]);  
            setIsModalOpen(false);
        } catch (e) {
            console.error(e);
            alert("Failed to create income, try again later " + e);
        }
    }

    


    return (
        
        <div className="CreateActivities">
            <div >
                <button className="buttons-option" onClick={() => { setIsPurchaseUpdate(true); setIsIncome(false); }}>הוצאה</button>
                <button className="buttons-option" onClick={() => { setIsIncome(true); setIsPurchaseUpdate(false); }}>הכנסה</button>
            </div>
            
            {isPurchaseUpdate && (
                <div>
                    <div className="header">
                        <h6>עדכון רכישה</h6>
                    </div>
                    <div className="container-modal">
                        <div className="input-box">
                            <label>קטגוריה</label>
                            <select 
                                value={category} 
                                onChange={(e) => {
                                    const selectedCategoryId = e.target.value;
                                    setCategory(selectedCategoryId);
                                    clickedCategory(selectedCategoryId); 
                                }}
                                required
                            >
                                <option value="" disabled>בחר קטגוריה</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <label>תת קטגוריה</label>
                            <select 
                                value={selectedSubCategory} 
                                onChange={(e) => setSelectedSubCategory(e.target.value)} 
                                required
                            >
                                <option value="" disabled>בחר תת קטגוריה</option>
                                {subCategories.map((subCat) => (
                                    <option key={subCat.id} value={subCat.id}>
                                        {subCat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <label>מחיר</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>שם-חנות</label>
                            <input
                                type="text"
                                value={storeName}
                                onChange={(e) => setStoreName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>אופן-תשלום</label>
                            <input
                                type="text"
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            />
                        </div>
                        <button className="button-save" onClick={createActivity}>שמור</button>
                    </div>
                </div>
            )}
    
            {isIncome && (
                <div>
                    <div className="header">
                        <h6>עדכון הכנסה</h6>
                    </div>
                    <div className="container-modal">
                        <div className="input-box">
                            <label>סכום הכנסה</label>
                            <input
                                type="text"
                                value={incomeAmount}
                                onChange={(e) => setIncomeAmount(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                <label>מקור הכנסה</label>
                <select 
                    value={incomeSource} 
                    onChange={(e) => setIncomeSource(e.target.value)} 
                    required
                >
                    <option value="" disabled>בחר מקור הכנסה</option>
                    {incomes.map((income) => (
                        <option key={income.id} value={income.id}>
                            {income.name}
                        </option>
                    ))}
                </select>
            </div>
                        <div className="input-box">
                            <label>אופן הכנסה</label>
                            <input
                                type="text"
                                value={incomeManner}
                                onChange={(e) => setIncomeManner(e.target.value)}
                                required
                            />
                        </div>
                        <button className="button-save" onClick={createExpense}>שמור</button>
                    </div>
                </div>
            )}
        </div>
    );
}    