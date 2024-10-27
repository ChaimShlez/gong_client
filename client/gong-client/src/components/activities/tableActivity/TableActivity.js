import React, { useEffect, useContext } from "react";
import "./TableActivity.css";
import axios from 'axios';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
//import { ActivitiesProvider } from '../ActivitiesProvider';
import { ActivitiesContext } from '../ActivitiesProvider';


const TableActivity = () => {
    const { activities, setActivities } = useContext(ActivitiesContext);  // Access activities from context

    useEffect(() => {
        async function getActivities() {
            try {
                let url = `http://localhost:5000/logs/1`;
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
                                    <FaArrowUp style={{ color: "red", marginRight: "5px" }} />
                                ) : (
                                    <FaArrowDown style={{ color: "green", marginRight: "5px" }} />
                                )}
                            </td>
                            <td>{activity.price}</td>
                            <td>{activity.payment_method}</td>
                            <td>{activity.store_name}</td>
                            <td>{activity.revenue_category}</td>
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
