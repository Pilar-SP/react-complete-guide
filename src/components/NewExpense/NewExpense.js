import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const expandIsFormOpen = () => {
    setIsFormOpen(true);
  };

  const cancelIsFormOpen = () => {
    setIsFormOpen(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isFormOpen && (
        <button type="button" onClick={expandIsFormOpen}>
          Add New Expense
        </button>
      )}
      {isFormOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClick={cancelIsFormOpen}
        />
      )}
    </div>
  );
};

export default NewExpense;
