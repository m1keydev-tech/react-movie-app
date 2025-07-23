import CircularProcessBar from "./CircularProcessBar";

const MediaCard = ({ poster, title, releaseDate, point, mediaType }) => {
  return (
    <div className="relative rounded-lg border border-slate-800">
      {mediaType === "tv" && (
        <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md">
          TV Shows
        </p>
      )}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt="media-card"
      />
      <div className="relative -top-[1.5vw] px-2">
        <CircularProcessBar
          percent={Math.round(point * 10)}
          strokeColor={point >= 7 ? "green" : point >= 5 ? "orange" : "red"}
        ></CircularProcessBar>
        <p className="mt-2 font-bold">{title}</p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
};
export default MediaCard;
