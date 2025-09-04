// import { useState } from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@/hooks/useFetch";
//
const FeatureMovie = () => {
  // const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMovieID, setActiveMovieID] = useState();

  // const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  const { data: popularMovies } = useFetch({
    url: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieID}/videos`,
    },
    { enabled: !!activeMovieID },
  ); // co du lieu thi enabled = true , khong co du lieu thi la false

  // const trailerKey = videoResponse?.results?.find(
  //   (video) => video.type === "Trailer" && video.site === "YouTube",
  // )?.key;

  // console.log("Trailer key:", trailerKey);

  const movies = (popularMovies.results || []).slice(1, 5);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieID(movies[0].id);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular", {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       // Token for authentication
  //       Authorization: `Bearer ${TMDB_TOKEN}`,
  //     },
  //   })
  //     .then(async (res) => {
  //       const data = await res.json();
  //       // console.log({ data });
  //       const popularMovies = data.results.slice(10, 14);
  //       setMovies(popularMovies);
  //       // console.log(popularMovies);
  //       setActiveMovieID(popularMovies[0].id);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching movies:", err);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const loopSlide = setInterval(() => {
      setActiveMovieID((prevSlideID) => {
        const currentSlideActive = movies.findIndex(
          (active) => active.id === prevSlideID,
        );
        const nextSlideActive = (currentSlideActive + 1) % movies.length;
        return movies[nextSlideActive].id;
      });
    }, 5000);

    return () => clearInterval(loopSlide);
  }, [movies]);

  return (
    <div className="relative">
      {loading || movies.length === 0 ? (
        <div className="flex aspect-video items-center justify-center bg-gray-900 text-white">
          <img
            src="/public/img/icons/loading.gif"
            alt="Loading..."
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="transition-all duration-700 ease-in-out">
          {movies
            .filter((movie) => movie.id === activeMovieID)
            .map((movie) => (
              <div
                key={movie.id}
                className="animate-fade-in transition-opacity duration-700"
              >
                <Movie
                  key={movie.id}
                  data={{
                    ...movie,
                    trailerVideoKey: (videoResponse.results || []).find(
                      (video) =>
                        video.type === "Trailer" && video.site === "YouTube",
                    )?.key,
                  }}
                  // trailerVideoKey={
                  //   (videoResponse.results || []).find(
                  //     (video) =>
                  //       video.type === "Trailer" && video.site === "YouTube",
                  //   )?.key
                  // }
                />
              </div>
            ))}
        </div>
      )}
      <PaginateIndicator
        movies={movies}
        activeMovieID={activeMovieID}
        setActiveMovieID={setActiveMovieID}
      />
    </div>
  );
};
export default FeatureMovie;
