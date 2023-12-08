import Register from "./components/registerComponent/register";
import Login from "./views/login/login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./views/profile/profile";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";
import HomeComp from "./views/home/homeComp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/publish" element={<h1>Publish</h1>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/:human" element={<HumanData />} />
      </Routes>
    </>
  );
}

export default App;

// pet={perfiles}
