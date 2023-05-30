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

  // parsing data in as props
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
