import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Register from "./components/registerComponent/register";
import HomeComp from "./views/home/homeComp";
import Login from "./views/login/login";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";
import Navbar from "./components/Navbar";
import Create from "./views/create/Create";
import CreatePublish from "./views/Publish/CreatePublish";
import Profile from "./views/profile/profile";
import profiles from "./assets/placeholder/perfiles_mascotas.js";

function App() {
  const user = profiles[1];
  const location = useLocation();
  const profileRoute = location.pathname === "/profile/2";
  const homeRoute = location.pathname === "/";
  const exploreRoute = location.pathname === "/explore";
  const notifRoute = location.pathname === "/notifications";

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/publish" element={<CreatePublish />} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/:human" element={<HumanData />} />
        <Route path="/crearMaskota" element={<Create />} />
      </Routes>
    </div>
    <div>{profileRoute || homeRoute || exploreRoute || notifRoute ? <Navbar /> : <div></div>}</div>
    </>
  );
}

export default App;
