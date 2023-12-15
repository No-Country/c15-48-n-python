function validate(id, value) {
  let errors = {
    name: "",
    type: "",
    username: "",
    date: "",
    profile: "",
  };

  let usernameReg = /^[a-zA-Z0-9_.-]+$/;
  let nameReg = /^[a-zA-Z]+$/;

  if (id === "petName") {
    if (!value) {
      errors.name = "Se necesita el nombre de tu maskota";
    } else if (!nameReg.test(value)) {
      errors.name = "Sólo se permiten letras para el nombre";
    } else if (value.length >= 100) {
      errors.name = "Nombre demasiado largo";
    }
  } else if (id === "petNick") {
    if (!value) {
      errors.username = "Se necesita un nick de maskota";
    } else if (value.length > 20) {
      errors.username = "El nick es muy largo";
    } else if (!usernameReg.test(value)) {
      errors.username = "Ingresá un nick válido";
    }
  } else if (id === "type") {
    if (!value || value === 'default') {
        errors.type = "Debes elegir el tipo de tu maskota";
    }
  } else if (id === "petDate") {
    if (!value) {
        errors.date = "Se necesita la fecha de nacimiento de tu maskota";
    }
  }

  return errors;
}

export default validate;
