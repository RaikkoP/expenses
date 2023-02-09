import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState(null);

    const filterExpenseDatahandler = (enteredFilterData) => {
        setSelectedYear(enteredFilterData.year);

    }


    let expenseElement = props.expenseData.filter(expense => expense.date.getFullYear() === selectedYear)

    return (
        <Card className="expenses">
            <ExpenseFilter onSaveFilterData={filterExpenseDatahandler} />
            {expenseElement.length === 0
                && <p className="errorHandler">No expenses found</p>}
            {expenseElement.length > 0 &&
                expenseElement.map(expense => (
                    <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        price={expense.price}
                        date={expense.date}
                    />
                ))}
        </Card>
    );
};

export default Expenses