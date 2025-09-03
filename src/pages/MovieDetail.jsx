import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetails/Banner";
import ActorList from "@components/MediaDetails/ActorList";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import MovieInformation from "@/components/MediaDetails/MovieInformation";
import useFetch from "@/hooks/useFetch";
const MovieDetail = () => {
  const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
  const { id } = useParams();

  // const [movieDetail, setMovieDetail] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
  //   useState(false);
  // const [relatedMovie, setRelatedMovie] = useState([]);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     // Token for authentication
  //     Authorization: `Bearer ${TMDB_TOKEN}`,
  //   },
  // };

  const { data: movieDetail, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });

  const {
    data: recommendationsResponse,
    isLoading: isRelatedMovieListLoading,
  } = useFetch({
    url: `/movie/${id}/recommendations`,
  });

  const relatedMovie = recommendationsResponse.results || [];

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
  //     options,
  //   )
  //     .then(async (res) => {
  //       const data = await res.json();
  //       // console.log({ data });
  //       setMovieDetail(data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching movies:", err);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [id]);

  // useEffect(() => {
  //   setIsRelatedMovieListLoading(true);
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, options)
  //     .then(async (res) => {
  //       const data = await res.json();
  //       const currentRelatedMovie = (data.results || []).slice(0, 12);
  //       setRelatedMovie(currentRelatedMovie);
  //       // console.log({ data });
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching movies:", err);
  //     })
  //     .finally(() => {
  //       setIsRelatedMovieListLoading(false);
  //     });
  // }, [id]);

  const certification = (
    (movieDetail.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((release_date) => release_date.certification)?.certification;

  const crews = (movieDetail.credits?.crew || [])
    .filter((crew) => ["Director", "Producer", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner
        overview={movieDetail.overview}
        title={movieDetail.title}
        posterPath={movieDetail.poster_path}
        backdropPath={movieDetail.backdrop_path}
        releaseDate={movieDetail.release_date}
        genres={movieDetail.genres}
        point={movieDetail.vote_average}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (movieDetail.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movieDetail.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovie}
              isLoading={isRelatedMovieListLoading}
              title="More like this"
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieDetail} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetail;
