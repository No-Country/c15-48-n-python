import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import validate from "./validation";

const Register = () => {
  const userUrl = "http://127.0.0.1:8000/user/";

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});


  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [event.target.id]: event.target.value,
      })
    );
  };
  console.log("Data Usuario:", userData);


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(userData));
    console.log("Errores:", errors);
    const data = {
      username: userData.name,
      first_name: userData.name,
      email: userData.email,
      password: userData.password2,
    }
    console.log("Data a enviar:", data);
    if (Object.keys(errors).length === 0) {
      axios 
        .post(userUrl, data)
        .then((res) => {console.log(res);})
    }
  }

  return (
    <div className="flex flex-col h-full items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center h-2/5 w-72 text-left">
        <h1 className="text-3xl font-bold font-HK-Grotesk">
          Bienvenido{" "}
          <span className="text-4xl text-social-blue">Maskotero</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-between h-4/5 w-full">
        <form className="flex flex-col text-left gap-2 justify-between">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-bold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Escribí tu email..."
              className="w-72 h-10 border-b  bg-dark-black border-light-gray"
              onChange={handleChange}
            />
            {errors.email && <span className="text-xs">{errors.email}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Escribí tu nombre..."
              className="w-72 h-10 border-b bg-dark-black border-light-gray"
              onChange={handleChange}
            />
            {errors.name && <span className="text-xs">{errors.name}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-bold">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Escribí tu contraseña..."
              className="w-72 h-10 border-b bg-dark-black border-light-gray"
              onChange={handleChange}
            />
            {errors.password && <span className="text-xs">{errors.password}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-bold">Confirmar contraseña</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirmá tu contraseña..."
              className="w-72 h-10 border-b border-light-gray bg-dark-black"
              onChange={handleChange}
            />
            {errors.password2 && <span className="text-xs">{errors.password2}</span>}
          </div>

          <button
            type="submit"
            className="bg-social-blue text-white h-10 rounded-2xl font-bold mt-4"
            onClick={handleSubmit}
            disabled={Object.keys(errors).length !== 0}
          >
            Registrarse
          </button>
        </form>

        <p className="mb-8">
          ¿Ya tenés cuenta?{" "}
          <NavLink to="/login" className="font-bold">
            Iniciar sesión
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
