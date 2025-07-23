const PaginateIndicator = ({ movies, activeMovieID, setActiveMovieID }) => {
  return (
    <div className="absolute right-8 bottom-[10%] flex items-center justify-center gap-2 py-4 text-white">
      <ul className="flex items-center gap-2">
        {movies.map((movie) => (
          <li
            key={movie.id}
            onClick={() => setActiveMovieID(movie.id)}
            className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieID ? "bg-slate-100" : "bg-slate-600"}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
export default PaginateIndicator;
