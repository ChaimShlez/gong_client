import React, { useEffect, useContext } from "react";
import axios from 'axios';
import TableActivityView from "./TableActivity.view.js"
import { ActivitiesContext } from "../ActivitiesProvider";

const TableActivity = () => {
    const { activities, setActivities } = useContext(ActivitiesContext);  
     const token = sessionStorage.getItem("token")

    useEffect(() => {
        async function getActivities() {
            try {
                let url = `${process.env.REACT_APP_SERVER_URL}/logs`;
                console.log(url)
                let response = await axios.get(url,{
                    headers: {
                        Authorization: token, 
                    },
                });
                console.log(response)
                setActivities(response.data);  
            } catch (e) {
                console.error(e);
                console.log("Failed to fetch activities, try again later");
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
       <TableActivityView
       columns={columns} 
       activities={activities}
       />
    );
};

export default TableActivity;
