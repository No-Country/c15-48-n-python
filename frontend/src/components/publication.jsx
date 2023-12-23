import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Notification from "./notification.jsx";
import Comment from "./comment.jsx";
import GoBackButton from "./GoBackButton.jsx";

import comments from "../assets/placeholder/comments.js";
import gatos_info from "../assets/placeholder/gatos_info.js";

import DotsVertical from "../assets/icons/dots_vertical.svg";
import BotonLike from "../assets/icons/boton_like.svg";
import BotonComentarios from "../assets/icons/boton_comentarios.svg";
import arrowLeftIcon from "../assets/icons/arrow_left.svg";
import deleteIcon from "../assets/icons/delete_icon.svg";
import likeIconBlue from "../assets/icons/boton_like_azul.svg";

const Publication = ({ gato, ids }) => {
  const location = useLocation();
  const route = location.pathname;
  const params = useParams();
  const paramsId = params.id;

  let userRegistered = gatos_info[1];

  const [post, setPost] = useState({
    id: null,
    perfil: "",
    nombre: "",
    fecha: "",
    imagen: "",
    text: "",
  });
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(0);

  useEffect(() => {
    if (gato != undefined) {
      let { perfil, nombre, fecha, imagen, likes, comments, text, id } = gato;
      setLike(likes);
      setComment(comments);
      setPost({
        perfil,
        nombre,
        fecha,
        imagen,
        text,
        id,
      });
      // console.log(gato);
    } else if (paramsId != undefined) {
      const postId = ids.find((id) => id == paramsId);
      if (postId) {
        let gatos = gatos_info;
        const post = gatos[postId];
        setLike(post.likes);
        setComment(post.comments);
        setPost(post);
      }
    }
  }, [gato, ids, paramsId]);
  const { perfil, nombre, fecha, imagen, text, id } = post;

  useEffect(() => {
    if (liked) {
      const timeoutId = setTimeout(() => {
        setLiked(false);
      }, 450);
      return () => clearTimeout(timeoutId);
    }
  }, [liked]);

  const handleLike = () => {
    setLike(like + 1);
    setLiked(true);
  };

  const [select, setSelect] = useState("likes");
  const handleSelect = () => {
    select === "likes" ? setSelect("comments") : setSelect("likes");
  };
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    active ? setActive(false) : setActive(true);
  };
  return (
    <>
      <div
        className={`pb-4 ${
          route.includes("posts") ? "" : "border-b-2 border-gray"
        }  mt-4 max-w-4xl mx-6 relative`}>
        {route.includes(`posts/${paramsId}`) && (
          <header className='flex items-center my-8'>
            <GoBackButton
              className='rounded-3xl border border-dark-gray p-2 mr-16'
              img={arrowLeftIcon}
              alt='ícono volver atrás'
            />
            <h1 className='text-light-white font-custom text-sm font-semibold'>
              PUBLICACIÓN
            </h1>
          </header>
        )}
        <div className='flex h-10 w-full'>
          <div className='h-full'>
            <div className='w-11 h-11 rounded-full overflow-hidden'>
              <Link
                to={paramsId ? `/profile/${paramsId}` : `/profile/${gato.id}`}>
                <img src={perfil} className='object-cover w-full h-full' />
              </Link>
            </div>
          </div>
          <div className='w-full text-black flex flex-col items-start justify-center ml-2'>
            <Link
              to={paramsId ? `/profile/${paramsId}` : `/profile/${gato.id}`}>
              <p className='text-base text-white'>{nombre}</p>
              <p className='text-sm text-light-gray'>{fecha}</p>
            </Link>
          </div>
          {route.includes(`profile/${userRegistered.id}`) && (
            <button
              onClick={handleMenu}
              className='h-full w-10 flex items-center justify-end'>
              <img src={DotsVertical} className='p-2' />
            </button>
          )}
          {active && (
            <div className='font-custom text-white bg-dark-gray absolute px-4 py-2 rounded-xl right-0 top-9 w-28 text-xs text-center'>
              {userRegistered ? (
                <button className='flex items-center '>
                  <img
                    className='mr-2 w-4'
                    src={deleteIcon}
                    alt='Ícono de borrar post'
                  />
                  Eliminar
                </button>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {text && (
          <div className='text-sm text-left mt-2 md:text-base'>
            <p className='text-white'>{text}</p>
          </div>
        )}
        <div className='py-3'>
          <img src={imagen} className='object-cover w-full rounded-2xl' />
        </div>
        <div className='flex text-white justify-between items-center'>
          <div className='flex justify-between items-center gap-4'>
            <button
              className={`flex gap-2 items-center ${
                liked ? "text-social-blue" : "text-white"
              }`}
              onClick={handleLike}>
              <img
                className='h-3'
                src={liked ? likeIconBlue : BotonLike}
                alt='botón de dar like'
              />{" "}
              {like}
            </button>
            <button className={`flex gap-2 items-center`}>
              <img src={BotonComentarios} /> {comment}
            </button>
          </div>
          {(route === "/" || route.includes(`profile/${paramsId}`)) && (
            <Link to={`/posts/${id}`}>
              <li className='text-light-gray font-custom'>Ver actividad</li>
            </Link>
          )}
        </div>
      </div>
      {route.includes(`posts/${paramsId}`) && (
        <div className='flex items-center text-light-white text-xs mx-6'>
          <div
            className='pb-1 text-center flex flex-col whitespace-nowrap w-full'
            onClick={handleSelect}>
            <span className=''>ME GUSTA ({like})</span>
            <div
              className={`${
                select === "likes"
                  ? "h-1 bg-social-blue "
                  : "h-0.5 bg-dark-gray"
              } rounded mt-3.5 w-full transition-all`}></div>
          </div>
          <div
            className='pb-1 text-center flex flex-col whitespace-nowrap w-full'
            onClick={handleSelect}>
            <span>COMENTARIOS ({comment})</span>
            <div
              className={`${
                select === "comments"
                  ? "h-1 bg-social-pink"
                  : "h-0.5 bg-dark-gray"
              } rounded mt-3.5 w-full transition-all`}></div>
          </div>
        </div>
      )}
      {like != 0 &&
        select === "likes" &&
        route.includes(`posts/${paramsId}`) &&
        comments.map((comment) => (
          <Notification key={comment.id} notification={comment} />
        ))}
      {comment != 0 &&
        select === "comments" &&
        route.includes(`posts/${paramsId}`) &&
        comments.map((comment, key) => <Comment comment={comment} key={key} />)}
    </>
  );
};

export default Publication;
