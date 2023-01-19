import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log('Clicked!')
    }


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="expense-item__description">{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem