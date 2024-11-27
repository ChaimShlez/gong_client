import { useState, useEffect, useContext } from "react";

import axios from "axios";
import { ActivitiesContext } from "../ActivitiesProvider";
import { CategoriesContext } from "../ActivitiesProvider";
import CreateActivitiesView from "./CreateActivities.view";

export default function CreateActivities({ setIsModalOpen }) {
  const [subCategories, setSubCategories] = useState([{ id: 0, name: "" }]);
  //const [categories, setCategories] = useState([{ id: 0, name: "" }]);
  const [isPurchaseUpdate, setIsPurchaseUpdate] = useState(true);
  const [isIncome, setIsIncome] = useState(false);
  const [incomes, setIncomes] = useState([{ id: 0, name: "" }]);
  const [category, setCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [storeName, setStoreName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [incomeManner, setIncomeManner] = useState("");
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const { activities, setActivities } = useContext(ActivitiesContext);
  const {categories, setCategories} = useContext(CategoriesContext);
  const token = sessionStorage.getItem("token")



  async function getCategories() {
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/categories`;
      let response = await axios.get(url,{
        headers: {
            Authorization: token
        },
      }
    );

      setCategories(response.data) 
     // setCategories(response.data);
     
      
    } catch (e) {
      console.error(e);
      // console.log("Failed to fetch categories, try again later");
    }
  }

  async function createActivity(type) {
    try {
      const payload =
        type === "הוצאה"
          ? {
              selectedSubCategory,
              category,
              price,
              storeName,
              paymentMethod,
            }
          : {
              incomeManner,
              incomeSource,
              incomeAmount,
            };
      const url = `${process.env.REACT_APP_SERVER_URL}/logs`
      const response = await axios.post(url,payload,{
        headers: {
            Authorization: token
        },
        }
      );
      setActivities(response.data);

      setIsModalOpen(false);
    } catch (e) {
      console.error(e);
      console.log("Failed to create activity, try again later " + e);
    }
  }

  useEffect(() => {
    getCategories();
    getIncomes();
  }, []);

  
  async function getIncomes() {
    console.log(token)
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/income`;
      let response = await axios.get(url,{
        headers: {
            Authorization: token,
        },
    });
      setIncomes(response.data);
    } catch (e) {
      console.error(e);
      // console.log("Failed to fetch incomes, try again later");
    }
  }

  async function clickedCategory(categoryId) {
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/categories/subCategory/${categoryId}`;
      let response = await axios.get(url,{
        headers: {
            Authorization: token, 
        },
    });
      setSubCategories(response.data);
    } catch (e) {
      console.error(e);
      // console.log("Failed to fetch subcategories, try again later");
    }
  }

  return (
    <CreateActivitiesView
      setIsPurchaseUpdate={setIsPurchaseUpdate}
      setIsIncome={setIsIncome}
      category={category}
      setCategory={setCategory}
      clickedCategory={clickedCategory}
      categories={categories}
      setSelectedSubCategory={setSelectedSubCategory}
      subCategories={subCategories}
      paymentMethod={paymentMethod}
      setPaymentMethod={setPaymentMethod}
      setIncomeSource={setIncomeSource}
      incomes={incomes}
      incomeManner={incomeManner}
      createActivity={createActivity}
      price={price}
      setPrice={setPrice}
      storeName={storeName}
      setStoreName={setStoreName}
      isPurchaseUpdate={isPurchaseUpdate}
      isIncome={isIncome}
      setIncomeManner={setIncomeManner}
      setIncomeAmount={setIncomeAmount}
      selectedSubCategory={selectedSubCategory}
      incomeAmount={incomeAmount}
      incomeSource={incomeSource}
    />
  );
}
