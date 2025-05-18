import { ToDoListProvider } from "../contexts/ToDoListContext";
import ToDoListForm from "../components/ToDoListForm";
import ToDoList from "../components/ToDoList";
import { Container, Typography, Box } from "@mui/material";

function ToDoListPage() {
    return (
        <ToDoListProvider>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Box textAlign="center" mb={4}>
                    <Typography variant="h3" component="h1" gutterBottom color="primary">To Do List</Typography>
                </Box>
                <ToDoList />
                <ToDoListForm />
            </Container>
        </ToDoListProvider>
    );
}

export default ToDoListPage;