import { useContext, useState } from "react";
import { ToDoListContext } from "../contexts/ToDoListContext";
import {
    List,
    ListItem,
    ListItemText,
    Box,
    TextField,
    Button,
    Stack,
} from "@mui/material";

function ToDoList() {
    // Values from ToDoListContext to use
    const { toDoList, removeToDo, updateToDo } = useContext(ToDoListContext);

    const [editIndex, setEditIndex] = useState(null);
    const [newToDO, setNewToDo] = useState("");

    // Start editing
    const startEditing = (index, currentToDo) => {
        setEditIndex(index);
        setNewToDo(currentToDo);
    }

    // When done editing
    const handleEdit = () => {
        updateToDo(editIndex, newToDO);
        setEditIndex(null);
        setNewToDo("");
    }

    // Cancel edit
    const handleCancel = () => {
        setEditIndex(null);
        setNewToDo("")
    }

    return (
        <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
            <List>
                {toDoList.map((toDo, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1,
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            p: 2,
                        }}
                    >
                        {editIndex === index ? (
                            <>
                                <TextField
                                    value={newToDO}
                                    onChange={(e) => setNewToDo(e.target.value)}
                                    size="small"
                                    sx={{ flexGrow: 1, mr: 2 }}
                                />
                                <Stack direction="row" spacing={1}>
                                    <Button onClick={handleEdit} variant="contained" color="success">Save</Button>
                                    <Button onClick={handleCancel} variant="outlined">Cancel</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <ListItemText primary={toDo} />
                                <Stack direction="row" spacing={1}>
                                    <Button onClick={() => startEditing(index, toDo)} variant="outlined">Edit</Button>
                                    <Button onClick={() => removeToDo(index)} variant="contained" color="error">Remove</Button>
                                </Stack>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default ToDoList;