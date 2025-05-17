import React, { useState, useContext } from "react";
import { GlobalState } from "./GlobalStateContext";

function ToDoListForm() {
    const [input, setInput] = useState("");
    const {addToDo} = useContext(GlobalState);

    const handleSubmit = () => {
        addToDo(input);
        setInput("")
    };

    return(
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add to do"
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default ToDoListForm