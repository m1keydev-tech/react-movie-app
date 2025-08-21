import ImageComponent from "../Image";

const ActorInfo = ({ name, character, profilePath }) => {
  return (
    <>
      <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
        <ImageComponent
          className="w-full rounded-lg"
          src={
            profilePath
              ? `https://image.tmdb.org/t/p/original${profilePath}`
              : "/public/actor-no-image.svg"
          }
          alt=""
          width={270}
          height={350}
        />
        <div className="p-3">
          <p className="font-bold">{name}</p>
          <p>{character}</p>
        </div>
      </div>
    </>
  );
};
export default ActorInfo;
