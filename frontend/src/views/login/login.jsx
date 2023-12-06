import React, { useState } from "react";
import InputComp from "../../components/InputComp";
import ButtonInSe from "../../components/ButtonInSe";
import { NavLink } from "react-router-dom";
import validation from "./validation";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [id]: value,
    }));

    setError((prevErrors) => ({
      ...prevErrors,
      ...validation(id, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(userInfo));
    console.log(userInfo);
  };


  return (
    <div className="bg-gray flex flex-col justify-between h-screen px-6 m-0">
      <div className="justify-center pt-32">
        <h2 className="font-custom font-semibold text-left text-white text-3xl">
          Iniciar Sesión en
        </h2>
        <img
          className="text-left h-26 w-60 pb-12"
          src="/src/assets/Logo MaskotApp.png"
          alt="Logo MakotApp"
        />
        <form action="" className="flex flex-col">
          <InputComp
            id="email"
            type="email"
            placeholder="Escribí tu email..."
            label="Email"
            required={true}
            onChange={handleChange}
          />
          {error.email && (
            <p className="text-xs font-medium text-white pt-2 font-custom">{error.email}</p>
          )}
          <InputComp
            id="password"
            type="password"
            placeholder="Escribí tu contraseña..."
            label="Contraseña"
            min="6"
            required={true}
            onChange={handleChange}
          />
          {error.password && (
            <p className="text-white font-medium text-xs pt-2 font-custom">
              {error.password}
            </p>
          )}
          <ButtonInSe
          type='submit'
          onClick={handleSubmit}
          disabled={error.email || error.password}
          className={`text-white font-semibold w-80 bg-social-pink rounded-3xl py-1.5 px-8 mt-6 
          ${error.email || error.password 
            ? 'bg-light-gray' 
            : 'active:bg-social-pink'}`}
          ></ButtonInSe>
        </form>
      </div>
      <div className="flex pb-14">
        <span className="text-white px-2">¿No tenés una cuenta?</span>
        <NavLink to="/register" className="text-white font-semibold">
          Regístrate
        </NavLink>
      </div>
    </div>
  );
};

export default Login;