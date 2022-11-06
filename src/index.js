import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import storage from "./utils/storage";
import { AuthContextProvider } from "./components/context/AuthContext";
import { setAuthorizationHeader } from "./api/axiosClient";

const initialToken = storage.get("token");
if (initialToken) {
  setAuthorizationHeader(initialToken);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider haveInitialToken={!!initialToken}>
        <App />
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
