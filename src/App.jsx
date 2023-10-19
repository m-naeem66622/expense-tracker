import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import SplitButton from "./components/SplitButton";
import { Header } from "./components/Header";
import Balance from "./components/Balance";
import AccountSummary from "./components/AccountSummary";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState({});
  const [option, setOption] = useState("income");
  const inputAmountRef = useRef();
  const inputDescriptionRef = useRef();

  const addValue = (e) => {
    // preventing the default behaviour of form
    e.preventDefault();

    // get the value and make sure it is positive
    const amount = Math.abs(inputAmountRef.current.value.trim());
    const description = inputDescriptionRef.current.value.trim();

    // return/exit the function if input values is 0 or empty string
    if (!(amount && description)) return;
    

    // generate an id
    const id = uuidv4();

    // create an object
    let obj = { id, type: option, description };
    if (option === "income") {
      obj = { ...obj, amount: Number(amount) };
    } else {
      obj = { ...obj, amount: Number(amount) * -1 };
    }

    // update the transactions state
    setTransactions((prevState) => ({ ...prevState, [id]: obj }));

    // reset the input values
    inputAmountRef.current.value = "";
    inputDescriptionRef.current.value = "";
  };

  const handleDeleteTransaction = (id) => {
    // make a copy of transactions to delete a specific transactions from it.
    const tempTransactions = { ...transactions };

    // delete key from the object based on id
    delete tempTransactions[id];

    // set the transactions state with updated transactions
    setTransactions(tempTransactions);
  };

  // get the selected option from the <SplitButton /> and update the option state
  const handleSelectOption = (option) => {
    setOption(option);
  };

  // calculate the total balance, income and expense
  const calculator = (type) =>
    Object.values(transactions).reduce((accumulator, element) => {
      // to calculate for income and expense only
      if (element.type === type) {
        return accumulator + element.amount;
      }

      // to calculate total or return same value without adding anything if above condition fail to pass
      return type === "total" ? accumulator + element.amount : accumulator;
    }, 0);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Balance balance={calculator("total")} />
        <AccountSummary
          summary={{
            income: calculator("income"),
            expense: calculator("expense"),
          }}
        />
        <AddTransaction
          handleOnSubmit={addValue}
          refs={{ inputAmountRef, inputDescriptionRef }}
          handleSelectOption={handleSelectOption}
        />
        <TransactionHistory
          transactions={Object.values(transactions)}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
