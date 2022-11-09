import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { removeAuthorizationHeader } from "../../api/axiosClient";
import storage from "../../utils/storage";
import { useAuth } from "../context/AuthContext";

import "./header.css";

export function Header() {
  const { isLogged, handleLogOut } = useAuth();
  const [confirm, setConfirm] = useState(false);

  const logOut = () => {
    handleLogOut();
    removeAuthorizationHeader();
    storage.remove("token");
  };

  const loggedContent = (
    <nav id="login-register-nav">
      <Link onClick={() => setConfirm(true)}>Cerrar Sesión</Link>
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
      {confirm ? (
        <div>
          <div>¿Seguro que quieres cerrar sesión?</div>{" "}
          <button onClick={logOut}>Si</button>
          <button onClick={() => setConfirm(false)}>No</button>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
