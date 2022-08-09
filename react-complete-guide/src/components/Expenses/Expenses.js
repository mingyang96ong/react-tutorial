import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("0");
  const filterYearHandler = (enteredFilterYear) => {
    setFilteredYear(enteredFilterYear);
  };

  const filterExpense = (expense) => {
    if (filteredYear === "0") {
      return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  };
  const filteredExpenses = props.expenses.filter(filterExpense);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterYearHandler}
      />
      <ExpensesChart expense={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
