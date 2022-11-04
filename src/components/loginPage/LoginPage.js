export function LoginPage() {
  return (
    <form className="login-register" id="login">
      <h2>Entrar</h2>
      <div className="usernameContainer">
        <label htmlFor="loginUsername">Nombre de usuario:</label>
        <input type="text" name="loginUsername" id="loginUsername" />
      </div>
      <div className="passwordContainer">
        <label htmlFor="loginPassword">Contraseña:</label>
        <input type="password" name="loginPassword" id="loginPassword" />
      </div>
      <button type="submit" form="login">
        Entrar
      </button>
    </form>
  );
}
