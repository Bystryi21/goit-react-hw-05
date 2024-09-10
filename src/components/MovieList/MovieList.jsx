import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movie, state }) {
  return (
    <>
      <ul>
        {movie.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={state} className={css.text}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
