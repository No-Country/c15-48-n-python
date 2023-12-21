import Perfil from "./gato_perfil.jpg";
import Imagen from "./gato.jpg";

//* Los textos de las mascotas deberían tener un límite de caracteres. Con Abril pensamos en poder tocar la publicación para que se pueda
//* abrir la publicacion en toda la pantalla como en twitter.

let gatos = {
  1: {
    id: 1,
    perfil: Perfil,
    nombre: "Misato",
    fecha: "Hace 2 horas",
    imagen: Imagen,
    likes: 15,
    comments: 5,
    text: "¡No hay nada más adorable que un gatito curioso! 🐱💕 Esta pequeña bola de pelusa ha iluminado mi día con su ternura y travesuras. ¿Quién más es un amante de los gatos? ¡Deja un comentario con tu emoji de gato favorito! 😻😺 #AmoALosGatos #GatitosAdorables",
  },
  2: {
    id: 2,
    perfil:
      "https://fielpet.com.ar/blog/content/images/size/w2000/2021/02/Hisotoria-de-los-gatos.jpg",
    nombre: "Manchita",
    fecha: "Hace 20 minutos",
    imagen:
      "https://walac.pe/wp-content/uploads/2021/02/gato-marron_0-1068x801.jpg",
    likes: 120,
    comments: 12,
    text: "¡La mejor peluquería de Argentina! 🐾🐱🐶",
  },
  3: {
    id: 3,
    perfil:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Zuri.jpg/260px-Zuri.jpg",
    nombre: "Pulga",
    fecha: "Hace 2 horas",
    imagen:
      "https://www.cuerpomente.com/medio/2023/07/11/gatos-gordos_3f14078c_230711093058_1280x720.jpg",
    likes: 172,
    comments: 25,
    text: "¡Conoce a nuestro adorable compañero felino! 🐱🐱🐱",
  },
};


export default gatos;
