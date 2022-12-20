import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function RequireAuth({ children }) {
  const { isLogged } = useAuth();

  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  } else {
    return children;
  }
}
