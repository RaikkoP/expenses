import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="expense-item__description">{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem