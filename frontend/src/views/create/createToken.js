const tokenPostUrl = "http://127.0.0.1:8000/api/token/";
  const createToken = async (user, pass) => {
    await axios.post(tokenPostUrl), {
      username: user,
      password: pass,
    }
    .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data));
        return res.data;
    })
  };

  export default createToken;