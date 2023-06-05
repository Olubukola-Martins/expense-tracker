import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';



const NewExpense = (props) => {
    const handleGetExpenseData = (newExpenseData) => {
      const expenseData = {
        ...newExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
    };


    return <div className="new-expense">
        <ExpenseForm onGetExpenseData = {handleGetExpenseData}/>
    </div>;
};

export default NewExpense;