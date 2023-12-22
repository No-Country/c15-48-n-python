import React from "react";

const Follower = ({ perfil }, activeButton) => {
  return (
    <div className="flex items-center">
      <div className="flex w-full">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={perfil.profile} />
        </div>
        <div className="ml-2 text-sm">
          <p>{perfil.name}</p>
          <p className="text-light-gray">{perfil.username}</p>
        </div>
        <div className="ml-2 flex items-start">
          {perfil.FollowedByMe === false ? (
            <button className="text-sm text-social-blue">Seguir</button>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="flex h-full w-32">
        <button className="text-sm bg-light-gray text-white w-full h-full rounded-3xl">
          Eliminar
        </button> 
      </div>
    </div>
  );
};

export default Follower;
