import React from "react";

function AccountSummary({ summary }) {
  const { income, expense } = summary;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        {/* make the expense an absolute value to avoid negation */}
        <p className="money minus">{Math.abs(expense)}</p>
      </div>
    </div>
  );
}

export default AccountSummary;
