function validate(id, value, files) {
  let postErrors = {
    perfil: "",
    nombre: "",
    fecha: "",
    imagen: "",
    video: "",
    text: "",
  };

  let vidAllowedExt = [".mp4", ".mov"];
  let imgAllowedExt = [".jpeg", ".jpg", ".png"];

  if (!value && (!files || files.length === 0)) {
    postErrors.imagen = "Debes publicar al menos una imagen o un video";
    return postErrors;
  }

  if (id === "text") {
    if (value.length >= 150) {
      postErrors.text = "Excede el límite de caracteres";
    }
  } else if (id === "filesImg") {
    if (!value || value.length === 0) {
      postErrors.imagen = "Debes publicar al menos una imagen";
    } else {
      const imgToValidate = Array.isArray(value) ? value : [value];
      imgToValidate.forEach((img) => {
        const extension = img.name.split(".").pop().toLowerCase();
        if (!imgAllowedExt.includes(`.${extension}`)) {
          postErrors.imagen = "No se permite ese formato";
        }
      });

      if (files && files.length + imgToValidate.length > 3) {
        postErrors.imagen = "No se permiten más de tres imágenes";
      }
    }
  } else if (id === "fileVid") {
    if (!files) {
      console.log("No es necesario tener al menos un video");
    }
    if (files && files.length > 1) {
      postErrors.video = "Solo podés subir un video a la vez";
    } else {
      const vid = value[0];
      if (vid) {
        const extension = vid.name?.split(".").pop().toLowerCase();
        if (!extension || !vidAllowedExt.includes(`.${extension}`)) {
          postErrors.video = "No se permite ese formato";
        }
      }
    }
  } else {
    postErrors[id] = "Error de validación no especificado";
  }

  return postErrors;
}

export default validate;
