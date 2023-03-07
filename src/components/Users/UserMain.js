import React, {useState} from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

const UserMain = (props) => {
    const [users, setUsers] = useState([])

    const onAddUserHandler = (username, age) => {
        setUsers((prevUsers) => {
            return [
                ...prevUsers,
                {
                    id: Math.random().toString(),
                    name: username,
                    age: age
                },
            ]
            
        })
        props.loggedIn(true)
    }

    return (
        <div>
            <AddUser onAddUser={onAddUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default UserMain;