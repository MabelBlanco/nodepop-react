import { Routes, Route, Navigate } from "react-router-dom";
import { AdvertPage } from "./components/advertPage/AdvertPage.js";
import AdvertsPage from "./components/advertsPage/AdvertsPage.js";
import { Layout } from "./components/common/Layout.js";
import { RequireAuth } from "./components/common/RequireAuth.js";
import { SearchContextProvider } from "./components/context/searchContext.js";
import { LoginPage } from "./components/loginPage/LoginPage.js";
import { NewAdvertPage } from "./components/newAdvertPage/NewAdvertPage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route
          path="/adverts"
          element={
            <RequireAuth>
              <SearchContextProvider>
                <Layout>
                  <AdvertsPage />
                </Layout>
              </SearchContextProvider>
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/new"
          element={
            <RequireAuth>
              <Layout>
                <NewAdvertPage />
              </Layout>
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/:advertisementId"
          element={
            <RequireAuth>
              <Layout>
                <AdvertPage />
              </Layout>
            </RequireAuth>
          }
        />
        <Route path="/404" element={<div>404-Página no encontrada</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
