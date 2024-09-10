import { useEffect, useState } from "react";
import { getCard } from "../../service/movies-card";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [card, setCard] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await getCard(movieId);
      setCard(response.data.cast);
    }
    getData();
  }, [movieId]);

  return (
    <>
      <ul className={css.ul}>
        {card.map((item) => (
          <li key={item.id} className={css.li}>
            <p className={css.name}>{item.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt={item.name}
              className={css.img}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
