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
                props.expenseData.map((expenses) => {
                    return <ExpenseItem
                    id={expenses.id}
                    title={expenses.title}
                    price={expenses.price}
                    date={expenses.date}></ExpenseItem>
            })
        }
        </Card>
    )
}

export default Expenses