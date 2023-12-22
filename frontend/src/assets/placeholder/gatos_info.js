import Jacob from "./PerfilesFigma/Profile Jacob.png";
import JacobPubli from "./PerfilesFigma/publis/1-2.jpg";
import Tony from "./PerfilesFigma/6.jpg";
import TonyPubli from "./PerfilesFigma/publis/5.jpg"
import Pugui from "./PerfilesFigma/Profile Pugui.png";
import PuguiPubli from "./PerfilesFigma/publis/7.jpg";
import Alex from "../placeholder/alex.jpg";
import AlexPubli from "./PerfilesFigma/publis/3.jpg"
import gatogris from "./PerfilesFigma/gatogris.jpeg";
import conejo from "./PerfilesFigma/Conejo.jpeg";
import conejoPubli from "./PerfilesFigma/ConejoPubli.jpeg";
import Imagen from "./gato.jpg";

//* Los textos de las mascotas deberían tener un límite de caracteres. Con Abril pensamos en poder tocar la publicación para que se pueda
//* abrir la publicacion en toda la pantalla como en twitter.

let gatos = {
  1: {
    id: 1,
    perfil: Jacob,
    nombre: "Jacob",
    fecha: "Hace 2 horas",
    imagen: JacobPubli,
    likes: 15,
    comments: 5,
    text: '"El que trova un amico trova un tesoro", "El que encuentra un amigo encuentra un tesoro" Lo escuchamos por ahí...'
  },
  2: {
    id: 2,
    perfil: Alex,
    nombre: "Alex",
    fecha: "Hace 20 minutos",
    imagen: AlexPubli,
    likes: 120,
    comments: 12,
    text: "¡Nada mejor que una sonrisa! 🐶",
  },
  3: {
    id: 3,
    perfil:Pugui,
    nombre: "Pugui",
    fecha: "Hace 2 horas",
    imagen: PuguiPubli,
    likes: 172,
    comments: 25,
    text: "",
  },
  4: {
    id: 4,
    perfil: Tony,
    nombre: "Tony",
    fecha: "Hace 2 horas",
    imagen: TonyPubli,
    likes: 15,
    comments: 5,
    text: "",
  },
  5: {
    id: 5,
    perfil: gatogris,
    nombre: "Misato",
    fecha: "Hace 2 minutos",
    imagen: gatogris,
    likes: 12,
    comments: 2,
    text: "Hace caloooooorr!!",
  },
  6: {
    id: 6,
    perfil: conejo,
    nombre: "Nevada",
    fecha: "Hace 2 minutos",
    imagen: conejoPubli,
    likes: 12,
    comments: 2,
    text: "",
  }
};

export default gatos;
