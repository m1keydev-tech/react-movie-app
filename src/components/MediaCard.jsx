import { Link } from "react-router-dom";
import CircularProcessBar from "./CircularProcessBar";
import ImageComponent from "./Image";

const MediaCard = ({ id, poster, title, releaseDate, point, mediaType }) => {
  return (
    <Link
      to={mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`}
      className="rounded-lg border border-slate-800"
    >
      <div className="relative">
        {mediaType === "tv" && (
          <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md">
            TV Shows
          </p>
        )}
        <ImageComponent
          src={`https://image.tmdb.org/t/p/original${poster}`}
          width={200}
          height={300}
          alt="media-card"
          className="w-full rounded-lg"
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
    </Link>
  );
};
export default MediaCard;
