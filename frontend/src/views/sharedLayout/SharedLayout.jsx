import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Webnavbar from "../../components/Webnavbar";

const SharedLayout = () => {
  const location = useLocation();

  const haveNavbar = false;
  if (
    location.pathname === "/crearMaskota" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/profile/:id")
  ) {
    haveNavbar = true;
  }
  return (
    <div className='h-screen flex flex-col md:flex-row-reverse justify-center'>
      <div className={haveNavbar ? "AppHiddenNav" : "App"}>
        <Outlet />
      </div>
      {haveNavbar ? (
        <div className='navContainer'>
          <Webnavbar />
        </div>
      ) : (
        <div className='navContainer'>
          {haveNavbar && (
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