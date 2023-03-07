import React, {useState} from "react";

import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState(null)

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name or age (non-empty values)'
            })
            return
        }
        if(enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }
    console.log(error)

    return(
        <div>
            { error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />)
            }
            <Card className={styles.add_user}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser