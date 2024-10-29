import React from "react"
import "./TableActivity.style.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function TableActivityView ({
    columns,
    activities
}) {
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
                                {activity.revenue_name === null ? "הוצאה" : "הכנסה"}
                                {activity.revenue_name === null ? (
                                    <FaArrowUp style={{ color: "red", marginRight: "5px" }} />
                                ) : (
                                    <FaArrowDown style={{ color: "green", marginRight: "5px" }} />
                                )}
                            </td>
                            <td>{activity.price}</td>
                            <td>{activity.payment_method}</td>
                        {activity.revenue_name===null?<td>{activity.store_name}</td>
                        :  <td>{activity.revenue_name}</td>}
                            
                          
                            <td>{activity.user_name}</td>
                            <td>{activity.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
)
}
export default TableActivityView 