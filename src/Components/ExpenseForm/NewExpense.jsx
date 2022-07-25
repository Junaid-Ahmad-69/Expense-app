import React, { useState } from "react";
import "../ExpenseForm/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitDataHandler = (expenseDatahandler) => {
    const expenseData = {
      ...expenseDatahandler,
      id: Math.random().toString(),
    };
    props.onaddDataHandler(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onsubmitData={submitDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
