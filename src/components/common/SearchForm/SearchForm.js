import { useSearch } from "../../context/searchContext";
import { InputWithLabel } from "../InputWithLabel";

import "./searchForm.css";

export function SearchForm({
  nameValue,
  setName,
  priceMinValue,
  setPriceMinValue,
  priceMaxValue,
  setPriceMaxValue,
  submit,
}) {
  const { handleSale, tags, handleTags, selectedTags, showSelectedTags, sale } =
    useSearch();

  return (
    <form className="searchForm" id="searchForm">
      <InputWithLabel
        className="searchNameContainer"
        label="Nombre del producto"
        type="text"
        id="searchName"
        value={nameValue}
        onChange={setName}
      />

      <div className="searchSaleBuyContainer">
        <div>
          <legend>Compra/Venta</legend>
        </div>
        <div className="searchSaleContainer">
          <label htmlFor="searchSale">Venta</label>
          <input
            type="radio"
            name="searchSaleBuy"
            id="searchSale"
            onClick={() => handleSale("sale")}
            checked={sale === "sale" ? true : false}
          />
        </div>

        <div className="searchBuyContainer">
          <label htmlFor="searchBuy">Compra</label>
          <input
            type="radio"
            name="searchSaleBuy"
            id="searchBuy"
            onClick={() => handleSale("buy")}
            checked={sale === "buy" ? true : false}
          />
        </div>

        <div className="searchAllContainer">
          <label htmlFor="searchAll">Todos</label>
          <input
            type="radio"
            name="searchSaleBuy"
            id="searchAll"
            onClick={() => handleSale("all")}
            checked={sale === "all" ? true : false}
          />
        </div>
      </div>
      <div className="searchPriceContainer">
        <InputWithLabel
          className="searchMinPriceContainer"
          label="Precio mínimo:"
          type="text"
          id="searchMinPrice"
          value={priceMinValue}
          onChange={setPriceMinValue}
        />
        <InputWithLabel
          className="searchMaxPriceContainer"
          label="Precio máximo:"
          type="text"
          id="searchMaxPrice"
          value={priceMaxValue}
          onChange={setPriceMaxValue}
        />
      </div>
      <div className="searchTagsContainer">
        <label htmlFor="searchTags">
          Elige una o más etiquetas para tu anuncio:
        </label>
        <select
          name="searchTags"
          id="searchTags"
          multiple
          size="2"
          onClick={(event) => handleTags(event.target.value)}
          value={selectedTags}
        >
          {tags.map((tag) => (
            <option value={tag} key={tag}>
              {tag}
            </option>
          ))}
        </select>
        {showSelectedTags}
      </div>
      <div id="buttonContainer">
        <button
          type="submit"
          form="searchForm"
          id="buttonSearchForm"
          onClick={submit}
        >
          Buscar Anuncios
        </button>
      </div>
    </form>
  );
}
