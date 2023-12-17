import React from "react";
import { useToggle } from "../hooks/useToggle.jsx";
import { Link } from "react-router-dom";

export default function FollowButton({ user, paramsId }) {
  const [toggle, setToggle] = useToggle();

  return (
    <div>
      {user.id == paramsId ? (
        <Link to='/crearMaskota'>
          <button className="px-8 py-1.5 rounded-3xl text-white font-semibold font-custom border-1 border-light-gray text-sm leading-6">
            Editar perfil
          </button>
        </Link>
      ) : (
        <button
          onClick={setToggle}
          className={` px-8 py-1.5 rounded-3xl text-white font-semibold font-custom 
      ${toggle ? "bg-social-pink" : "bg-social-blue"}`}
        >
          {toggle ? "Siguiendo" : "Seguir"}
        </button>
      )}
    </div>
  );
}
