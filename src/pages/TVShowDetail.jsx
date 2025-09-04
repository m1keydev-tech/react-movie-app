import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetails/Banner";
import ActorList from "@components/MediaDetails/ActorList";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import useFetch from "@/hooks/useFetch";
import TVShowInformation from "@/components/MediaDetails/TVShowInformation";
import SeasonList from "@/components/MediaDetails/SeasonList";
const TVShowDetail = () => {
  const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
  const { id } = useParams();

  // const [movieDetail, setMovieDetail] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
  //   useState(false);
  // const [relatedTVShow, setRelatedMovie] = useState([]);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     // Token for authentication
  //     Authorization: `Bearer ${TMDB_TOKEN}`,
  //   },
  // };

  const { data: tvDetail, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const {
    data: recommendationsResponse,
    isLoading: isRelatedTVShowListLoading,
  } = useFetch({
    url: `/tv/${id}/recommendations`,
  });

  const relatedTVShow = recommendationsResponse.results || [];

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

  const certification = (tvDetail.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (tvDetail.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Producer", "Writer"].some((job) =>
        jobs.find((j) => j === job),
      );
    })
    .splice(0, 5)
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.jobs[0].job }));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner
        title={tvDetail.name}
        posterPath={tvDetail.poster_path}
        backdropPath={tvDetail.backdrop_path}
        releaseDate={tvDetail.first_air_date}
        genres={tvDetail.genres}
        overview={tvDetail.overview}
        point={tvDetail.vote_average}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (tvDetail.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList
              actors={(tvDetail.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episodeCount: cast.roles[0]?.episode_count,
              }))}
            />
            <SeasonList seasons={[...(tvDetail.seasons || [])].reverse()} />
            <RelatedMediaList
              mediaList={relatedTVShow}
              isLoading={isRelatedTVShowListLoading}
              title="More like this"
              className="mt-6"
            />
          </div>
          <div className="flex-1">
            <TVShowInformation tvInfo={tvDetail} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TVShowDetail;
