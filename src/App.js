import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import SplitButton from "./components/SplitButton";
import { Header } from "./components/Header";
import Balance from "./components/Balance";
import AccountSummary from "./components/AccountSummary";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [option, setOption] = useState("income");
  const inputAmountRef = useRef();
  const inputDescriptionRef = useRef();

  const addValue = (e) => {
    // preventing the default behaviour of form
    e.preventDefault();

    // get the value and make sure it is positive
    const inputAmount = Math.abs(inputAmountRef.current.value.trim());
    const inputDescription = inputDescriptionRef.current.value.trim();

    // return/exit the function if input value is 0 or empty string
    if (!(inputAmount && inputDescription)) return;

    // create an object
    let obj = { id: uuidv4(), type: option };
    if (option === "income") {
      obj = { ...obj, amount: Number(inputAmount) };
    } else {
      obj = { ...obj, amount: Number(inputAmount) * -1 };
    }

    console.log(obj);
    // update the transactions state
    setTransactions((prevState) => [...prevState, obj]);

    // reset the input value
    inputAmountRef.current.value = "";
  };

  const handleDeleteTransaction = (id) => {
    console.log(id);
  };

  // get the selected option from the <SplitButton /> and update the option state
  const handleSelectOption = (option) => {
    setOption(option);
  };

  // calculate the total balance, income and expense
  const calculator = (type) =>
    transactions.reduce((accumulator, element) => {
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
          transactions={transactions}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
