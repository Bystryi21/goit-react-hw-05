import { Link } from "react-router-dom";
import css from "./MovieListTrending.module.css";

export default function MovieListTrending({ movies }) {
  return (
    <div>
      <h1>Tranding today</h1>

      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} className={css.text}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
