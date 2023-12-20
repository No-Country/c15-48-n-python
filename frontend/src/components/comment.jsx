import React, { useState } from "react";
import defaultImg from "../assets/imageprofile.png";
import dotsVertical from "../assets/icons/dots_vertical.svg";
import reportIcon from "../assets/icons/megafone_icon.svg";
import deleteIcon from "../assets/icons/delete_icon.svg";

export default function Comment({ comment }) {
  let currentUser = null
  let { profile, user, time, text } = comment;
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <div className="flex justify-between mx-6 relative">
      <div className="flex font-custom  my-4 items-center">
        <img className="h-12 mr-2 rounded-full" src={profile ? profile : defaultImg} alt={`Foto de perfil de ${user}`}/>
        <div className="flex flex-col leading-5">
          <p className="text-white font-medium">{user}</p>
          <p className="text-white">{text}</p>
          <p className="font-sm text-light-gray">{time}</p>
        </div>
      </div>
      <button className="w-6 flex justify-end items-center" onClick={handleMenu}><img src={dotsVertical} alt="Ícono de tres puntos" /></button>
     {(active) && (
        <div className="font-custom text-white bg-dark-gray absolute px-4 py-3 rounded-xl right-2 top-0 w-24 text-xs">
          <button className="flex items-center"><img className="mr-2 w-4" src={reportIcon} alt="Ícono de megáfono" />Reportar</button>
          {(currentUser && <button className="flex items-center mt-2"><img className="mr-2 w-4" src={deleteIcon} alt="Ícono de borrar" />Eliminar</button>)}
        </div>
      )}
    </div>
  );
}
