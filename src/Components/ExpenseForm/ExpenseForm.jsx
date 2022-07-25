import React, { useState } from "react";
import "../ExpenseForm/ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enterTile, setEnterTitle] = useState();
  const [enterAmount, setEnterAmount] = useState();
  const [enterDate, setEnterDate] = useState();
  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });
  const titleChangedHandler = (event) => {
    // method 1
    setEnterTitle(event.target.value);
    // method 2
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    // method 3
    // setUserInput((prevstate) => {
    //   return {
    //     ...prevstate,
    //     enterTile: event.target.value,
    //   };
    // });
  };
  const amountChangedHandler = (event) => {
    // method 1
    setEnterAmount(event.target.value);
    // method 2
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };
  const dateChangedHandler = (event) => {
    // method 1
    setEnterDate(event.target.value);
    // method 2
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
  };
  const sumbitChangeHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTile,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    props.onsubmitData(expenseData);
    setEnterAmount("");
    setEnterTitle("");
    setEnterDate("");
  };
  return (
    <>
      <form action="#" onSubmit={sumbitChangeHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={titleChangedHandler}
              value={enterTile}
              required
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amont">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangedHandler}
              value={enterAmount}
              required
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="Date">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-01-01"
              onChange={dateChangedHandler}
              value={enterDate}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button>Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
