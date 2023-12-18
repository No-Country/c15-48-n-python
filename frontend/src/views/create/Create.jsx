import React, { useState } from "react";
import InputComp from "../../components/InputComp";
import "../../App.css";
import GoBackButton from "../../components/GoBackButton";
import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import profilePlaceholder from "../../assets/profile_placeholder.png";
import SubmitGradientBtn from "../../components/SubmitGradientBtn";
import validate from "../create/validate.js";

export default function Create() {
  const tipos = ["Ave", "Gato", "Perro", "Conejo", "Caballo", "Otro"];

  const [selectedImage, setSelectedImage] = useState(null);

  const [petProfile, setPetProfile] = useState({
    petName: "",
    type: "",
    petNick: "",
    date: null,
    petProfile: null,
  });

  const [error, setError] = useState({});

  console.log(error)
  // pedir ayuda !!

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPetProfile((prevProfile) => ({
          ...prevProfile,
          profile: file,
        }));
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    // usar esta estructura para crear el perfil, hacer una validacion antes de crear
    // la mascota y subir la foto de perfil a cloud. que cee un nuevo preset con el username
    // id: 1,
    // name: 'Jacob',
    // username: 'jacob.thewin',
    // human: 'Tamara Sandi',
    // followers: 6281,
    // followed: 3457,
    // date: '12/08/2012',
    // profile: perfilJacob,
    // type: 'Perro'
        
    setPetProfile((prevPetProfile) => ({
      ...prevPetProfile,
      [id]: value,
    }));
    setError(validate(petProfile));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setError((prevErrors) => ({
      ...prevErrors,
      ...validate(id, value),
    }));
  };

  console.log(petProfile);
  // const handleName = (e) => {
  //   const { value } = e.target;
  //   // setPetProfile((prevProfile) => ({
  //   //   ...prevProfile,
  //   //   name: value,
  //   // }));
  //   setError((prevErrors) => ({
  //     ...prevErrors,
  //     ...validate(value),
  //   }));
  // };

  // const handleSelect = (e) => {
  //   const { value } = e.target;
  //   setPetProfile((prevProfile) => ({
  //     ...prevProfile,
  //     type: value,
  //   }));
  // };

  // const handleNick = (e) => {
  //   const { value } = e.target;
  //   setPetProfile((prevProfile) => ({
  //     ...prevProfile,
  //     username: value,
  //   }));
  //   setError((prevErrors) => ({
  //     ...prevErrors,
  //     ...validate(value),
  //   }));
  // };

  // const handleDate = (e) => {
  //   const { value } = e.target;
  //   setPetProfile((prevProfile) => ({
  //     ...prevProfile,
  //     date: value,
  //   }));

  // };

  return (
    <div>
      <header className="flex m-8 items-center mx-6">
        <GoBackButton
          className="rounded-3xl border border-dark-gray p-2 mr-8"
          img={arrowLeftIcon}
          alt="ícono volver atrás"
        />
        <h1 className="text-light-white font-custom text-sm text-center">
          CREAR PERFIL MASKOTA
        </h1>
      </header>
      <form action="" className="form mx-6 font-custom">
        <InputComp
          label="Nombre de tu Maskota:"
          type="text"
          id="petName"
          placeholder="Ingresá el nombre de tu maskota..."
          required={true}
          onChange={handleChange}
          // value={petProfile.name}
        />
        {error.name && (
          <p className="text-xs font-medium text-white pt-2 font-custom">
            {error.name}
          </p>
        )}

        <div className="my-3.5 flex flex-col">
          <label htmlFor="type" className="text-white text-left font-semibold">
            Tipo de maskota:
          </label>
          <select
            name="type"
            id="type"
            className="w-40 mt-1.5 rounded-3xl h-9 p-2 text-white bg-dark-gray"
            onChange={handleChange}
            // value={petProfile.type}
          >
            <option key="default" value="default">
              Seleccionar
            </option>
            {tipos.map((tipo) => (
              <option key={tipo} value={tipo} className="">
                {tipo}
              </option>
            ))}
          </select>
          {error.type && (
            <p className="text-xs font-medium text-white pt-2 font-custom">
              {error.type}
            </p>
          )}
        </div>
        <InputComp
          label="Nick de tu Maskota:"
          type="text"
          id="petNick"
          placeholder="Elegí un nick único para tu maskota..."
          required={true}
          // value={petProfile.username}
          onChange={handleChange}
        />
        {error.username && (
          <p className="text-xs font-medium text-white pt-2 font-custom">
            {error.username}
          </p>
        )}
        <div className="dateContainer my-3.5 flex flex-col">
          <label
            htmlFor="petDate"
            className="text-white text-left font-semibold"
          >
            Fecha de nacimiento:
          </label>
          <input
            type="date"
            id="petDate"
            required={true}
            className="w-40 mt-1.5 bg-dark-black text-white font-thin"
            // value={petProfile.date}
            onChange={handleChange}
          />
          {error.date && (
            <p className="text-xs font-medium text-white pt-2 font-custom">
              {error.date}
            </p>
          )}
        </div>
        <div className="my-3.5 flex flex-col">
          <label
            htmlFor="petProfile"
            className="text-white text-left font-semibold"
          >
            Agregar foto de perfil:
          </label>
          <div className="relative overflow-hidden rounded-full w-36 h-36 border-solid border-2 p-1 m-auto mt-2 border-white">
            <input
              type="file"
              id="petProfile"
              required={false}
              className="w-full h-full mt-1.5 absolute top-0 left-0 opacity-0 cursor-pointer z-1"
              onChange={handleImage}
            />
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Perfil"
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              <img
                src={profilePlaceholder}
                alt="Perfil Placeholder"
                className="object-cover w-full h-full rounded-full"
              />
            )}
          </div>
          {error.profile && (
            <p className="text-xs font-medium text-white pt-2 font-custom">
              {error.profile}
            </p>
          )}
        </div>
        <SubmitGradientBtn
          disabled={
            error.name || error.type || error.username || error.date
          }
          BtnText="Crear Perfil"
          onClick={handleCreate}
        />
      </form>
    </div>
  );
}
