import React from "react";
import Register from "./components/registerComponent/register";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<h1>Explore</h1>} />
        <Route path="/publish" element={<h1>Publish</h1>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </>
  );
}

export default App;
