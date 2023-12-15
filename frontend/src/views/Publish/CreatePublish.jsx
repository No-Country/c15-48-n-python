import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import calculateTime from "./calculateTime.js";
import gatos from "../../assets/placeholder/gatos_info.js";
import profiles from "../../assets/placeholder/perfiles_mascotas.js";
import validate from "./validate.js";
import plus_icon from "../../assets/icons/plus.svg";
import close_icon from "../../assets/icons/close_icon.svg";
import img_icon from "../../assets/icons/image_icon.svg";
import vid_icon from "../../assets/icons/video_icon.svg";

const CreatePublish = () => {
  const user = profiles[1];
  const petsPosts = gatos;
  // const agregarPost = (newPost) => {
  //   const nuevoId = Object.keys(petsPosts).length + 1;
  //   petsPosts[nuevoId] = {
  //     id: nuevoId,
  //     ...newPost,
  //   };
  // };

  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [video, setVideo] = useState();
  const ultId = Math.max(...Object.keys(petsPosts));
  const newPostId = ultId + 1;

  const [postErrors, setPostError] = useState({
    perfil: "",
    nombre: "",
    fecha: "",
    imagen: "",
    video: "",
    text: "",
  });

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleImg = (e) => {
    const selectedImg = Array.from(e.target.files);
    console.log(selectedImg);
    const errors = selectedImg.map((img) =>
      validate("filesImg", img, selectedImg.length)
    );
    console.log(errors);

    setPostError((prevErrors) => ({
      ...prevErrors,
      imagen: errors.some((error) => error.imagen),
    }));

    setFiles((prevImg) => [...prevImg, ...selectedImg]);
  };

  const handleVid = (e) => {
    const vid = e.target.files[0];
    setPostError((prevErrors) => ({
      ...prevErrors,
      ...validate("fileVid", vid),
    }));
    postErrors.video
      ? console.log(postErrors.video)
      : console.log("sin errores de video");

    setVideo(vid);
  };

  const handleRemoveImage = (index) => {
    setFiles((prevImg) => prevImg.filter((_, i) => i !== index));
  };

  const handleRemoveVideo = () => {
    setVideo(null);
  };

  const createdDate = new Date();
  const timeAgo = calculateTime(createdDate);

  const newPost = {
    id: newPostId,
    perfil: user.profile,
    nombre: user.name,
    fecha: timeAgo,
    imagen: files,
    video: video,
    likes: 0,
    comments: 0,
    text: text,
  };

  console.log(newPost);

  const handlePublish = (e) => {
    e.preventDefault();
    let newErrors = {};
    newErrors.text = validate("text", text).text;
    newErrors.imagen = validate("filesImg", files).imagen;
    newErrors.video = validate("fileVid", video).video;

    console.log(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      setPostError((prevErrors) => ({ ...prevErrors, ...newErrors }));
      console.log(
        "El formulario contiene errores. Por favor, corrige los campos."
      ); // esto se saca
    } else {
      alert("Formulario publicado correctamente"); // esto tmb

      // agregarPost(newPost);
      petsPosts.id = newPost;

      console.log("petsposts" + petsPosts);
      console.log("posterrors" + postErrors);
    }
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
          type="submit"
          disabled={Object.values(postErrors).some((error) => error)}
        >
          <Link to="/">Publicar</Link>
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
              id="filesImg"
              onChange={handleImg}
              multiple
              accept="image/*"
            />
            <img
              className="mr-4 w-5 h-5"
              src={img_icon}
              alt="ícono de agregar imagen"
            />
            <input
              className="absolute top-0 left-0 opacity-0 cursor-pointer z-1 ml-11 w-6"
              type="file"
              id="fileVid"
              onChange={handleVid}
              accept="video/*"
            />
            <img
              className="w-4 h-4"
              src={vid_icon}
              alt="ícono de agregar imagen"
            />
          </div>
        )}

      </div>
        {files.length > 0 && (
          <div className="flex flex-col mt-9">
            {files.map((img, index) => (
              <div key={index} className="relative mr-2">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Imagen seleccionada ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl mb-4"
                />
                <button
                  className="absolute top-0 right-0 text-white p-1 bg-dark-gray rounded-full m-2"
                  onClick={() => handleRemoveImage(index)}
                >
                  <img src={close_icon} alt="" />
                </button>
              </div>
            ))}
          </div>
        )}
        {video && (
          <div className="relative mr-2">
            <video>
              <source src={URL.createObjectURL(video)} type="video/mp4"/>
            </video>
            <button
                  className="absolute top-0 right-0 text-white p-1 bg-dark-gray rounded-full m-2"
                  onClick={handleRemoveVideo}
                >
                  <img src={close_icon} alt="" />
                </button>
          </div>
        )}
    </div>
  );
};

export default CreatePublish;
