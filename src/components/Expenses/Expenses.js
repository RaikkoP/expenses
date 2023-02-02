import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

    const filterExpenseDatahandler = (enteredFilterData) => {
        console.log(`Expenses.js Changed year to ${enteredFilterData.year}`)
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onSaveFilterData={filterExpenseDatahandler}></ExpenseFilter>
            {
                props.expenseData.map((expense) => {
                    return <ExpenseItem expenseData={expense}></ExpenseItem>
            })
        }
        </Card>
    )
}

export default Expenses