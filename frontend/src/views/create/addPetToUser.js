const agregarMascotaAUsuario = (userName, newPet, humans) => {
    const usuarioEncontrado = humans.find((usuario) => usuario.name === userName);
  
    if (usuarioEncontrado) {
      usuarioEncontrado.pets.push(newPet);
    } else {
      console.error('Usuario no encontrado');
    }
  };

export default agregarMascotaAUsuario;