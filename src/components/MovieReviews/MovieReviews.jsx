import { getReviews } from "../../service/movies-reviews";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await getReviews(movieId);
      setReviews(response.data.results);
      console.log(response.data.results);
    }
    getData();
  }, [movieId]);

  return (
    <>
      <ul className={css.ul}>
        {reviews.map((item) => (
          <li key={item.id}>
            <h2 className={css.authorName}>Author: {item.author}</h2>
            <p className={css.text}>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
