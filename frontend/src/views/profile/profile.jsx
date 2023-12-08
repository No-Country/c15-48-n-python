import React, { useState } from "react";
import Publication from "../../components/publication.jsx";
import perfiles_mascotas from "../../assets/placeholder/perfiles_mascotas.js";
import arrowLeft from "../../assets/Arrow Left.png";
import DotsVertical from "../../assets/Dots Vertical.svg";
import FollowButton from "../../components/FollowButton.jsx";
import { Link, useParams, NavLink } from "react-router-dom";
import human_icon from "../../assets/placeholder/human_icon.svg";
import gatos from "../../assets/placeholder/gatos_info.js";

export default function Profile() {
  let perfiles = perfiles_mascotas;

  const params = useParams();
  const petProfile = perfiles.find((pet) => pet.id === parseInt(params.id));

  console.log(perfiles);
  console.log(params);
  console.log(petProfile);

  if (!petProfile) {
    return (
      <h2 className="font-custom text-white font-bold text-3xl text-center m-10">
        Perfil no encontrado
      </h2>
    );
  }

  // estados de pestañas Fotos y Videos
  const [select, setSelect] = useState("fotos");

  const handleClick = () => {
    if (select === undefined) {
      console.error("Estado indefinido");
    } else if (select === "fotos") {
      setSelect("videos");
    } else if (select === "videos") {
      setSelect("fotos");
    }
  };
  console.log(select);

  // placeholder publis
  let gatosInfo = gatos;

  return (
    <div>
      <div className="flex justify-between mx-8 pt-8">
        <img
          className="w-4 h-4"
          src={arrowLeft}
          alt="flecha hacia la izquierda para volver"
        />
        <img src={DotsVertical} alt="menú de tres puntos" />
      </div>

      <Link key={petProfile.id} to={`${petProfile.id}`}>
        <header className="font-custom">
          <div className="flex flex-col justify-center text-center text-white">
            <img
              className="rounded-full w-36 h-36 border-solid border-2 p-1 m-auto my-4 border-white"
              src={petProfile.profile}
              alt="foto de perfil"
            />
            <h2 className="font-bold text-lg">{petProfile.name}</h2>
            <p className="text-xs font-semibold text-light-gray mb-1.5">
              @{petProfile.username}
            </p>
            <p className="text-sm font-semibold mb-1.5">
              Nací el: {petProfile.date}
            </p>
            <div className="text-sm mb-12 flex justify-center">
              <p className="pr-1">Mi dueño es:</p>
              <NavLink
                to={`${petProfile.human}`}
                className="font-semibold pr-1"
              >
                {petProfile.human}
              </NavLink>
              <img className='mb-' src={human_icon} alt="icono perfil de humano" />
            </div>
          </div>
        </header>
        <div className="flex justify-evenly">
          <div className="flex flex-col font-custom text-sm font-semibold">
            <span className="text-white">{petProfile.followers}</span>
            <span className="text-light-gray">Seguidores</span>
          </div>
          <div className="flex flex-col font-custom text-sm font-semibold">
            <span className="text-white">{petProfile.followed}</span>
            <span className="text-light-gray">Seguidos</span>
          </div>
          <FollowButton />
        </div>
      </Link>

      <div className="flex text-white font-custom font-semibold mt-8 mx-6 justify-center border-solid border-light-gray border-b">
        <button
          onClick={handleClick}
          className={`px-8 pb-1 text-sm text-center w-1/2
        ${
          select === "fotos"
            ? "border-b-4 border-solid border-social-blue rounded-sm w-36 "
            : ""
        }`}
        >
          Fotos
        </button>
        <button
          onClick={handleClick}
          className={`px-8 pb-1 text-sm text-center w-1/2
        ${
          select === "videos"
            ? "border-b-4 border-solid border-social-blue rounded-sm w-36"
            : ""
        }`}
        >
          Videos
        </button>
      </div>
      {Object.entries(gatosInfo).map(([key, value]) => (
        <Publication gato={value} key={key} />
      ))}
    </div>
  );
}
