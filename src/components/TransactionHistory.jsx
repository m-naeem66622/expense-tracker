import React from "react";

function TransactionHistory({ transactions, handleDeleteTransaction }) {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.type}>
            {transaction.description}
            <span
              className={`${
                transaction.type === "income" ? "text-lime-500" : "text-red-600"
              }`}
            >
              Rs. {transaction.amount}
            </span>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTransaction(transaction.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
