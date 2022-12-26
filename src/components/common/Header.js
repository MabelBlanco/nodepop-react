import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { removeAuthorizationHeader } from "../../api/axiosClient";
import storage from "../../utils/storage";
import { useAuth } from "../context/AuthContext";
import { ConfirmDiv } from "./confirmDiv";

import "./header.css";

export function Header() {
  const { isLogged, handleLogOut } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);

  const logOut = () => {
    handleLogOut();
    removeAuthorizationHeader();
    storage.remove("token");
  };

  const loggedContent = (
    <nav id="login-register-nav">
      <Link onClick={() => setShowConfirm(true)}>Cerrar Sesión</Link>
      <NavLink to="/adverts">Anuncios</NavLink>
      <NavLink to="/adverts/new">Crear Anuncio</NavLink>
    </nav>
  );

  const notLoggedContent = (
    <nav id="login-register-nav">
      <NavLink to="/login">Entrar</NavLink>
    </nav>
  );

  return (
    <header className="header">
      {isLogged ? loggedContent : notLoggedContent}
      {showConfirm ? (
        <ConfirmDiv
          question="¿Seguro que quieres cerrar sesión?"
          yesFunction={logOut}
          noFunction={() => setShowConfirm(false)}
        />
      ) : (
        ""
      )}
    </header>
  );
}
