export function drawAdvertisement(advertisement) {
  return (
    <li className="advertisementsList" key={advertisement.id}>
      <Link to={`/adverts/${advertisement.id}`}>
        <h3>{advertisement.name}</h3>
        {advertisement.photo ? (
          <img src={advertisement.photo} alt={advertisement.title} />
        ) : (
          <p>No hay foto</p>
        )}
        <h5>{advertisement.price}€</h5>
        <h4>{advertisement.sale ? "Se vende" : "Se compra"}</h4>
      </Link>
    </li>
  );
}
