import React, {useState} from "react";

import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 4, 25);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // return (
  //   <div className="expense-item">
  //     {/* these curly braces {} are for passing in the variable, you can also run simple javascript code in them */}
  //     <div>{expenseDate.toDateString()}</div>
  //     <div className="expense-item__description">
  //       <h2>{expenseTitle}</h2>
  //       <div className="expense-item__price">${expenseAmount}</div>
  //     </div>
  //   </div>
  // );

  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle('Updated!');
  console.log(title);
};

  // parsing data in as props

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div> 
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
