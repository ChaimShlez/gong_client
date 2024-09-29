
import './Activities.css';
import axios from "axios";
import { useState } from "react";

export default function Activities() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  async function handleFilterLast7Days() {
    const currentDate = new Date();
    
    const last7Days = new Date();
    last7Days.setDate(currentDate.getDate() - 7);


    const currentDateString = currentDate.toISOString().split('T')[0];
    const last7DaysDateString = last7Days.toISOString().split('T')[0];

    try {
      const url = `http://localhost:5000/users?dateNow=${currentDateString}&Last7DaysDate=${last7DaysDateString}`;
      const response = await axios.get(url);
      const activitiesBy7Day = response.data;
      console.log(activitiesBy7Day); 

    } catch (e) {
      console.error(e);
      
      if (e.response?.data?.error?.message) {
        alert(e.response.data.error.message);
      } else {
        alert("Filter invalid, try later");
      }
    }
  }

  async function handleFilterCalendar() {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    try {
      const url = `http://localhost:5000/users?startDate=${startDate}&endDate=${endDate}`;
      const response = await axios.get(url);
      const filteredActivities = response.data;
      console.log(filteredActivities);

    } catch (e) {
      console.error(e);
      alert('Error fetching filtered activities.');
    }
  }

  return (
    <div className="Activities">
      <div className="header-activities">
        <h4>Activities</h4>
      </div>
      <div className="container-filters">
        <div className="buttons-container">
          <button className="filter-button" onClick={handleFilterLast7Days}>Last 7 days</button>
          
         
          <input 
            type="date" 
            value={startDate} 
            onChange={event => setStartDate(event.target.value)} 
            className="filter-button"  
          />
          <input 
            type="date" 
            value={endDate} 
            onChange={event => setEndDate(event.target.value)} 
            className="filter-button"  
          />
          <button className="filter-button" onClick={handleFilterCalendar}>Filter by Date</button>
          
          
          <button className="filter-button">All</button>
          <button className="filter-button">Received 15</button>
          <button className="filter-button">Sent</button>
          <button className="filter-button">Convert</button>
          <button className="filter-button">Currency</button>
        </div>
        
        
        <div className="search">
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
      </div>
      
      
      <div className="table"></div>
    </div>
  );
}
