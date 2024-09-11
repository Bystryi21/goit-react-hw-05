import { useState, useEffect } from "react";
import { getMovies } from "../../service/trending-api";

import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import MovieListTrending from "../../components/MovieListTrending/MovieListTrending";

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
    <>
      {loader && <Loader />}
      {error && <Error />}
      <MovieListTrending movies={movies} />
    </>
  );
}
