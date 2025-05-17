import React, { useContext } from "react";
import { GlobalState } from "./GlobalStateContext";

function ToDoList() {
    const {toDoList} = useContext(GlobalState);

    return(
        <ul>
            {toDoList.map((toDo, index) => (
                <li key={index}>{toDo}</li>
            ))}
        </ul>
    );
}

export default ToDoList;