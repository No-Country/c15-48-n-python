const addPetToUser = (username, newPet, humans) => {
    const usuarioEncontrado = humans.find((usuario) => usuario.nick === username);
  
    if (usuarioEncontrado) {
      usuarioEncontrado.pets.push(newPet);
    } else {
      console.error('Usuario no encontrado');
    }
    console.log(usuarioEncontrado.pets);
  };

export default addPetToUser;