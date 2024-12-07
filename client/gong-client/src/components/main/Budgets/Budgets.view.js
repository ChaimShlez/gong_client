import { FaRegEdit } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import React from "react"
import "./Budgets.style.css"
import moment from 'moment';
import CreateBudgets from "./CreateBudgets/CreateBudgets";
import Modal from "react-modal";

export default function BUdgetsView({
    budgets,
    columns,
    isModalOpen,
    setIsModalOpen,
    openModal,
    closeModal
}) {

    const customStyles = {
        content: {
            top: "10%",
            left: "25%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            //transform: "translate(-50%, -50%)",
            backgroundColor: "#8fb1de",
            height: "75%",
            width: "35%",
            border: "2px solid #006dff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            opacity: "0.95",
        },
    };

    return (
        <div className="Budget">
            <div>
                <button
                    className="button"
                    onClick={openModal}
                ><CiSquarePlus /></button>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <CreateBudgets setIsModalOpen={setIsModalOpen} />
                </Modal>
            </div>
            <table className="budgets-table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {budgets.map((budget, index) => (
                        <tr key={index}>
                            <td>
                                {budget.sum_budget}
                            </td>
                            <td>{Object.entries(budget.budget)
                                .map(([key, value]) => `${key}: ${value}`)
                                .join(", ")}</td>

                            <td><FaRegEdit /></td>
                            <td>{moment(budget.date).format('MMMM,YYYY')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}