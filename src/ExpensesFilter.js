import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [expenses, setExpenses] = useState(props.items);

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    return setExpenses(
      props.items.filter(
        (item) => event.target.value === item.date.getFullYear()
      )
    );
  };

  // const addExpenseHandler = (newExpense) => {
  //         props.items.filter((item) => item.date.getFullYear() === selectedYear);
  //   };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
