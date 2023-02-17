import React, {useState} from 'react';
import "./NewExpense.css"

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const [state, setstate] = useState('Closed')

    const changeMenuState = (menuState) => {
        setstate(menuState)
        return state
    }

    return(
        <div className="new-expense">
            {state === 'Closed' && <button className='theclick' onClick={() => changeMenuState('Open')}>Add new Expense</button>}
            {state === 'Open' &&
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} changeMenuState={changeMenuState}></ExpenseForm>}
        </div>
    )

}

export default NewExpense