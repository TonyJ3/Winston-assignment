import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './pages/HomePage';
import Profile from './pages/ProfilePage';
import ToDoList from './pages/ToDoListPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
