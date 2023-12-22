import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GoBackButton from "../../components/GoBackButton.jsx";
import humanData from "../../assets/placeholder/humans_data.js";
import perfiles_mascotas from "../../assets/placeholder/perfiles_mascotas.js";
import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import plusIcon from "../../assets/icons/plus.svg";
import deleteIcon from "../../assets/icons/delete_icon.svg";
import axios from "axios";

export default function HumanData() {
  const humans = humanData;
  const params = useParams();
  const humanProfile = humans.find((human) => human.name === params.human);
//   console.log(params);
  const pets = perfiles_mascotas;
//   pets.map((pet) => console.log(pet));
  const [ownerUser, setOwnerUser] = useState(null);

  // const userData = useSelector((state) => state.user.userData);
  // console.log(userData);

  // let humanUrl = `http://127.0.0.1:8000/api/user/${params.human}/`
  let humanUrl = `http://127.0.0.1:8000/api/user/sergiomusta2/`; // tendria que ir al nombre no al username xq no tiene

  const token = useSelector((state) => state.user.tokenUser);
//   console.log("Token link:", token.access);
  
  useEffect(() => {
    axios
      .get(humanUrl)
      .then((response) => {
        setOwnerUser(response.data);
        console.log(ownerUser);
      })
      .catch((error) => {
        console.error("Error al obtener datos del dueño:", error);
      });

    // axios.put(
    //   `http://127.0.0.1:8000/api/user/${ownerUser.username}/`,
    //   {
    //     username: ownerUser.username,
    //     first_name: ownerUser.first_name,
    //     email: ownerUser.email,
    //     password: "sergioMusta123@",
    //     pets: []
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
  }, []);

//   console.log(ownerUser.pets);

  const handleDelete = () => {};

  return (
    <div>
      <header className="flex m-8 items-center mx-6">
        <GoBackButton
          className="rounded-3xl border border-dark-gray p-2 mr-14"
          img={arrowLeftIcon}
          alt="ícono volver atrás"
        />
        <h2 className="text-white font-custom text-sm mx-3 text-center">
          Mis Maskotas
        </h2>
      </header>
      <div className="mx-6 text-white font-custom mb-12">
        <h3 className="font-semibold mb-1">Datos del humano:</h3>
        <p className="mb-1">{humanProfile.name}</p>
        <p className="mb-1">{humanProfile.email}</p>
      </div>
      <div className="mx-5 my-8 text-white font-custom flex items-center justify-between">
        <h3 className="text-lg font-bold">Mis MaskotAs</h3>
        <Link to="/crearMaskota">
          <img
            className="h-10 bg-gradient-to-r from-social-pink to-purple rounded-full p-1.5"
            src={plusIcon}
            alt="icono agregar mascota"
          />
        </Link>
      </div>
      {
        humanProfile.pets.map((pet) => (
          <div
            className="mx-5 font-custom text-white flex items-center"
            key={`${humanProfile.id}-${pet.id}`}
          >
            <img
              className="rounded-full w-10 h-10"
              src={pet.profile}
              alt="foto de perfil de mascota"
            />
            <div className="flex justify-between w-full items-center">
              <div className="mx-2.5 w-50">
                <p className="font-medium ">
                  {pet.name}{" "}
                  <span className="text-sm font-normal">({pet.type})</span>
                </p>
                <p className="font-sm text-light-gray font-medium">
                  @{pet.username}
                </p>
              </div>
              <button
                className="bg-dark-gray rounded-full"
                onClick={handleDelete}
              >
                <img
                  className="h-10 w-10 p-3"
                  src={deleteIcon}
                  alt="icono borrar mascota"
                />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
//((ownerUser !== null && ownerUser.pets !== null) || ownerUser.pets.length !== 0) 

// ownerUser != null ? ownerUser.first_name : ""
// ownerUser != null ? ownerUser.email : ""