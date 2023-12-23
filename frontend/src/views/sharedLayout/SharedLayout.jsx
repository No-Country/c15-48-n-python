import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Webnavbar from "../../components/Webnavbar";

const SharedLayout = () => {
  const location = useLocation();
  const profileRoute = location.pathname.startsWith("/profile/:id");
  const registerRoute = location.pathname === "/register";
  const loginRoute = location.pathname === "/login";
  const createMaskotaRoute = location.pathname === "/crearMaskota";
  return (
    <div className='h-screen flex flex-col md:flex-row-reverse justify-center'>
      <div
        className={
          profileRoute || registerRoute || loginRoute || createMaskotaRoute
            ? "AppHiddenNav"
            : "App"
        }>
        <Outlet />
      </div>
      {profileRoute || registerRoute || loginRoute || createMaskotaRoute ? (
        <div className='navContainer'>
          <Webnavbar />
        </div>
      ) : (
        <div className='navContainer'>
          {!profileRoute &&
            !registerRoute &&
            !loginRoute &&
            !createMaskotaRoute && (
              <>
                <Navbar />
                <Webnavbar />
              </>
            )}
        </div>
      )}
    </div>
  );
};

export default SharedLayout;
