import React, { useEffect, useState } from "react";
import InputComp from "../../components/InputComp";
import "../../App.css";
import GoBackButton from "../../components/GoBackButton";
import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import profilePlaceholder from "../../assets/profile_placeholder.png";
import SubmitGradientBtn from "../../components/SubmitGradientBtn";
import validate from "../create/validate.js";
import fileUpload from "../Publish/fileUpload.js";
import humans from "../../assets/placeholder/humans_data.js";
import petsProfiles from "../../assets/placeholder/perfiles_mascotas.js";
import { useParams } from "react-router-dom";
import addPetToUser from "./addPetToUser.js";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Create() {
  const tipos = ["Ave", "Gato", "Perro", "Conejo", "Caballo", "Otro"];
  // const users = humans;
  const token = useSelector((state) => state.user.tokenUser);
  console.log("Token link:", token.access);
  // const owner = users[1];
  const [humans, setHumans] = useState();
  const humansList = `http://127.0.0.1:8000/api/user/`;

  const [owner, setOwner] = useState();
  const humanUrl = `http://127.0.0.1:8000/api/user/sergiom/`; //

  useEffect(() => {
    axios
      .get(humanUrl)
      .then((response) => {
        setOwner(response.data);
        console.log(owner.first_name, owner.email);
      })
      .catch((error) => {
        console.error("Error al obtener datos del dueño:", error);
      });

    axios.get(humansList).then((res) => {
      setHumans(res.data);
    });
  }, []);

  const params = useParams();
  let petsProf = petsProfiles;

  // init states
  const [selectedImage, setSelectedImage] = useState();
  const [prevImg, setPrevImg] = useState(null);
  const [petName, setPetName] = useState("");
  const [petType, setType] = useState("");
  const [nick, setNick] = useState("");
  const [petDate, setDate] = useState();

  const [petProfile, setPetProfile] = useState({
    petName: "",
    type: "",
    petNick: "",
    date: null,
    petImg: null,
    human: "",
    id: null,
    followers: 0,
    followed: 0,
  });

  const ultId = petsProf.length;
  const newPetId = ultId + 1;

  const [error, setError] = useState({
    petName: "",
    petType: "",
    petNick: "",
    petDate: "",
    petImg: "",
  });

  // handlers
  const handleName = (e) => {
    setError((prevErrors) => ({
      ...prevErrors,
      ...validate("petName", e.target.value),
    }));
    error.petName ? console.log(error.petName) : setPetName(e.target.value);
  };

  const handleType = (e) => {
    console.log(e.target.value);
    setError((prevErrors) => ({
      ...prevErrors,
      ...validate("type", e.target.value),
    }));
    error.petType ? console.log(error.petType) : setType(e.target.value);
  };

  const handleNick = (e) => {
    setError((prevErrors) => ({
      ...prevErrors,
      ...validate("petNick", e.target.value),
    }));
    error.petNick ? console.log(error.petNick) : setNick(e.target.value);
  };

  const handleDate = (e) => {
    console.log(e.target.value);
    setError((prevErrors) => ({
      ...prevErrors,
      ...validate("petDate", e.target.value),
    }));
    error.petDate ? console.log(error.petDate) : setDate(e.target.value);
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const errors = validate("petImg", file);

    setError((prevErrors) => ({
      ...prevErrors,
      petImg: Array.isArray(errors) && errors.some((error) => error.petImg),
    }));
    setSelectedImage(file);
    console.log(selectedImage);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPrevImg(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const imgUrl = async (img) => {
    try {
      if (img) {
        const uploadPreset = nick;
        const url = await fileUpload(img, uploadPreset, "image");
        console.log(url);

        if (url) {
          console.log("Imagen subida con éxito:", url);
          return url;
        } else {
          console.error("fileUpload no proporcionó una URL válida");
          return null;
        }
      } else {
        console.error(
          "Se esperaba una única imagen, pero se proporcionaron o ninguna o más de una."
        );
        return null;
      }
    } catch (err) {
      console.error("Error en imgUrl:", err);
      setError((prevErrors) => ({
        ...prevErrors,
        petImg: "Error al subir la imagen a Cloudinary",
      }));
      return null;
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    let newErrors = {};
    newErrors.petName = validate("petName", petName).petName;
    newErrors.petType = validate("type", petType).petType;
    newErrors.nick = validate("petNick", nick).nick;
    newErrors.petDate = validate("petDate", petDate).petDate;
    newErrors.petImg = validate("image", selectedImage).petImg;

    console.log(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      setError((prevErrors) => ({ ...prevErrors, ...newErrors }));
    } else {
      try {
        console.log(selectedImage);
        let imageUrl = null;
        if (selectedImage) {
          imageUrl = await imgUrl(selectedImage);
          console.log(imageUrl);
        }

        const newPet = {
          // id: newPetId,
          name: petName,
          username: nick,
          // followed: 0,
          // followers: 0,
          date: petDate,
          profile: imageUrl,
          type: petType,
        };

        console.log("Nueva pet:", newPet); //
        setPetProfile((prevPetProfile) => ({
          ...prevPetProfile,
          ...newPet,
        }));

        try {
          const res = await axios.post("http://127.0.0.1:8000/api/pet/", {
            name: petName,
            username: nick,
            date: petDate,
            pet_picture: imageUrl,
            species: petType,
            biography: "blabla",
          });
          console.log(res);
          addPetToUser(res.data.name, res.data, humans);
        } catch (err) {
          console.error("Error en request", error);
          return null;
        }
        // petsProf = petProfile; //

        console.log("Nueva mascota creada con éxito");
        alert("Formulario publicado correctamente");
        return imageUrl;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  };
  return (
    <div>
      {/* esto podria ser un componente header  */}
      <header className="flex my-8 items-center mx-6">
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
          onChange={handleName}
        />
        {error.petName && (
          <p className="text-xs font-medium text-white pt-2 font-custom">
            {error.petName}
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
            onChange={handleType}
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
          {error.petType && (
            <p className="text-xs font-medium text-white pt-2 font-custom">
              {error.petType}
            </p>
          )}
        </div>
        <InputComp
          label="Nick de tu Maskota:"
          type="text"
          id="petNick"
          placeholder="Elegí un nick único para tu maskota..."
          required={true}
          onChange={handleNick}
        />
        {error.petNick && (
          <p className="text-xs font-medium text-white pt-2 font-custom">
            {error.petNick}
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
            onChange={handleDate}
          />
          {error.petDate && (
            <p className="text-xs font-medium text-white pt-2 font-custom">
              {error.petDate}
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
              id="petImg"
              accept="image/*"
              required={false}
              className="w-full h-full mt-1.5 absolute top-0 left-0 opacity-0 cursor-pointer z-1"
              onChange={handleImage}
            />
            {prevImg !== null || petProfile.petImg ? (
              <img
                src={prevImg || petProfile.petImg}
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
          {error.petImg && (
            <p className="text-xs font-medium text-white pt-2 font-custom">
              {error.petImg}
            </p>
          )}
        </div>
        <SubmitGradientBtn
          disabled={
            error.petName || error.petType || error.petNick || error.petDate
          }
          BtnText="Crear Perfil"
          onClick={handleCreate}
          // link={`/profile/${owner.id}/${owner.name}`}
        />
      </form>
    </div>
  );
}
