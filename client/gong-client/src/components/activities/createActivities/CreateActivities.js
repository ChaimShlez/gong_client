import { useState, useEffect } from "react";
import './CreateActivities.css';
import axios from 'axios';

export default function CreateActivities() {
    
    const [categories, setCategories] = useState([{ id: 0, name: '' }]);
    const [category, setCategory] = useState("");
    const [revenueCategory, setrevenueCategory] = useState(null);
    const [subCategories, setSubCategories] = useState([{ id: 0, name: '' }]);
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
   // const [userID, setUserID] = useState("1");
    const [price, setPrice] = useState("");
    const [storeName, setStoreName] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

   
    useEffect(() => {
        getCategories();
    }, []);

    
    async function getCategories() {
        try {
            let url = `http://localhost:5000/categories`;
            let response = await axios.get(url);
            setCategories(response.data);
        } catch (e) {
            console.error(e);
            alert("Failed to fetch categories, try again later");
        }
    }

   
    async function clickedCategory(categoryId) {
        try {
            let url = `http://localhost:5000/categories/subCategory/${categoryId}`;
            
            let response = await axios.get(url);
            setSubCategories(response.data);
        } catch (e) {
            console.error(e);
            alert("Failed to fetch subcategories, try again later");
        }
    }

   
    async function createActivity() {
        
        try {
            const response = await axios.post("http://localhost:5000/logs", {
                
                selectedSubCategory,
                category,
               //revenueCategory,
                userID:1,
                price,
                storeName,
                paymentMethod
            });
            
            console.log(response);
        } catch (e) {
            console.error(e);
            alert("Failed to create activity, try again later " + e);
        }
    }

    return (
        <div className="CreateActivities">
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

                {/* Store Name Input */}
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
    );
}
