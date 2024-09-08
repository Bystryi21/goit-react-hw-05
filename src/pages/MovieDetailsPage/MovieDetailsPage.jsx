import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../service/movies-details";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesDetails() {
      const response = await getDetails(movieId);
      setMovieDetails(response.data);
      console.log(response.data);
    }

    getMoviesDetails();
  }, [movieId]);

  return <>{movieDetails && <DetailsInfo details={movieDetails} />}</>;
}
