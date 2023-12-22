import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Webnavbar from "./components/webnavbar";
import Register from "./components/registerComponent/register";
import HomeComp from "./views/home/homeComp";
import Login from "./views/login/login";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";
import Navbar from "./components/Navbar";
import Create from "./views/create/Create";
import CreatePublish from "./views/Publish/CreatePublish";
import Profile from "./views/profile/profile";
import Notifications from "./views/notifications/notifications";
import Followers from "./views/followers/followers.jsx";
import profiles from "./assets/placeholder/perfiles_mascotas.js";

function App() {
  const user = profiles[1];
  const location = useLocation();
  const profileRoute = location.pathname.startsWith("/profile/:id");
  const registerRoute = location.pathname === "/register";
  const loginRoute = location.pathname === "/login";
  const createMaskotaRoute = location.pathname === "/crearMaskota";

  return (
    <div className="h-screen flex flex-col md:flex-row-reverse justify-center">
      <div
        className={
          profileRoute || registerRoute || loginRoute || createMaskotaRoute
            ? "AppHiddenNav"
            : "App"
        }
      >
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/publish" element={<CreatePublish />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/:human" element={<HumanData />} />
          <Route path="/crearMaskota" element={<Create />} />
          <Route path="/followers/:id" element={<Followers />} />
        </Routes>
      </div>
      {profileRoute || registerRoute || loginRoute || createMaskotaRoute ? (
        <div className="navContainer">
          <Webnavbar />
        </div>
      ) : (
        <div className="navContainer">
          {!profileRoute &&
          !registerRoute &&
          !loginRoute &&
          !createMaskotaRoute ? (
            <>
              <Navbar />
              <Webnavbar />
            </>
          ) : (
            <div>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
