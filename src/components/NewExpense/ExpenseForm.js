import React, { useState } from "react";

import "./ExpenseForm.css";

// think of props as an object that passes data from one component to another
// if a component receives props then wherever the component is rendered (called) will accept attributes
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // this is passing the newly created object expenseData as argument to the function
    // saveExpenseDataHandler which lives in the parent component (NewExpense)
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onClick}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
