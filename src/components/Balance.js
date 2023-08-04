import React from "react";

function Balance({ balance }) {
  return (
    <div>
      <h4>Current Balance</h4>
      <h1 id="balance">${balance}</h1>
    </div>
  );
}

export default Balance;
