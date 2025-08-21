import useFetch from "@/hooks/useFetch";
import MediaCard from "@components/MediaCard";
import { useState } from "react";

const MediaList = ({ title, tabs }) => {
  // const [mediaList, setMediaList] = useState([]);
  const [activeTabID, setActiveTabID] = useState(tabs[0]?.id);

  const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     // Token for authentication
  //     Authorization: `Bearer ${TMDB_TOKEN}`,
  //   },
  // };

  const URLFetchingTrending = tabs.find((tab) => tab.id === activeTabID)?.url;
  const { data } = useFetch({ url: URLFetchingTrending });

  const mediaList = (data.results || []).slice(0, 12);

  // useEffect(() => {
  //   const URLFetchingTrending = tabs.find((tab) => tab.id === activeTabID)?.url;
  //   if (URLFetchingTrending) {
  //     fetch(URLFetchingTrending, options)
  //       .then(async (res) => {
  //         const data = await res.json();
  //         // console.log({ data });
  //         const trendingMediaList = data.results.slice(0, 12);
  //         // console.log("trendingMediaList", trendingMediaList);
  //         setMediaList(trendingMediaList);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching movies:", err);
  //       });
  //   }
  // }, [tabs, activeTabID]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeTabID ? "bg-white text-black" : ""}`}
              onClick={() => {
                setActiveTabID(tab.id);
              }}
            >
              {tab.name}
            </li>
          ))}
          {/* <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded px-2 py-1">TV Show</li> */}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => (
          <MediaCard
            id={media.id}
            key={media.id}
            poster={media.poster_path}
            title={media.title || media.original_name}
            releaseDate={media.release_date || media.first_air_date}
            point={media.vote_average}
            mediaType={media.media_type || activeTabID}
          />
        ))}
      </div>
    </div>
  );
};
export default MediaList;
