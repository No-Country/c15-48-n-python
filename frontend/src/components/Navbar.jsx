import { NavLink } from "react-router-dom";
import homeIcon from "../assets/icons/home_2.svg";
import searchIcon from "../assets/icons/search.svg";
import plusIcon from "../assets/icons/plus.svg";
import alertIcon from "../assets/icons/alert.svg";
import profileIcon from "../assets/icons/group_1.svg";
import profiles from "../assets/placeholder/perfiles_mascotas.js";

export default function Navbar() {
  const user = profiles[1];

  return (
    <nav className="h-20 flex items-center justify-around px-4  w-full bottom-0 bg-black">
      <ul className="flex items-center w-full justify-around">
        <li>
          <NavLink to="/">
            <img
              className="active:opacity-100 hover:opacity-100 focus:opacity-100 opacity-50"
              src={homeIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
            <img
              className="active:opacity-100 hover:opacity-100 focus:opacity-100 opacity-50"
              src={searchIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
        <li className="w-8 h-8 bg-gradient-to-r from-social-pink to-purple flex items-center justify-center rounded-full">
          <NavLink to="/publish" className="">
            <img
              className="hover:opacity-60"
              src={plusIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <img
              className="active:opacity-100 hover:opacity-100 focus:opacity-100 opacity-50"
              src={alertIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className="active:opacity-100 hover:opacity-100 focus:opacity-100 opacity-50"
              src={profileIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
