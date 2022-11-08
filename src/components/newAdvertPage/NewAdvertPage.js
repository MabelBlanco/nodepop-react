import { useEffect, useState } from "react";
import { InputWithLabel } from "../common/InputWithLabel";

import "./newAdvertPage.css";
import { getTags } from "./newAdvertPageModel";

const numericRegularExpression = /^[\d\s]*/;

export function NewAdvertPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);
  const [isSale, setIsSale] = useState(null);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const requestTags = async () => {
      try {
        const apiTags = await getTags();
        setTags(apiTags);
      } catch (error) {
        setError(error);
      }
    };
    requestTags();
  }, []);

  const requiredInputs =
    title && price && selectedTags.length && isSale !== null;

  //test if the price is numeric or empty
  const handlePrice = (value) => {
    setPrice(value);
    if (!numericRegularExpression.test(value)) {
      setError("El precio debe ser un número");
    }
  };

  const handleTags = (value) => {
    if (!selectedTags.includes(value)) {
      setSelectedTags((selectedTags) => [...selectedTags, value]);
    }
  };

  const sendAdvertisement = (event) => {
    event.preventDefault();
  };

  return (
    <form className="createAdvertisementForm">
      <InputWithLabel
        className="advertisementTitleContainer"
        label="Nombre del producto"
        type="text"
        id="advertisementTitle"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <InputWithLabel
        className="advertisementPriceContainer"
        label="Precio"
        type="text"
        id="advertisementPrice"
        value={price}
        onChange={(event) => handlePrice(event.target.value)}
      />
      <div className="advertisementSaleBuyContainer">
        <div>
          <legend>¿Compras o vendes?</legend>
        </div>
        <div className="advertisementSaleContainer">
          <label htmlFor="advertisementSale">Venta</label>
          <input
            type="radio"
            name="advertisementSaleBuy"
            id="advertisementSale"
            onClick={() => setIsSale(true)}
          />
        </div>

        <div className="advertisementBuyContainer">
          <label htmlFor="advertisementBuy">Compra</label>
          <input
            type="radio"
            name="advertisementSaleBuy"
            id="advertisementBuy"
            onClick={() => setIsSale(false)}
          />
        </div>
      </div>
      <div className="advertaisementTagsContainer">
        <label htmlFor="advertisementTags">
          Elige una o más etiquetas para tu anuncio:
        </label>
        <select
          name="advertisementTags"
          id="advertisementTags"
          multiple
          size="3"
          onChange={(event) => handleTags(event.target.value)}
        >
          {tags.map((tag) => (
            <option value={tag} key={tag}>
              {tag}
            </option>
          ))}
        </select>
        {selectedTags.length ? (
          <div>
            <p>Has elegido: </p>
            {selectedTags.map((tag) => (
              <button
                key={tag}
                onClick={(event) => {
                  event.preventDefault();
                  const changedTags = selectedTags.filter(
                    (item) => item !== tag
                  );
                  setSelectedTags(changedTags);
                }}
              >
                <span>{`#${tag} `}</span>
              </button>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="advertisementPhotoContainer">
        <label htmlFor="advertisementPhoto">
          Puedes añadir una foto de tu producto:
        </label>
        <input
          type="file"
          id="advertisementPhoto"
          name="advertisementPhoto"
          onChange={(event) => setPhoto(event.target.value)}
          value={photo}
        />
      </div>
      <div id="buttonContainer">
        <button
          type="submit"
          disabled={requiredInputs ? false : true}
          id="buttonAdvertisementForm"
          onClick={(event) => sendAdvertisement(event)}
        >
          Crear Anuncio
        </button>
      </div>

      {error ? <div>{error}</div> : ""}
    </form>
  );
}
