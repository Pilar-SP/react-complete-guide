import React from "react"; // No needed but pasted to rememeber that jsx html elements are syntactic sugar from the original React.createElement()
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
