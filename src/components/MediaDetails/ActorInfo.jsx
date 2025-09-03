import { Link } from "react-router-dom";
import ImageComponent from "../Image";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <>
      <Link
        to={`/people/${id}`}
        className="rounded-lg border border-slate-300 bg-black shadow-sm"
      >
        <ImageComponent
          className="w-full rounded-lg"
          src={
            profilePath && `https://image.tmdb.org/t/p/original${profilePath}`
          }
          alt=""
          width={270}
          height={350}
        />
        <div className="p-3">
          <p className="font-bold">{name}</p>
          <p>{character}</p>
          {episodeCount && (
            <p>
              {episodeCount}{" "}
              {episodeCount && episodeCount === 1 ? "Episode" : "Episodes"}
            </p>
          )}
        </div>
      </Link>
    </>
  );
};
export default ActorInfo;
