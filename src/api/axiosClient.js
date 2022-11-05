import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAuthorizationHeader = (accessToken) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`);
