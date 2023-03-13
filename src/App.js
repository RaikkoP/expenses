import './App.css';
import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
import UserMain from './components/Users/UserMain';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date : new Date(2023,0,10),
        title : 'New book',
        price : 30.99
    },
    {
        id: 'e2',
        date: new Date(2024,0,10),
        title: 'New jeans',
        price: 99.99
    },
    {
        id: 'e3',
        date: new Date(2024, 0, 10),
        title: 'New bag',
        price: 199.99
    }
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const [loggedIn, setLoggedIn] = useState(false)

   


    const addExpensehandler = (expenseData) => {
        console.log('In App.js')
        setExpenses((previousExpenses) => {
            return [expenseData, ...previousExpenses]
        })
    }

    console.log(expenses)




    return (
        <div className="App">
            <UserMain loggedIn={setLoggedIn}></UserMain>
            {loggedIn === false &&  <Expenses expenseData={expenses}></Expenses>}
            {loggedIn === true &&
            <div>
                <NewExpense onAddExpense={addExpensehandler}></NewExpense>
                <Expenses expenseData={expenses}></Expenses>
            </div>
            }
            
           
        </div>
    );
}

export default App;