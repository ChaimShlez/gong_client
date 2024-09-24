import './Activities.css';
// import { useState } from "react";

export default function Activities(){
  // const [nameCategoty,setNameCategory]=useState ('');
  // const [subCategoty,setSubCategory]=useState ('');
  // const [nameStore,setNameStore]=useState ('');
  // const [price,setPrice]=useState (0.0);
  // const [time,setTime]=useState ('');
    return(
        <div className="Activities">
        <div className="header-activities ">
        <h4>
        Activities
        </h4>
        </div>
        <div className="contianer-filters">
          <div className="buttons-container">
          <button className="filter-button">Last 7 days <span>&#9660;</span></button>
          <button className="filter-button">15 Mar - 22 Mar</button>
          <button className="filter-button">All 35</button>
          <button className="status-button active">Received 15</button>
          <button className="status-button">Sent 5</button>
          <button className="status-button">Convert 10</button>
          <button className="filter-button">Currency <span>&#9660;</span></button>
          </div>
          <div className="search">
             
          <input type="text"  placeholder="Search"  className="search-bar"  />
          </div>
        </div>
        <div className="table">

        </div>
        </div>
    );
}