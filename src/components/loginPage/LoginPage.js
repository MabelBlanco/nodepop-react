import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InputWithLabel } from "../common/InputWithLabel";
import "./loginPage.css";
import { loginToApi } from "./loginPageModel";
import storage from "../../utils/storage";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useAuth();

  const changeChecked = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const submitEvent = async (event) => {
    event.preventDefault();

    try {
      const token = await loginToApi(emailValue, passwordValue);

      if (checked) {
        storage.set("token", token);
      }

      handleLogin();
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
        <label htmlFor="loginEmail">Email:</label>
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
      <InputWithLabel
        type="checkbox"
        id="saveToken"
        label="¿Quieres que te recordemos?"
        onChange={changeChecked}
        checked={checked}
      />
      <button type="submit" form="login">
        Entrar
      </button>
      <div>{error}</div>
    </form>
  );
}
