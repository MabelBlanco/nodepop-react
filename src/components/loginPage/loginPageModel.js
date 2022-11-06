import { client, setAuthorizationHeader } from "../../api/axiosClient";
import { endpoints } from "../../api/endpoints";

export async function loginToApi(email, password) {
  try {
    const token = await client.post(endpoints.login, { email, password });

    setAuthorizationHeader(token.accessToken);

    return token.accessToken;
  } catch (error) {
    if (error.response?.status === 401) {
      return Promise.reject(
        "El email o la contraseña no son correctos, inténtelo de nuevo."
      );
    } else {
      return Promise.reject(error.message);
    }
  }
}
