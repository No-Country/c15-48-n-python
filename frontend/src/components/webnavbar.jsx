import { NavLink, useLocation } from "react-router-dom";

export default function Webnavbar() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen flex-col lg:flex-row border-r-2 border-gray hidden md:flex pr-8">
      <nav className="w-full mt-20">
        <ul className="w-full text-white flex flex-col justify-between h-full">
          <div className="flex flex-col w-full gap-5 text-xl">
            <NavLink to="/" className="w-full flex pl-5">
              <li className={isActive("/") ? "flex items-center gap-3 p-2 w-40 text-social-pink" : "flex items-center gap-3 p-2 w-40 opacity-20"}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.988636">
                    <path
                      d="M3.62549 16.6697L16.2031 3.98035L3.62549 16.6697Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M3.62549 16.6697L16.2031 3.98035"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g opacity="0.988636">
                    <path
                      d="M17.1992 3.98035L29.7768 16.6697L17.1992 3.98035Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M17.1992 3.98035L29.7768 16.6697"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g opacity="0.988636">
                    <path
                      d="M7.14624 28.6875L7.08398 16.09L7.14624 28.6875Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M7.14624 28.6875L7.08398 16.09"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g opacity="0.988636">
                    <path
                      d="M26.6506 28.6876L7.08398 28.6254L26.6506 28.6876Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M26.6506 28.6876L7.08398 28.6254"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g opacity="0.988636">
                    <path
                      d="M26.6506 28.6875L26.5884 16.09L26.6506 28.6875Z"
                      fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    />
                    <path
                      d="M26.6506 28.6875L26.5884 16.09"
                      stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    opacity="0.988636"
                    d="M16.8677 23.3852C14.8222 23.387 10.2227 19.2109 12.3772 16.7032C14.5318 14.1955 17.4117 17.2619 16.9998 19.6336C16.5878 22.0053 16.6399 22.2891 16.2444 20.0611C15.849 17.8331 19.3902 13.8071 21.4097 16.9319C23.4291 20.0567 18.895 23.3834 16.8677 23.3852Z"
                    fill={isActive("/") ? "#F62E8E" : "#ECEBED"}
                    stroke={isActive("/") ? "#F62E8E" : "#ECEBED"}
                  />
                </svg>
                INICIO
              </li>
            </NavLink>

            <NavLink to="/explore" className="w-full flex pl-5">
              <li className={isActive("/explore") ? "flex items-center gap-3 p-2 w-40 text-social-pink" : "flex items-center gap-3 p-2 w-40 opacity-20"}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill={isActive("/explore") ? "#F62E8E" : "#ECEBED"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.8885 29.112L30.889 29.1125C31.0061 29.2287 31.0991 29.367 31.1626 29.5193C31.226 29.6716 31.2587 29.835 31.2587 30C31.2587 30.165 31.226 30.3284 31.1626 30.4807C31.0991 30.6331 31.0061 30.7713 30.889 30.8875L30.8875 30.889C30.7713 31.0061 30.6331 31.0991 30.4807 31.1626C30.3284 31.226 30.165 31.2587 30 31.2587C29.835 31.2587 29.6716 31.226 29.5193 31.1626C29.367 31.0991 29.2287 31.0061 29.1125 30.889L29.112 30.8885L24.027 25.7885L23.8703 25.6313L23.6956 25.7684C21.6434 27.3792 19.1092 28.2533 16.5003 28.25H16.5C14.1761 28.25 11.9043 27.5609 9.97206 26.2698C8.03978 24.9787 6.53375 23.1436 5.64442 20.9965C4.75509 18.8495 4.5224 16.487 4.97578 14.2077C5.42915 11.9284 6.54823 9.83477 8.1915 8.1915C9.83477 6.54823 11.9284 5.42915 14.2077 4.97578C16.487 4.5224 18.8495 4.75509 20.9965 5.64442C23.1436 6.53375 24.9787 8.03978 26.2698 9.97206C27.5609 11.9043 28.25 14.1761 28.25 16.5V16.5003C28.2533 19.1092 27.3792 21.6434 25.7684 23.6956L25.6313 23.8703L25.7885 24.027L30.8885 29.112ZM8.80891 11.361C7.79251 12.8821 7.25001 14.6705 7.25001 16.5C7.25001 18.9533 8.22456 21.306 9.95927 23.0407C11.694 24.7755 14.0468 25.75 16.5 25.75C18.3295 25.75 20.1179 25.2075 21.639 24.1911C23.1602 23.1747 24.3458 21.73 25.0459 20.0398C25.746 18.3496 25.9292 16.4897 25.5723 14.6954C25.2154 12.9011 24.3344 11.2529 23.0407 9.95927C21.7471 8.66563 20.0989 7.78466 18.3046 7.42774C16.5103 7.07083 14.6504 7.25401 12.9602 7.95412C11.27 8.65423 9.82531 9.83983 8.80891 11.361Z"
                    fill={isActive("/explore") ? "#F62E8E" : "#ECEBED"}
                    stroke={isActive("/explore") ? "#F62E8E" : "#ECEBED"}
                    stroke-width="0.5"
                  />
                </svg>
                EXPLORAR
              </li>
            </NavLink>

            <NavLink to="/publish" className="w-full flex pl-5">
              <li className={isActive("/publish") ? "flex items-center gap-3 p-2 w-40 text-social-pink" : "flex items-center gap-3 p-2 w-40 opacity-20"}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9V18M18 18V27M18 18H27M18 18H9"
                    stroke={isActive("/publish") ? "#F62E8E" : "#ECEBED"}
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                PUBLICAR
              </li>
            </NavLink>

            <NavLink to="/notifications" className="w-full flex pl-5">
              <li className={isActive("/notifications") ? "flex items-center gap-3 p-2 text-social-pink" : "flex items-center gap-3 p-2 opacity-20"}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 25.5H30L27.8925 23.3925C27.6095 23.1094 27.385 22.7734 27.2319 22.4035C27.0787 22.0337 26.9999 21.6373 27 21.237V16.5C27.0002 14.6384 26.4234 12.8225 25.3488 11.3023C24.2743 9.78215 22.755 8.63245 21 8.0115V7.5C21 6.70435 20.6839 5.94129 20.1213 5.37868C19.5587 4.81607 18.7956 4.5 18 4.5C17.2044 4.5 16.4413 4.81607 15.8787 5.37868C15.3161 5.94129 15 6.70435 15 7.5V8.0115C11.505 9.2475 9 12.582 9 16.5V21.2385C9 22.0455 8.679 22.821 8.1075 23.3925L6 25.5H13.5M22.5 25.5H13.5M22.5 25.5V27C22.5 28.1935 22.0259 29.3381 21.182 30.182C20.3381 31.0259 19.1935 31.5 18 31.5C16.8065 31.5 15.6619 31.0259 14.818 30.182C13.9741 29.3381 13.5 28.1935 13.5 27V25.5"
                    stroke={isActive("/notifications") ? "#F62E8E" : "#ECEBED"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                NOTIFICACIONES
              </li>
            </NavLink>

            <NavLink to="/profile/2" className="w-full flex pl-5">
              <li className={location.pathname.startsWith("/profile") ? "flex items-center gap-3 p-2 w-40 text-social-pink" : "flex items-center gap-3 p-2 w-40 opacity-20"}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 38 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.988636"
                    d="M19.1806 11.179C24.1559 11.1745 35.3431 21.6936 30.1027 28.0105C24.8622 34.3274 14.2089 28.5139 15.2109 22.5398C16.213 16.5656 22.5461 16.9425 23.5079 22.5547C24.4697 28.1669 13.0451 35.3057 8.13322 27.4345C3.22134 19.5634 14.2497 11.1833 19.1806 11.179Z"
                    stroke={
                      location.pathname.startsWith("/profile")
                        ? "#F62E8E"
                        : "#ECEBED"
                    }
                    stroke-width="2"
                  />
                  <path
                    opacity="0.988636"
                    d="M36.3039 11.7348C38.5597 8.04082 34.8805 5.55556 31.709 8.21699C30.3543 9.35384 30.1205 11.6228 30.7973 13.6763C32.8654 13.8422 35.3611 13.2789 36.3039 11.7348Z"
                    stroke={
                      location.pathname.startsWith("/profile")
                        ? "#F62E8E"
                        : "#ECEBED"
                    }
                    stroke-width="2"
                  />
                  <path
                    opacity="0.988636"
                    d="M1.69598 11.9902C-0.559817 8.29619 3.11941 5.81093 6.29087 8.47236C7.64559 9.60921 7.87946 11.8782 7.20262 13.9317C5.1345 14.0976 2.63887 13.5343 1.69598 11.9902Z"
                    stroke={
                      location.pathname.startsWith("/profile")
                        ? "#F62E8E"
                        : "#ECEBED"
                    }
                    stroke-width="2"
                  />
                  <path
                    opacity="0.988636"
                    d="M9.65327 4.89272C8.89816 0.68242 13.2593 -0.424145 15.2521 3.12281C16.1033 4.63792 15.488 6.84147 14.0987 8.54072C12.1 8.00928 9.9689 6.65257 9.65327 4.89272Z"
                    stroke={
                      location.pathname.startsWith("/profile")
                        ? "#F62E8E"
                        : "#ECEBED"
                    }
                    stroke-width="2"
                  />
                  <path
                    opacity="0.988636"
                    d="M28.3238 4.89272C29.0789 0.68242 24.7177 -0.424145 22.725 3.12281C21.8737 4.63792 22.489 6.84147 23.8783 8.54072C25.8771 8.00928 28.0082 6.65257 28.3238 4.89272Z"
                    stroke={
                      location.pathname.startsWith("/profile")
                        ? "#F62E8E"
                        : "#ECEBED"
                    }
                    stroke-width="2"
                  />
                </svg>
                PERFIL
              </li>
            </NavLink>
          </div>

          <div className="w-full flex pl-5 text-xl mb-5">
            <li className="flex items-center gap-3 p-2 w-40 opacity-20">
              X SALIR
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}