import React, { useEffect, useContext,useState } from "react";
import axios from 'axios';
import TableActivityView from "./TableActivity.view.js"
import { ActivitiesContext } from "../ActivitiesProvider";

const TableActivity = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
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
       isModalOpen={isModalOpen}
       setIsModalOpen={setIsModalOpen}
       openModal={openModal}
       closeModal={closeModal}
       columns={columns} 
       activities={activities}
       />
    );
};

export default TableActivity;
