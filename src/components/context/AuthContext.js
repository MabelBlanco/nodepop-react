import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextConsumer = AuthContext.Consumer;

AuthContext.displayName = "Auth Context";

export function AuthContextProvider({ children, haveInitialToken }) {
  const [isLogged, setIsLogged] = useState(haveInitialToken);

  const handleLogin = () => setIsLogged(true);
  const handleLogOut = () => setIsLogged(false);

  return (
    <AuthContext.Provider
      value={{ isLogged: isLogged, handleLogin, handleLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
