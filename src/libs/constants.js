export const TRENDING_TABS = [
  {
    id: "all",
    name: "ALL",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
  },
  {
    id: "movie",
    name: "Movie",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  },
  {
    id: "tv",
    name: "TV Show",
    url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  },
];

export const TOP_RATED_TABS = [
  {
    id: "movie",
    name: "Movie",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  },
  {
    id: "tv",
    name: "TV Show",
    url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  },
];
