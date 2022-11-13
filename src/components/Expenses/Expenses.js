import React, { useState } from "react"; // No needed but pasted to rememeber that jsx html elements are syntactic sugar from the original React.createElement()
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const storeYearState = (year) => {
    setSelectedYear(year);
    console.log(`selected year is ${selectedYear} from Expenses component`);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onYearChange={storeYearState} />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
