import React, { useState } from "react";
import "../Expense/Expensive.css";
import Card from "../UI/Card";
import ExpensesChart from "../Expense/ExpenseChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpsenseList from "./ExpsenseList";

const Expensive = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectyear) => {
    setFilterYear(selectyear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <Card className="expensive">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpsenseList item={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expensive;
