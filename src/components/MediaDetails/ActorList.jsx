import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <>
      <div>
        <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {currentActors.map((actor) => (
            <ActorInfo
              key={actor.id}
              id={actor.id}
              profilePath={actor.profile_path}
              name={actor.name}
              character={actor.character}
            />
          ))}
          {/* <ActorInfo />
          <ActorInfo />
          <ActorInfo />
          <ActorInfo /> */}
        </div>
        <p
          className="mt-2 cursor-pointer"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Show less" : "Show more"}
        </p>
      </div>
    </>
  );
};
export default ActorList;
