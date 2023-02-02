import logo from './logo.svg';
import './App.css';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const DUMMY_EXPENSES = [
    {
        date : new Date(2023,0,10),
        title : 'New book',
        price : 30.99
    },
    {
        date: new Date(2023,0,10),
        title: 'New jeans',
        price: 99.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New bag',
        price: 199.99
    }
]

const App = () => {

    const addExpensehandler = (expenseData) => {
        console.log('In App.js')
        console.log(expenseData)
    }





    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehandler}></NewExpense>
            <Expenses expenseData={DUMMY_EXPENSES}></Expenses>
        </div>
    );
}

export default App;