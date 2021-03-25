import axios from "axios";

const register = (email, password) => {
  return axios.post("https://reqres.in/api/register", {
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post("https://reqres.in/api/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
