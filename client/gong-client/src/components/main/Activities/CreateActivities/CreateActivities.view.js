import React from "react";
import "./CreateActivities.style.css";

function CreateActivitiesView({
  setIsPurchaseUpdate,
  setIsIncome,
  category,
  setCategory,
  clickedCategory,
  categories,
  setSelectedSubCategory,
  subCategories,
  paymentMethod,
  setPaymentMethod,
  setIncomeSource,
  incomes,
  incomeManner,
  createActivity,
  price,
  setPrice,
  storeName,
  setStoreName,
  isPurchaseUpdate,
  isIncome,
  setIncomeManner,
  setIncomeAmount,
  selectedSubCategory,
  incomeAmount,
  incomeSource,
}) {
  return (
    <div className="CreateActivities">
      <div>
        <button
          className="buttons-option"
          onClick={() => {
            setIsPurchaseUpdate(true);
            setIsIncome(false);
          }}
        >
          הוצאה
        </button>
        <button
          className="buttons-option"
          onClick={() => {
            setIsIncome(true);
            setIsPurchaseUpdate(false);
          }}
        >
          הכנסה
        </button>
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
                <option value="" disabled>
                  בחר קטגוריה
                </option>
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
                <option value="" disabled>
                  בחר תת קטגוריה
                </option>
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
            <button
              className="button-save"
              onClick={() => createActivity("הוצאה")}
            >
              שמור
            </button>
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
                <option value="" disabled>
                  בחר מקור הכנסה
                </option>
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
            <button
              className="button-save"
              onClick={() => createActivity("הכנסה")}
            >
              שמור
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default CreateActivitiesView;
