import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CircularProcessBar from "../CircularProcessBar";
import { groupBy } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = ({ mediaDetail }) => {
  console.log("props:", mediaDetail);
  const certification = (
    (mediaDetail.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((release_date) => release_date.certification)?.certification;

  const crews = (mediaDetail.credits?.crew || [])
    .filter((crew) => ["Director", "Producer", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));
  // console.log(crews);

  const groupCrews = groupBy(crews, "job");
  // console.log(groupCrews);

  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${mediaDetail.backdrop_path}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl items-center gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/original${mediaDetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">
            {/* Kimetsu No Yaiba: Infinity Castle{" "} */}
            {mediaDetail.title}
          </p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 text-gray-400">
              {certification}
            </span>
            <p>{mediaDetail.release_date}</p>
            <p>
              {(mediaDetail.genres || [])
                .map((genres) => genres.name)
                .join(", ")}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-4">
              <CircularProcessBar
                percent={Math.round(mediaDetail.vote_average * 10)}
                size={3.5}
                strokeWidth={0.3}
                strokeColor={"green"}
              />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{mediaDetail.overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
