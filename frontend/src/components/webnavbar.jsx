import { NavLink } from "react-router-dom";
export default function Webnavbar() {
  return (
    <div className="h-screen flex-col lg:flex-row w-80 border-r-2 border-gray hidden md:flex">
      <nav className="w-full mt-20">
        <ul className="w-full text-white flex flex-col justify-between h-full">
          <div className="flex flex-col w-full gap-5 text-xl">
            <NavLink to="/" className="w-full flex pl-5">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2 w-40">
                <img src="./src/assets/navegaweb/home 2.svg" alt="home" />
                INICIO
              </li>
            </NavLink>

            <NavLink to="/explore" className="w-full flex pl-5">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2 w-40">
                <img src="./src/assets/navegaweb/search.svg" alt="busqueda" />
                EXPLORAR
              </li>
            </NavLink>

            <NavLink to="/publish" className="w-full flex pl-5">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2 w-40">
                <img src="./src/assets/navegaweb/Plus.svg" alt="agregar" />
                PUBLICAR
              </li>
            </NavLink>

            <NavLink to="/notifications" className="w-full flex pl-5">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2 w-40">
                <img
                  src="./src/assets/navegaweb/Alert.svg"
                  alt="notificaciones"
                />
                NOTIFICACIONES
              </li>
            </NavLink>

            <NavLink to="/profile/1" className="w-full flex pl-5">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2 w-40">
                <img src="./src/assets/navegaweb/Group 1.svg" alt="perfil" />
                PERFIL
              </li>
            </NavLink>
          </div>

          <div className="w-full flex pl-5 text-xl mb-5">
            <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2 w-40">
              <img src="./src/assets/navegaweb/equis.svg" alt="salir" />
              SALIR
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
