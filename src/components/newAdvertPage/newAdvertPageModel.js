import { client } from "../../api/axiosClient";
import { endpoints } from "../../api/endpoints";

export async function getTags() {
  try {
    const tags = await client.get(endpoints.tags);
    return tags;
  } catch (error) {
    if (error.status === "No connection") {
      return Promise.reject(error.message);
    }
  }
}

export async function postAdvertisement(advertisement) {
  try {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const data = await client.post(
      endpoints.advertisements,
      advertisement,
      config
    );
    console.log(data);
  } catch (error) {
    if (error.status === "No connection") {
      return Promise.reject(error.message);
    } else if (error.response?.status === 401) {
      return Promise.reject(
        "Lo siento, debe hacer login para poder crear un anuncio"
      );
    } else {
      return Promise.reject("Ha habido un error, inténtelo más tarde.");
    }
  }
}
