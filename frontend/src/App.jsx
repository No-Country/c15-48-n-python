import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Register from "./components/registerComponent/register";
import HomeComp from "./views/home/homeComp";
import Login from "./views/login/login";
import Profile from "./views/profile/profile";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const profileRoute = location.pathname === "/profile";
  const homeRoute = location.pathname === "/";

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/publish" element={<h1>Publish</h1>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/:human" element={<HumanData />} />
      </Routes>
    </div>
    <div>{profileRoute || homeRoute ? <Navbar /> : <div></div>}</div>
    </>
  );
}

export default App;
