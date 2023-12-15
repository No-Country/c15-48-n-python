import { NavLink, useLocation } from "react-router-dom";
import plusIcon from "../assets/icons/plus.svg";
import profileIcon from "../assets/icons/group_1.svg";
import profiles from "../assets/placeholder/perfiles_mascotas.js";

export default function Navbar() {
  const user = profiles[1];
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="h-full flex items-center justify-around px-4  w-full bottom-0 bg-black">
      <ul className="flex items-center w-full justify-around">
        <li>
          <NavLink to="/">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="home 2">
                <g id="layer1">
                  <g id="path1-1" opacity="0.988636">
                    <path
                      d="M2.66602 12.2571L11.9142 2.9267Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M2.66602 12.2571L11.9142 2.9267"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="path1-1-5" opacity="0.988636">
                    <path
                      d="M12.6465 2.9267L21.8947 12.2571Z"
                      fill={isActive("/") ? "#F62E8E" : "#F62E8E"}
                    />
                    <path
                      d="M12.6465 2.9267L21.8947 12.2571"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="path1" opacity="0.988636">
                    <path
                      d="M5.25476 21.0938L5.20898 11.8309Z"
                      fill={isActive("/") ? "#F62E8E#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M5.25476 21.0938L5.20898 11.8309"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="path1-9" opacity="0.988636">
                    <path
                      d="M19.5962 21.0938L5.20898 21.048Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M19.5962 21.0938L5.20898 21.048"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="path1-8" opacity="0.988636">
                    <path
                      d="M19.5961 21.0938L19.5503 11.8309Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M19.5961 21.0938L19.5503 11.8309"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="path2-9-5"
                    opacity="0.988636"
                    d="M12.403 17.195C10.899 17.1963 7.51701 14.1257 9.10122 12.2817C10.6854 10.4378 12.803 12.6925 12.5001 14.4364C12.1972 16.1803 12.2355 16.389 11.9447 14.7508C11.654 13.1125 14.2578 10.1522 15.7427 12.4499C17.2276 14.7475 13.8937 17.1937 12.403 17.195Z"
                    fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                  />
                </g>
              </g>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="search">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4C6.93913 4 5.92172 4.42143 5.17157 5.17158C4.42143 5.92172 4 6.93914 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93914 11.5786 5.92172 10.8284 5.17158C10.0783 4.42143 9.06087 4 8 4ZM2 8C1.99988 7.05571 2.22264 6.12472 2.65017 5.28275C3.0777 4.44077 3.69792 3.7116 4.4604 3.15453C5.22287 2.59746 6.10606 2.22822 7.03815 2.07684C7.97023 1.92546 8.92488 1.99621 9.82446 2.28335C10.724 2.57049 11.5432 3.06591 12.2152 3.7293C12.8872 4.39269 13.3931 5.20534 13.6919 6.10114C13.9906 6.99694 14.0737 7.9506 13.9343 8.88456C13.795 9.81852 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9877C16.7342 17.99 16.4816 17.8892 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9082 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.333C4.26953 12.8278 3.44869 12.063 2.87572 11.1224C2.30276 10.1817 1.99979 9.10144 2 8Z"
                  fill={isActive("/explore") ? "#F62E8E" : "#ECEBED"}
                />
              </g>
            </svg>
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
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon / Alert">
                <path
                  id="Vector"
                  d="M15 17.5H20L18.595 16.095C18.4063 15.9063 18.2567 15.6822 18.1546 15.4357C18.0525 15.1891 18 14.9249 18 14.658V11.5C18.0002 10.2589 17.6156 9.04834 16.8992 8.03489C16.1829 7.02144 15.17 6.25496 14 5.841V5.5C14 4.96957 13.7893 4.46086 13.4142 4.08579C13.0391 3.71071 12.5304 3.5 12 3.5C11.4696 3.5 10.9609 3.71071 10.5858 4.08579C10.2107 4.46086 10 4.96957 10 5.5V5.841C7.67 6.665 6 8.888 6 11.5V14.659C6 15.197 5.786 15.714 5.405 16.095L4 17.5H9M15 17.5H9M15 17.5V18.5C15 19.2956 14.6839 20.0587 14.1213 20.6213C13.5587 21.1839 12.7956 21.5 12 21.5C11.2044 21.5 10.4413 21.1839 9.87868 20.6213C9.31607 20.0587 9 19.2956 9 18.5V17.5"
                  stroke={isActive("/notifications") ? "#F62E8E" : "#ECEBED"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
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
