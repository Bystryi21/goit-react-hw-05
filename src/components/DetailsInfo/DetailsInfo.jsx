import css from "./DetailsInfo.module.css";

export default function DetailsInfo({ details }) {
  return (
    <div className={css.wrapper}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
          alt={details.title}
          width="300"
          height="500"
          className={css.img}
        />
      </div>
      <div className={css.textWrapper}>
        <h2 className={css.title}>{details.title}</h2>
        <p className={css.secondText}>
          Use score: {Math.round(details.vote_average) * 10}%
        </p>
        <h2 className={css.title}>Overview</h2>
        <p className={css.secondText}>{details.overview}</p>
        <h2 className={css.title}>Genres</h2>
        <ul className={css.ul}>
          {details.genres.map((item) => (
            <li key={item.id}>
              <div className={css.secondText}>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
