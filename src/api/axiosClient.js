import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (!error.response) {
      return Promise.reject({
        status: "No connection",
        message:
          "No se ha podido conectar con la base de datos. Inténtelo de nuevo más tarde.",
      });
    } else {
      return Promise.reject(error);
    }
  }
);

export const setAuthorizationHeader = (accessToken) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`);

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};
