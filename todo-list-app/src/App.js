import './App.css';
import { ToDoListProvider } from './GlobalStateContext';
import ToDoListForm from './ToDoListForm';
import ToDoList from './ToDoList';

function App() {
  return (
    <ToDoListProvider>
      <h1>To Do List</h1>
      <ToDoListForm />
      <ToDoList />
    </ToDoListProvider>
  );
}

export default App;
