import React, { useState } from "react";
import perfiles_mascotas from "../../assets/placeholder/perfiles_mascotas.js";
import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import Follower from "../../components/Follower.jsx";

const Followers = (buttonId) => {
  const userData = perfiles_mascotas[0];
  const [activeButton, setActiveButton] = useState(buttonId);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonStyle = (buttonId) => {
    const isActive = activeButton === buttonId;
    return isActive
      ? "w-full border-b-2 border-social-blue pb-1"
      : "w-full pb-1 border-b-2 border-dark-gray";
  };

  const handleBack = () => {
    window.history.back();
  }

  return (
    <div className="flex flex-col justify-center w-full h-full text-white gap-4 items-center">
      <div className="w-full max-w-4xl px-4">
        <div className="flex justify-center items-center h-20 relative">
          <button onClick={handleBack} className="px-2 py-2 border border-gray rounded-full absolute left-0">
            <img src={arrowLeftIcon} alt="Atrás" />
          </button>
          <p className="text-center text-lg w-full">@{userData.username}</p>
        </div>

        <div className="flex h-10">
          <button
            className={getButtonStyle("seguidores")}
            id="seguidores"
            onClick={() => handleButtonClick("seguidores")}
          >
            Seguidores
          </button>
          <button
            className={getButtonStyle("seguidos")}
            id="seguidos"
            onClick={() => handleButtonClick("seguidos")}
          >
            Seguidos
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl h-full gap-4 flex flex-col overflow-auto px-4">
        {activeButton === "seguidores" && 
            perfiles_mascotas.filter((perfil) => perfil.FollowsMe === true).map((perfil) => (
            <Follower key={perfil.id} perfil={perfil} activeButton={activeButton}/>
            ))
        }
        {activeButton === "seguidos" &&
            perfiles_mascotas.filter((perfil) => perfil.FollowedByMe === true).map((perfil) => (
            <Follower key={perfil.id} perfil={perfil} activeButton={activeButton}/>
            ))
        }
      </div>
    </div>
  );
};

export default Followers;
