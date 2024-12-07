import React from "react";
import "./TableActivity.style.css";
import moment from "moment";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Modal from "react-modal"; // Ensure this is imported correctly
import CreateActivities from "../CreateActivities/CreateActivities";


function TableActivityView({
  columns,
  activities,
  openModal,
  closeModal,
  isModalOpen,
  setIsModalOpen,
}) {
  const customStyles = {
    content: {
      top: "30%",
      left: "14%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#8fb1de",
      height: "50%",
      width: "25%",
      border: "2px solid #006dff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      opacity: "0.95",
    },
  };

  return (
    <div>
      <div>
        <button
          style={{ marginTop: "18px" }}
          className="button"
          onClick={openModal}
        >
          הוסף
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CreateActivities setIsModalOpen={setIsModalOpen} />
      </Modal>
      <table className="activity-table">
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
              <td>{activity.revenue_name === null ? activity.store_name : activity.revenue_name}</td>
              <td>{activity.user_name}</td>
              <td>{moment(activity.date).format("MMMM DD, YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableActivityView;
