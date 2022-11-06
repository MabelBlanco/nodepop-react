import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextConsumer = AuthContext.Consumer;

AuthContext.displayName = "Auth Context";

export function AuthContextProvider({ children, haveInitalToken }) {
  const [isLogged, setIsLogged] = useState(haveInitalToken);

  const handleLogin = () => setIsLogged(true);
  const handleLogOut = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, handleLogin, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}
