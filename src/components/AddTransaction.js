import React from "react";
import SplitButton from "./SplitButton";

function AddTransaction({ handleOnSubmit, refs, handleSelectOption }) {
  const { inputAmountRef, inputDescriptionRef } = refs;
  console.log(handleSelectOption);
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleOnSubmit}>
        <div className="">
          <label htmlFor="description">Description</label>
          <input
            ref={inputDescriptionRef}
            type="text"
            id="description"
            placeholder="Detail of Transaction"
            required="required"
          />
        </div>
        <div className="">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <div className="flex">
            <input
              ref={inputAmountRef}
              type="number"
              id="transactionamount"
              placeholder="Dollar Value of Transaction"
              required="required"
              className="!rounded-r-none"
            />
            {/* <button className="btn">Add Transaction</button> */}
            <SplitButton handleSelectOption={handleSelectOption} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
