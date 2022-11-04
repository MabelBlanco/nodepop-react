import "./advertisementList.css"

export function drawAdvertisement (advertisement) {
    return (
        <li className="advertisementsList" key={advertisement.id}>
            <a href="./">
                <h3>{advertisement.title}</h3>
                {advertisement.photo ? <img src = {advertisement.photo} alt = {advertisement.title}/> : <p>No hay foto</p>}
                <h5>{advertisement.price}€</h5>
                <h4>{advertisement.isSale ? 'Se vende' : 'Se compra'}</h4>
            </a>
        </li>

    )
}