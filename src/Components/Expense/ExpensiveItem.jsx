import React from "react";
import "../Expense/ExpensiveItem.css";
import ExpensiveDate from "./ExpensiveDate";
import Card from "../UI/Card";
const ExpensiveItem = (props) => {
  return (
    <>
      <Card className="expense-item">
        <ExpensiveDate date={props.date} />
        <div className="expense-item__description ">
          <h2>{props.title} </h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
      </Card>
    </>
  );
};

export default ExpensiveItem;
