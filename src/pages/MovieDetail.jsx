import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetails/Banner";
const MovieDetail = () => {
  const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Token for authentication
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      options,
    )
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        setMovieDetail(data);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner mediaDetail={movieDetail} />
    </>
  );
};
export default MovieDetail;
