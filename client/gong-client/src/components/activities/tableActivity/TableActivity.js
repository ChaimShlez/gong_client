import React, { useEffect, useState } from "react";
import "./TableActivity.css";
import axios from 'axios';
import { ReactComponent as ArrowDown } from "../../../assets/red-arrow-down.svg";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";


const TableActivity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getActivities() {
      try {
        let url = `http://localhost:5000/logs/3`;
        let response = await axios.get(url);
        setActivities(response.data);
      } catch (e) {
        console.error(e);
        alert("Failed to fetch activities, try again later");
      }
    }

    getActivities();
  }, []);

  const columns = [
    "הוצאה/הכנסה",
    "עלות",
    "צורת תשלום",
    "תיאור",
    "הבעל/האשה",
    "תאריך",
  ];
  // const renderArrow = (type) => {
  //   console.log(type === "expenditure");
  //   if (type === "expenditure") {
  //   return <ArrowDown style={{ width: "20px" }} />;
  //   } else {
  //   return <span style={{ color: "green" }}>⬇️</span>;
  //   }
  //   };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>
                {activity.revenue_category === null ? "הוצאה" : "הכנסה"}
                {activity.revenue_category === null ? (
                  <FaArrowUp
                    style={{
                      color: "red",
                      transform: "translateY(3px)",
                      marginRight: "5px",
                    }}
                  />
                ) : (
                  <FaArrowDown
                    style={{
                      color: "green",
                      transform: "translateY(3px)",
                      marginRight: "5px",
                    }}
                  />
                )}
              </td>
              <td>{activity.price}</td>
              <td>{activity.payment_method}</td>
              <td>{activity.store_name}</td>
              <td>{activity.user_name}</td>
              <td>{activity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableActivity;
