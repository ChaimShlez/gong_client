import "./Activities.css";
import { ReactComponent as Search } from "../../assets/search.svg"
import TableActivity from "./tableActivity/TableActivity"

export default function Activities() {
  // const [nameCategoty,setNameCategory]=useState ('');
  // const [subCategoty,setSubCategory]=useState ('');
  // const [nameStore,setNameStore]=useState ('');
  // const [price,setPrice]=useState (0.0);
  // const [time,setTime]=useState ('');

  return (
    <div className="Activities">
      <div className="header-activities ">
        <p className="header">Activities</p>
      </div>
      <div className="container-filters">
        <div className="buttons-container">
        <button className="filter-button">הצג הכל</button>
          <button className="filter-button">
            הצג שבוע אחרון
          </button>
          <div>
          <input type="date" className="filter-date-button" />
       
          </div>
        </div>
        <div className="search">
          <input type="search" placeholder="חיפוש" className="search-bar" /> 
          <Search className="search-icon" />
        </div>
      </div>
      <div className="table"></div>

      <div style={{marginTop:"15px"}}>
        <TableActivity />

      </div>
    </div>
  );
}
