import React from "react";
import "../Expense/ExpensiveDate.css";

const ExpensiveDate = (props) => {
  const get = props.date;
  const month = get.toLocaleString("en-US", { month: "long" });
  const day = get.toLocaleString("en-US", { day: "2-digit" });
  const year = get.getFullYear();
  return (
    <>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </>
  );
};

export default ExpensiveDate;
