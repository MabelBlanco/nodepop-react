import { client } from "../../api/axiosClient";
import { endpoints } from "../../api/endpoints";

export async function getAdvertisementbyId(id) {
  try {
    const data = client.get(`${endpoints.advertisements}/${id}`);
    return data;
  } catch (error) {
    if (error.status === "No connection") {
      return Promise.reject(error.message);
    }
  }
}

export async function deleteAdvertisementById(id) {
  try {
    const data = client.delete(`${endpoints.advertisements}/${id}`);
    return data;
  } catch (error) {
    if (error.status === "No connection") {
      return Promise.reject(error.message);
    }

    return Promise.reject(
      "Lo lamentamos, ha habido un problema, inténtelo de nuevo más tarde."
    );
  }
}
