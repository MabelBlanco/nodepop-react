import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./loginPage.css";
import { loginToApi } from "./loginPageModel";

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const submitEvent = async (event) => {
    event.preventDefault();

    try {
      await loginToApi(emailValue, passwordValue);

      const to = location.state?.from?.pathname || "/";
      navigate(to);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form id="login" onSubmit={submitEvent}>
      <h2>Entrar</h2>
      <div className="emailContainer">
        <label htmlFor="loginEmail">Nombre de usuario:</label>
        <input
          value={emailValue}
          type="text"
          name="loginEmail"
          id="loginEmail"
          onChange={(event) => setEmailValue(event.target.value)}
        />
      </div>
      <div className="passwordContainer">
        <label htmlFor="loginPassword">Contraseña:</label>
        <input
          value={passwordValue}
          type="password"
          name="loginPassword"
          id="loginPassword"
          onChange={(event) => setPasswordValue(event.target.value)}
        />
      </div>
      <button type="submit" form="login">
        Entrar
      </button>
      <div>{error}</div>
    </form>
  );
}
