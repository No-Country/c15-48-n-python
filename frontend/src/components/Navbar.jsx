import { NavLink } from "react-router-dom";
import homeIcon from '../assets/icons/home_2.svg';
import searchIcon from '../assets/icons/search.svg';
import plusIcon from '../assets/icons/plus.svg';
import alertIcon from '../assets/icons/alert.svg';
import profileIcon from '../assets/icons/group_1.svg';


export default function Navbar() {
  return (
    <nav className="h-16 flex items-center justify-around px-4 border-gray-300">
      <ul>
        <li>
          <NavLink to="/home">
            <img
              className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100"
              src={homeIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
            <img
              className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100"
              src={searchIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/publish" className="rounded-xl">
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
              className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100"
              src={alertIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <img
              className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100"
              src={profileIcon}
              alt="logo de algo"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
