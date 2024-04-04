import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="write" element={<Write />} />
        <Route path="settings" element={<Settings />} />
        <Route path="post" element={<Settings />} />
        <Route path="single" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
