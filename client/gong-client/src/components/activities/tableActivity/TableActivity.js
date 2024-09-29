import React from "react";
import "./TableActivity.css";
import { ReactComponent as ArrowDown } from "../../../assets/red-arrow-down.svg";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const tableActivity = () => {
  let columns = [
    "הוצאה/הכנסה",
    "עלות",
    "צורת תשלום",
    "תיאור",
    "הבעל/האשה",
    "תאריך",
  ];

  const data = [
    {
      col1: "הוצאה",
      col2: "119.7",
      col3: "אשראי",
      col4: "אושר עד",
      col5: "shmuel",
      col6: "Aug 28,2023 3:40",
    },
    {
      col1: "הוצאה",
      col2: "40",
      col3: "אשראי",
      col4: "יש בשכונה",
      col5: "haim",
      col6: "Aug 28,2023 3:40",
    },
    {
      col1: "הכנסה",
      col2: "120000",
      col3: "העברה בנקאית",
      col4: "משכורת",
      col5: "shmuel",
      col6: "Aug 28,2023 3:40",
    },
  ];
  const renderArrow = (type) => {
    console.log(type === "הוצאה");
    if (type === "הוצאה") {
      return <ArrowDown style={{ width: "20px" }} />;
    } else {
      return <span style={{ color: "green" }}>⬇️</span>;
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((row, index) => (
              <th key={index}>{row}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                {row.col1}
                {row.col1 === "הוצאה" ? (
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
              <td>{row.col2}</td>
              <td>{row.col3}</td>
              <td>{row.col4}</td>
              <td>{row.col5}</td>
              <td>{row.col6}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default tableActivity;
