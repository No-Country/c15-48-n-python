function validate (userData){
    let errors = {};
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if(!userData.email){
        errors.email = "Se necesita el email";
    }

    if(!emailRegex.test(userData.email)){
        errors.email = "Email inválido"
    }

    if(userData.email.length >= 35){
        errors.password = "Email demasiado largo"
    }

    if(!userData.password){
        errors.password = "Se necesita la contraseña";
    }

    if(userData.password.length < 6 || userData.password.length > 20){
        errors.password = "La contraseña debe tener entre 6 y 20 caracteres"
    }

    if(userData.password2 !== userData.password){
        errors.password2 = "Las contraseñas no coinciden"
    }

    if(!strongPasswordRegex.test(userData.password)){
        errors.password = "La contraseña es insegura"
    }

    if(!userData.name){
        errors.name = "Se necesita el nombre";
    }

    if(userData.name.length >= 35){
        errors.name = "Nombre demasiado largo"
    }

    return errors;
}

export default validate;