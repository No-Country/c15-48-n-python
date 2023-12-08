import React from "react";
import Register from "./components/registerComponent/register";
import HomeComp from "./components/homeComp";
import Login from "./views/login/login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./views/profile/profile";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";

function App() {
  return (
    <>
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
