import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css";

export default function SearchForm() {
  const [params, setParams] = useSearchParams();
  const handleSubmit = (evt) => {
    evt.preventDefault;
    params.set("query", evt.target.elements.query.value);
    setParams(params);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="query" className={css.input} />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
