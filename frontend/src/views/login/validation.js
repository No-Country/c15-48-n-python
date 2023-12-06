function validation(id, value) {
  let errors = {
    email: "",
    password: "",
  };
  let emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  if (id === "email") {
    if (!value) {
      errors.email = "Se necesita el email";
    } else if (!emailReg.test(value)) {
      errors.email = "Email inválido";
    } else if (value.length >= 35) {
      errors.email = "Email demasiado largo";
    }
  } else if (id === "password") {
    if (!value) {
      errors.password = "Se necesita la contraseña";
    } else if (value.length < 6 || value.length > 20) {
      errors.password = "La contraseña debe tener entre 6 y 20 caracteres";
    } else if (!passwordReg.test(value)) {
      errors.password = "La contraseña es insegura";
    }
  }

  return errors;
}

export default validation;
