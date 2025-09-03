import { useState } from "react";
import CircularProcessBar from "../CircularProcessBar";
import ImageComponent from "../Image";

const SeasonList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentSeasons = isShowMore
    ? seasons.slice(0, 100)
    : seasons.slice(0, 3);

  const showButtonMore = currentSeasons.length >= 3;

  return (
    <>
      <div className="mt-8 text-[1.3vw]">
        <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
        <div className="space-y-4">
          {currentSeasons.map((season) => (
            <div
              key={season.id}
              className="flex items-center gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
            >
              <ImageComponent
                className={"h-3/4 w-1/4 rounded-lg object-cover"}
                src={
                  season.poster_path &&
                  `https://image.tmdb.org/t/p/original${season.poster_path}`
                }
              />

              <div className="space-y-1">
                <p className="text-[1.3vw] font-bold">{season.name}</p>
                <div className="flex items-center gap-2">
                  <p>Rating</p>
                  <CircularProcessBar
                    percent={Math.round(season.vote_average * 10)}
                    size={2.5}
                    strokeWidth={0.2}
                    strokeColor={
                      season.vote_average >= 7
                        ? "green"
                        : season.vote_average >= 5
                          ? "orange"
                          : "red"
                    }
                  />
                </div>
                <p>
                  <span className="text-[1.3vw] font-bold">Release Date:</span>{" "}
                  {season.air_date}
                </p>
                <p>{season.episode_count} Episodes</p>
                <p>{season.overview}</p>
              </div>
            </div>
          ))}
        </div>
        {showButtonMore && (
          <p
            className="mt-2 cursor-pointer"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? "Show less" : "Show more"}
          </p>
        )}
      </div>
    </>
  );
};
export default SeasonList;
