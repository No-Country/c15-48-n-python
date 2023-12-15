import React from "react";
import commentIcon from "../assets/icons/boton_comments_rosa.svg";
import likeIcon from "../assets/icons/boton_like_azul.svg";

const Notification = ({ notification }) => {
  const { type, user, time } = notification;

  return (
    <div className="w-full h-20 flex items-center border-b border-dark-gray">
      <div className="w-16 h-16 flex items-center justify-center">
        <img src={type === "comment" ? commentIcon : likeIcon} alt="" />
      </div>
      <div>
        <p>
          {type === "comment" ? "Comentario de " : "Me gusta de "} <b>{user}</b>
        </p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Notification;
