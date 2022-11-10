import { client } from "../../api/axiosClient.js";
import { endpoints } from "../../api/endpoints.js";

export async function getAdvertisements() {
  try {
    const data = await client.get(endpoints.advertisements);
    return data;
  } catch (error) {
    if (error.status === "No connection") {
      return Promise.reject(error.message);
    }
  }
}
