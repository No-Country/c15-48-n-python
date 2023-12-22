import React, { useState } from "react";
import perfiles_mascotas from "../assets/placeholder/perfiles_mascotas";
import arrowLeftIcon from "../assets/icons/arrow_left.svg";
import Follower from "../components/Follower";

const FollowersModal = ({ userData, handleClose }) => {
  const [activeButton, setActiveButton] = useState("seguidores");

  const getButtonStyle = (buttonId) => {
    const isActive = activeButton === buttonId;
    return isActive
      ? "w-full border-b-2 border-social-blue pb-1"
      : "w-full pb-1 border-b-2 border-dark-gray";
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="h-full w-full fixed top-0 z-50 flex justify-center items-center">
      <div className="w-1/3 h-1/2 bg-dark-black border border-light-gray text-white rounded-2xl p-4 overflow-hidden">
        <div className="flex justify-center items-center h-20 relative">
          <button
            onClick={() => handleClose()}
            className="px-2 py-2 border border-gray rounded-full absolute left-0 ml-4"
          >
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

        <div className="w-full max-w-4xl h-full gap-4 flex flex-col overflow-auto overflow-x-hidden px-4 pt-4">
          {activeButton === "seguidores" &&
            perfiles_mascotas
              .filter((perfil) => perfil.FollowsMe === true)
              .map((perfil) => (
                <Follower
                  key={perfil.id}
                  perfil={perfil}
                  activeButton={activeButton}
                />
              ))}
          {activeButton === "seguidos" &&
            perfiles_mascotas
              .filter((perfil) => perfil.FollowedByMe === true)
              .map((perfil) => (
                <Follower
                  key={perfil.id}
                  perfil={perfil}
                  activeButton={activeButton}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default FollowersModal;
