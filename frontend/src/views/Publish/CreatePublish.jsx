import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import calculateTime from "./calculateTime.js";
import plus_icon from "../../assets/icons/plus.svg";
import profiles from "../../assets/placeholder/perfiles_mascotas.js";
import close_icon from "../../assets/icons/close_icon.svg";
import img_icon from "../../assets/icons/image_icon.svg";
import vid_icon from "../../assets/icons/video_icon.svg";
import gatosInfo from "../../assets/placeholder/gatos_info.js";

const CreatePublish = () => {
  const user = profiles[1];
  const petsPosts = gatosInfo;

  const [text, setText] = useState("");
  const [file, setFile] = useState();

  const ultId = Math.max(...Object.keys(petsPosts));
  const newPostId = ultId + 1;

  const handleText = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleImg = (e) => {
    setFile(e.target.files[0]);
  };

  const createdDate = new Date(); // Puedes reemplazar esto con tu fecha específica
  const timeAgo = calculateTime(createdDate);
  console.log(timeAgo);

  const newPost = {
    id: newPostId,
    perfil: user.profile,
    nombre: user.name,
    fecha: timeAgo,
    imagen: file,
    likes: 0,
    comments: 0,
    text: text,
  };

  console.log(newPost);

  const handlePublish = () => {
    petsPosts.postAlex2 = newPost;
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="mx-6">
      <div className="flex justify-between mt-8  items-center font-sm">
        <button onClick={handleBack} className="font-semibold text-social-blue">
          Deshacer
        </button>
        <button
          onClick={handlePublish}
          className="w-30 text-white font-semibold bg-gradient-to-r from-social-pink to-purple text-xs px-3 py-1 rounded-3xl disabled:opacity-50"
        >
          <Link to='/'>Publicar</Link>
        </button>
      </div>
      <div className="flex mt-10">
        <Link to={`/profile/${user.id}`}>
          <img
            className="rounded-full w-8 h-8 mr-3"
            src={user.profile}
            alt={`Foto de perfil del usuario ${user.name}`}
          />
        </Link>
        <form className="w-full">
          <textarea
            name="text"
            id="text"
            className="w-full bg-dark-black text-light-white placeholder:text-light-gray placeholder:font-custom placeholder:font-medium focus:border-none active:border-none active:border-0"
            placeholder="Escribe algo bonito..."
            onChange={handleText}
          />
        </form>
      </div>
      <div className="flex ">
        <button
          onClick={handleClick}
          className="rounded-full border border-dark-gray p-2 w-8 h-8 mr-3"
        >
          {isActive ? (
            <img className="mr-4" src={close_icon} alt="icono de cerrar" />
          ) : (
            <img src={plus_icon} alt="icono de agregar archivo" />
          )}
        </button>
        {isActive && (
          <div className="transition-opacity duration-700 flex bg-dark-gray rounded-full relative overflow-hidden w-20 py-1.5 px-4 justify-evenly items-center">
            <input
              className="absolute top-0 left-0 opacity-0 cursor-pointer z-1 ml-3 w-6"
              type="file"
              onChange={handleImg}
            />
            <img
              className="mr-4 w-5 h-5"
              src={img_icon}
              alt="ícono de agregar imagen"
            />
            <input
              className="absolute top-0 left-0 opacity-0 cursor-pointer z-1 ml-11 w-6"
              type="file"
              onChange={handleImg}
            />
            <img
              className="w-4 h-4"
              src={vid_icon}
              alt="ícono de agregar imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePublish;
