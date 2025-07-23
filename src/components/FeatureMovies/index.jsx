// import { useState } from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
//
const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMovieID, setActiveMovieID] = useState();

  const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        // Token for authentication
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        const popularMovies = data.results.slice(10, 14);
        setMovies(popularMovies);
        console.log(popularMovies);
        setActiveMovieID(popularMovies[0].id);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, []);

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
            className="h-150 w-150 object-contain"
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
                <Movie data={movie} />
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
