const cloud_name = "dyiapz7c1";
// const preset = "alex.bulldog";

const fileUpload = async (file, preset, resourceType) => {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/${resourceType}/upload`;
  const presetN = preset;
  console.log(presetN);
  const formData = new FormData();
  formData.append("upload_preset", `${presetN}`);
  formData.append("file", file);

  try {
    const res = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) return null;
    const data = await res.json();
    console.log(data);
    console.log(data.secure_url);
    console.log("Imagen subida con éxito")
    return data.secure_url;
  } catch (error) {
    return console.error(error);
  }
};

export default fileUpload;
