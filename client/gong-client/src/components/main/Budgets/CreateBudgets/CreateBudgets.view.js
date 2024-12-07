import React from "react";
import "./CreateBudgets.style.css";

function CreateBudgetsView({
    sumBudgets,
    remainingAmount,
    calculateBudgets,
    categories,
    setDate,
    budgetUpdates,
    handleBudgetUpdate,
    createBudgets,
}) {
    return (
        <div className="budgets-container">
            <h2 className="budget-title">תקציב חודשי</h2>

            <div className="income-box">
                <div className="income-total">
                    <span>סך הכנסות: </span>
                    <strong>₪{sumBudgets[0]?.total_income || 0}</strong>
                </div>
                <div className="income-remaining">
                    <span>תקציב זמין: </span>
                    <strong>₪{remainingAmount}</strong>
                </div>
                <div className="month-number">
                <input type="date" className="filter-date-button" 
                        onChange={(e) => setDate(e.target.value)}
                        />
                </div>
            </div>
            <div className="categories-list">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <div className="category-info">
                            <span className="category-name">{category.name}</span>
                        </div>
                        <div className="category-update">
                            <input
                                type="number"
                                placeholder="הכנס תקציב צפוי"
                                value={budgetUpdates[category.name] || ''}
                                onChange={(e) =>
                                    handleBudgetUpdate(category.name, e.target.value)
                                }
                                onBlur={(e) => calculateBudgets(e.target.value)}
                                className="budget-input"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="update-budget-btn"
                onClick={() =>createBudgets()}
                
            >
                עדכן תקציב
            </button>
        </div>
    );
}

export default  CreateBudgetsView;
