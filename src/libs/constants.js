export const TRENDING_TABS = [
  {
    id: "all",
    name: "ALL",
    url: "/trending/all/day?language=en-US",
  },
  {
    id: "movie",
    name: "Movie",
    url: "/trending/movie/day?language=en-US",
  },
  {
    id: "tv",
    name: "TV Show",
    url: "/trending/tv/day?language=en-US",
  },
];

export const TOP_RATED_TABS = [
  {
    id: "movie",
    name: "Movie",
    url: "/movie/top_rated?language=en-US&page=1",
  },
  {
    id: "tv",
    name: "TV Show",
    url: "/tv/top_rated?language=en-US&page=1",
  },
];

export const GENDER_MAPPING = {
  0: "Not set / not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};
