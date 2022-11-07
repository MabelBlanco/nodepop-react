import { useState } from "react";
import { InputWithLabel } from "../common/InputWithLabel";

import "./newAdvertPage.css";

const numericRegularExpression = /^[\d\s]*/;

export function NewAdvertPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);

  //test if the price is numeric or empty
  const handlePrice = (value) => {
    setPrice(value);
    if (!numericRegularExpression.test(value)) {
      setError(true);
    }
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
      <div className="advertisementDescriptionContainer">
        <label htmlFor="advertisementDescription">Descripción</label>
        <textarea
          type="text"
          id="advertisementDescription"
          name="advertisementDescription"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
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
          />
        </div>

        <div className="advertisementBuyContainer">
          <label htmlFor="advertisementBuy">Compra</label>
          <input
            type="radio"
            name="advertisementSaleBuy"
            id="advertisementBuy"
          />
        </div>
      </div>
      <div className="advertisementPhotoContainer">
        <label htmlFor="advertisementPhoto">
          Puedes añadir un link con la foto de tu producto
        </label>
        <input type="url" id="advertisementPhoto" name="advertisementPhoto" />
      </div>
      <div id="buttonContainer">
        <button type="submit" disabled id="buttonAdvertisementForm">
          Crear Anuncio
        </button>
      </div>

      {error ? <div>El precio debe ser un número</div> : ""}
    </form>
  );
}
