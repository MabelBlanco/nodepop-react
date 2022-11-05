import { client, setAuthorizationHeader } from "../../api/axiosClient";
import { endpoints } from "../../api/endpoints";
import storage from "../../utils/storage";

export async function loginToApi(email, password) {
  try {
    const token = await client.post(endpoints.login, { email, password });

    setAuthorizationHeader(token);
    storage.set("token", token);

    return true;
  } catch (error) {
    if (error.response.status === 401) {
      return Promise.reject(
        "El email o la contraseña no son correctos, inténtelo de nuevo"
      );
    }
    console.log(error);
    return false;
  }
}
