import { Routes, Route, Navigate } from "react-router-dom";
import AdvertisementsList from "./components/advertisementsList/AdvertisementsList.js";
import { LoginPage } from "./components/loginPage/LoginPage.js";
import { NewAdvertPage } from "./components/newAdvertPage/NewAdvertPage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/" element={<AdvertisementsList></AdvertisementsList>} />
        <Route path="/adverts/new" element={<NewAdvertPage></NewAdvertPage>} />
        <Route path="/404" element={<div>404-Página no encontrada</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
