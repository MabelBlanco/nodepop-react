import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function RequireAuth({ children }) {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
}
