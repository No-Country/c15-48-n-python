const agregarMascotaAUsuario = (usuarioId, newPet, humans) => {
    const usuarioEncontrado = humans.find((usuario) => usuario.id === usuarioId);
  
    if (usuarioEncontrado) {
      usuarioEncontrado.pets.push(newPet);
    } else {
      console.error('Usuario no encontrado');
    }
  };

export default agregarMascotaAUsuario;