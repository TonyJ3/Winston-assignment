import { useState, useContext } from "react";
import { ToDoListContext } from "../contexts/ToDoListContext";
import { Box, TextField, Button } from "@mui/material";

function ToDoListForm() {
    const [input, setInput] = useState("");

    // Values from ToDoListContext to use
    const { addToDo } = useContext(ToDoListContext);

    const handleSubmit = () => {
        addToDo(input);
        setInput("")
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mb: 4,
                mt: 2,
                flexWrap: "wrap",
            }}
        >
            <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add to-do"
                variant="outlined"
                size="small"
                sx={{ minWidth: 250 }}
            />
            <Button onClick={handleSubmit} variant="contained" color="success">Add</Button>
        </Box>
    );
}

export default ToDoListForm