import React, { useState } from "react";
import Chart from "./Components/Chart/Chart";
import Expensive from "./Components/Expense/Expensive";
import NewExpense from "./Components/ExpenseForm/NewExpense";

const Dummy_Data = [
  {
    key: 1,
    title: "Car Insurance",
    amount: 294.87,
    date: new Date(2021, 7, 20),
  },
  {
    key: 2,
    title: "News Tv",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    key: 3,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 2, 28),
  },
  {
    key: 4,
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense, setExpense] = useState(Dummy_Data);
  const addDataHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <>
      <div>
        <NewExpense onaddDataHandler={addDataHandler} />
        {/* <Chart dataPoints={[]} /> */}
        <Expensive item={expense} />
      </div>
    </>
  );
};

export default App;
