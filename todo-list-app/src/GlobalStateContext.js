import { useState, createContext } from "react";

// Create a Context for the (global) State
export const GlobalState = createContext();

// Create the provider
export function ToDoListProvider({children}) {
    const [toDoList, setToDoList] = useState([]);

    const addToDo = (toDo) => {
        if (toDo.trim() === "") return;
        setToDoList([...toDoList, toDo])
    };

    const removeToDo = (toDo) => {
        
    }

    return(
        <GlobalState.Provider value={{toDoList, addToDo}}>
            {children}
        </GlobalState.Provider>
    );
}