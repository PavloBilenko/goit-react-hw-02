import React from "react";
import PropTypes from "prop-types"; // Імпортуємо PropTypes
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  // Перевіряємо, чи є transactions масивом
  if (!Array.isArray(transactions)) {
    console.error("Prop 'transactions' must be an array.");
    return null; // Або можна рендерити повідомлення про помилку
  }

  return (
    <div className={s.tableContainer}>
      <table className={s.wrapper}>
        <thead>
          <tr className={s.tableNames}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Додаємо перевірку типів для пропсів
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Або number, в залежності від типу id
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired, // Або number, в залежності від типу amount
      currency: PropTypes.string.isRequired,
    })
  ).isRequired, // Проп 'transactions' є обов'язковим
};

export default TransactionHistory;
