import React, { useState } from "react"; // No needed but pasted to rememeber that jsx html elements are syntactic sugar from the original React.createElement()
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTtitle] = useState(props.title);

  const clickHandler = () => {
    setTtitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">$ {props.amount} </div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
