import { Link } from "react-router-dom";
import "./advertsPage.css";

export function drawAdvertisement(advertisement) {
  const tags = advertisement.tags;
  return (
    <li className="advertisementsList" key={advertisement.id}>
      <Link to={`/adverts/${advertisement.id}`}>
        <h3>{advertisement.name}</h3>
        <h5>{advertisement.price}€</h5>
        <h4>{advertisement.sale ? "Se vende" : "Se compra"}</h4>
        {tags.map((tag) => (
          <strong key={tag}>{`#${tag}`}</strong>
        ))}
      </Link>
    </li>
  );
}
