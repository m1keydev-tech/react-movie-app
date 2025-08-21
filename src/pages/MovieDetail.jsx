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
    url: `/movie/${id}?append_to_response=release_dates,credits`,
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner mediaDetail={movieDetail} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movieDetail.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovie}
              isLoading={isRelatedMovieListLoading}
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
