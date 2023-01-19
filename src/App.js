import logo from './logo.svg';
import './App.css';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
        date : new Date(2023,0,10),
        title : 'New book',
        price : 30.99
    },
        {date: new Date(2023,0,10),
        title: 'New jeans',
        price: 99.99}
    ]




    return (
        <div className="App">
            <Expenses expenseData={expenses}></Expenses>
        </div>
    );
}

export default App;