import { getAdvertisements } from "./advertsPageModel.js";
import { useEffect, useState } from "react";
import { drawAdvertisement } from "./advertsPageView.js";

import "./advertsPage.css";
import { useNavigate } from "react-router-dom";
import { SearchForm } from "../common/SearchForm/SearchForm.js";
import { useSearch } from "../context/searchContext.js";
import { aplicateFilters } from "../../utils/aplicateFilters.js";

export default function AdvertsPage() {
  const [advertisements, setAdvertisements] = useState([]);
  const [name, setName] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [searchWithFilters, setSearchWithFilters] = useState(false);
  const { sale, selectedTags } = useSearch();

  const navigate = useNavigate();

  const goToNewAdvert = () => {
    navigate("/adverts/new");
  };

  useEffect(() => {
    const execute = async () => {
      const advertisementsApi = await getAdvertisements();
      setAdvertisements(advertisementsApi);
    };
    execute();
  }, []);

  const aplicateFiltersToAdvertisements = (event) => {
    event.preventDefault();
    const filters = { name, sale, priceMin, priceMax, selectedTags };

    const advertisementsWithFilters = aplicateFilters(advertisements, filters);

    setAdvertisements(advertisementsWithFilters);
  };

  return (
    <>
      {searchWithFilters ? (
        <>
          <button onClick={() => setSearchWithFilters(false)}>
            Cerrar filtros
          </button>
          <SearchForm
            nameValue={name}
            setName={(event) => setName(event.target.value)}
            priceMinValue={priceMin}
            setPriceMinValue={(event) => setPriceMin(event.target.value)}
            priceMaxValue={priceMax}
            setPriceMaxValue={(event) => setPriceMax(event.target.value)}
            submit={aplicateFiltersToAdvertisements}
          />
        </>
      ) : (
        <button
          onClick={() => {
            setSearchWithFilters(true);
          }}
        >
          Buscar con filtros
        </button>
      )}

      <h2>Anuncios</h2>
      <div>
        {advertisements.length ? (
          <ul>
            {advertisements.map((advertisement) => {
              return drawAdvertisement(advertisement);
            })}
          </ul>
        ) : (
          <button onClick={goToNewAdvert}>
            No hay anuncios... ¿Quieres crear uno?
          </button>
        )}
      </div>
    </>
  );
}
