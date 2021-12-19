import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./components/userList/UserList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
