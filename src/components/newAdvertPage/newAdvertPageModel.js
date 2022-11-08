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
