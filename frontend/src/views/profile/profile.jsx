import React, { useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Publication from "../../components/publication.jsx";
import FollowButton from "../../components/FollowButton.jsx";
import GoBackButton from "../../components/GoBackButton.jsx";
import perfiles_mascotas from "../../assets/placeholder/perfiles_mascotas.js";
import gatos from "../../assets/placeholder/gatos_info.js";
import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import DotsVertical from "../../assets/icons/dots_vertical.svg";
import humanIcon from "../../assets/icons/human_icon.svg";
import banIcon from "../../assets/icons/ban_icon.svg";
import reportIcon from "../../assets/icons/megafone_icon.svg";
import { isMobile } from "react-device-detect";
import FollowersModal from "../../components/followersModal.jsx";

const Profile = () => {
  let perfiles = perfiles_mascotas;
  const user = perfiles[1];
  const params = useParams();
  const navigate = useNavigate();
  const petProfile = perfiles.find((pet) => pet.id === parseInt(params.id));
  const [openModal, setOpenModal] = useState(false);
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  const handleOpenFollowers = () => {
    if(isMobile){
      navigate(`/followers/${params.id}`);
    } else {
      console.log("desktop");
      setOpenModal(true);
    }
  };

  const handleCloseFollowers = () => {
    setOpenModal(false);
  }

  if (!petProfile) {
    return (
      <h2 className="font-custom text-white font-bold text-3xl text-center m-10">
        Perfil no encontrado
      </h2>
    );
  }
  // placeholder publis
  let gatosInfo = gatos;

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <div className="flex justify-between px-8 pt-8 md:max-w-4xl w-full">
        <GoBackButton
          className="w-4 h-4"
          img={arrowLeftIcon}
          alt="flecha hacia la izquierda para volver"
        />
        {params.id != user.id && (
          <button onClick={handleMenu}>
            <img src={DotsVertical} alt="menú de tres puntos" />
          </button>
        )}
        {active && (
          <div className="font-custom text-white bg-dark-gray absolute px-4 py-3 rounded-xl right-6 top-14 w-28 text-xs text-center">
            <button className="flex items-center">
              <img className="mr-2 w-4" src={banIcon} alt="Ícono de bloquear" />
              Bloquear
            </button>
          </div>
        )}
      </div>

      <header className="font-custom md:max-w-4xl">
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
            <NavLink to={`${petProfile.human}`} className="font-semibold pr-1">
              {petProfile.human}
            </NavLink>
            <img className="mb-" src={humanIcon} alt="icono perfil de humano" />
          </div>
        </div>
      </header>
      <div className="flex justify-evenly mx-2 md:max-w-4xl w-full">
        <div className="flex flex-col font-custom text-sm font-semibold">
          <button onClick={handleOpenFollowers} className="flex flex-col">
            <span className="text-white">{petProfile.followers}</span>
            <span className="text-light-gray">Seguidores</span>
          </button>
        </div>
        <div className="flex flex-col font-custom text-sm font-semibold">
          <button onClick={handleOpenFollowers} className="flex flex-col">
            <span className="text-white">{petProfile.followed}</span>
            <span className="text-light-gray">Seguidos</span>
          </button>
        </div>
        {openModal === true && (
          <FollowersModal userData={petProfile} handleClose={handleCloseFollowers} />
        )}
        <FollowButton user={user} paramsId={params.id} />
      </div>

      <div className="flex flex-col items-center text-white font-custom text-sm mt-8 mx-6 justify-center md:max-w-4xl w-full">
        PUBLICACIONES
        <div className="bg-gradient-to-r from-social-pink to-purple h-1 w-5/8 mt-1 rounded mx-6"></div>
      </div>
      <div className="flex flex-col gap-4 md:max-w-4xl">
        {Object.entries(gatosInfo).filter(([key, value]) => key.includes(params.id)).map(([key, value]) => (
          <Publication gato={value} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
