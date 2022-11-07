import { InputWithLabel } from "../common/InputWithLabel";

import "./newAdvertPage.css";

export function NewAdvertPage() {
  return (
    <form className="createAdvertisementForm">
      <InputWithLabel
        className="advertisementTitleContainer"
        label="Nombre del producto"
        type="text"
        id="advertisementTitle"
      />
      <div className="advertisementDescriptionContainer">
        <label htmlFor="advertisementDescription">Descripción</label>
        <textarea
          type="text"
          id="advertisementDescription"
          name="advertisementDescription"
        ></textarea>
      </div>
      <InputWithLabel
        className="advertisementPriceContainer"
        label="Precio"
        type="number"
        id="advertisementPrice"
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
    </form>
  );
}
