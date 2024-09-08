import { useState, useEffect } from "react";
import { getMovies } from "../../service/trending-api";
// import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getMovies();
      setMovies(data);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
