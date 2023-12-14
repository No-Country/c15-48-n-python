import { NavLink } from "react-router-dom";
export default function Webnavbar() {
  return (
    <div className="h-screen w-96 flex flex-col lg:flex-row">
      
      <nav>
        <ul className="space-y-5 text-white flex flex-col justify-between h-full">
          <div>
            <NavLink to="/" >
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2">
              <img src="./src/assets/navegaweb/home 2.svg" alt="home" />
              INICIO
            </li>
              </NavLink>
            
            <NavLink to="/explore">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2">
              <img src="./src/assets/navegaweb/search.svg" alt="busqueda" />
              EXPLORAR
            </li>
              </NavLink>

            <NavLink to="/publish">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2">
              <img src="./src/assets/navegaweb/Plus.svg" alt="agregar" />
              PUBLICAR
            </li>
              </NavLink>
            
            <NavLink to="/notifications">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2">
              <img
                src="./src/assets/navegaweb/Alert.svg"
                alt="notificaciones"
              />
              NOTIFICACIONES
            </li>
              </NavLink>

            <NavLink to="/profile">
              <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2">
              <img src="./src/assets/navegaweb/Group 1.svg" alt="perfil" />
              PERFIL
            </li>
              </NavLink>
          </div>

          <div>
            <li className="flex items-center gap-3 active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100 p-2">
              <img src="./src/assets/navegaweb/equis.svg" alt="salir" />
              SALIR
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
