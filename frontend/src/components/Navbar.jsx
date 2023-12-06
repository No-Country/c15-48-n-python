import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      
      <footer className="h-16 flex items-center justify-around px-4 border-t-2 border-gray-300">
        <NavLink to="/"><img src="./src/assets/feed.png" alt="logo de algo" /></NavLink>
        <NavLink to="/"><img src="./src/assets/Search.png" alt="logo de algo" /></NavLink>
        <NavLink to="/" className="bg-social-pink rounded-xl"><img src="./src/assets/Plus.png" alt="logo de algo" /></NavLink>
        <NavLink to="/"><img src="./src/assets/Alert.png" alt="logo de algo" /></NavLink>
        <NavLink to="/"><img src="./src/assets/Profile maskota.png" alt="logo de algo" /></NavLink>
      </footer>
    </div>
  );
}