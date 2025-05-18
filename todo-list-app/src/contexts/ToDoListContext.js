import { useState, createContext } from "react";

// Create a Context for the global state
export const ToDoListContext = createContext();

// Create the provider
export function ToDoListProvider({ children }) {
    const [toDoList, setToDoList] = useState([]);

    const addToDo = (toDo) => {
        if (toDo.trim() === "") return;
        setToDoList([...toDoList, toDo]);
    };

    const removeToDo = (removedIndex) => {
        setToDoList(toDoList.filter((_, index) => index !== removedIndex));
    }

    const updateToDo = (index, newToDO) => {
        setToDoList(toDoList.map((toDo, i) => (i === index ? newToDO : toDo)))
    }

    return (
        <ToDoListContext.Provider value={{ toDoList, addToDo, removeToDo, updateToDo }}>
            {children}
        </ToDoListContext.Provider>
    );
}