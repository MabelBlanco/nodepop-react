import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteAdvertisementById,
  getAdvertisementbyId,
} from "./advertPageModel";

import "./advertPage.css";
import { useAuth } from "../context/AuthContext";
import { ConfirmDiv } from "../common/confirmDiv";

export function AdvertPage() {
  const [advertisement, setAdvertisement] = useState();
  const [error, setError] = useState();
  const [confirm, setConfirm] = useState(false);
  const { advertisementId } = useParams();
  const { isLogged } = useAuth();

  const navigate = useNavigate();

  const noPhoto =
    "https://static.vecteezy.com/system/resources/previews/003/586/230/original/no-photo-sign-sticker-with-text-inscription-on-isolated-background-free-vector.jpg";

  useEffect(() => {
    const getAdvertisement = async () => {
      try {
        const advertisementApi = await getAdvertisementbyId(advertisementId);
        setAdvertisement(advertisementApi);
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/404");
        }
      }
    };
    getAdvertisement();
  }, [advertisementId, navigate]);

  const deleteAdvertisement = async () => {
    try {
      await deleteAdvertisementById(advertisementId);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  if (advertisement) {
    return (
      <>
        <article className="advertisementDetail">
          <h2>{advertisement.name}</h2>
          <img
            src={advertisement.photo ? advertisement.photo : noPhoto}
            alt={`Foto de ${advertisement.name}`}
          />
          <h5>{advertisement.price}€</h5>
          <h4>{advertisement.sale ? "Se vende" : "Se compra"}</h4>
          {advertisement.tags.map((tag) => (
            <strong key={tag}>{`#${tag}`}</strong>
          ))}
        </article>
        {isLogged ? (
          <>
            <button onClick={() => setConfirm(true)}>Borrar Anuncio</button>
            {confirm ? (
              <ConfirmDiv
                question="¿Seguro que quieres borrar el anuncio?"
                yesFunction={deleteAdvertisement}
                noFunction={() => setConfirm(false)}
              />
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        {error ? <div>{error}</div> : ""}
      </>
    );
  } else {
    return <div>Solicitando anuncio</div>;
  }
}
