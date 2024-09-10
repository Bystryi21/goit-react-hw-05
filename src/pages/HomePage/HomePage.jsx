import { useState, useEffect } from "react";
import { getMovies } from "../../service/trending-api";
import { Link } from "react-router-dom";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoader(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
        setError(false);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Tranding today</h1>
      {loader && <Loader />}
      {error && <Error />}
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
