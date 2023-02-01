import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import expenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

    const filterExpenseDatahandler = (enteredFilterData) => {
        console.log(`Expenses.js Changed year to ${enteredFilterData.year}`)
    }
    return (
        <Card className="expenses">
            <ExpenseFilter onSaveFilterData={filterExpenseDatahandler}></ExpenseFilter>
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses