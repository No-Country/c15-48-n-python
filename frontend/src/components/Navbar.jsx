import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-16 flex items-center justify-around px-4 border-t-2 border-gray-300">

        <NavLink to="/home"><img className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100" src="./src/assets/home 2.svg" alt="logo de algo"/></NavLink>
        <NavLink to="/explore"><img className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100" src="./src/assets/search.svg" alt="logo de algo" /></NavLink>
        <NavLink to="/publish" className="bg-social-pink rounded-xl"><img className="hover:opacity-60" src="./src/assets/Plus.svg" alt="logo de algo" /></NavLink>
        <NavLink to="/notifications"><img className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100" src="./src/assets/Alert.svg" alt="logo de algo" /></NavLink>
        <NavLink to="/profile"><img className="active:opacity-100 opacity-20 hover:opacity-100 focus:opacity-100" src="./src/assets/Group 1.svg" alt="logo de algo" /></NavLink>
            
    
    </div>

    
      
      
    






  );
}