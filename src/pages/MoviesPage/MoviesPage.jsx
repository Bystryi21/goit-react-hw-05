import { useState, useEffect } from "react";
import { getMoviesPage } from "../../service/movies-page";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);

  const [params] = useSearchParams();
  const query = params.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getData() {
      const response = await getMoviesPage(query);
      setMovie(response);
      console.log(response);
    }
    getData();
  }, [query]);

  return (
    <>
      <SearchForm />
      {movie && <MovieList movie={movie} />}
    </>
  );
}
