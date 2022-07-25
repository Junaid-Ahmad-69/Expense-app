import React from "react";
import ExpensiveItem from "./ExpensiveItem";
import "../Expense/ExpenseList.css";

const ExpsenseList = (props) => {
  if (props.item.length === 0) {
    return <h3 className="expenses-list__fallback">Expense Not Found</h3>;
  }
  return (
    <>
      <ul className="expseses-list">
        {props.item.map((expense) => {
          return (
            <ExpensiveItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.index}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ExpsenseList;
