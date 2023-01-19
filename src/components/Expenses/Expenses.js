import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses