import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CircularProcessBar from "../CircularProcessBar";
import { groupBy } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "../Image";
import { useModalContext } from "@/context/ModalProvider";

const Banner = ({
  posterPath,
  backdropPath,
  title,
  certification,
  releaseDate,
  genres,
  point,
  overview,
  crews,
  trailerVideoKey,
}) => {
  const groupCrews = groupBy(crews, "job");

  const { openPopup } = useModalContext();
  // console.log(groupCrews);
  if (!title) return null;

  return (
    <div className="relative overflow-hidden bg-black text-white shadow-md shadow-slate-800">
      <ImageComponent
        width={1200}
        height={800}
        className="absolute inset-0 aspect-video w-full brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl items-center gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt=""
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">
            {/* Kimetsu No Yaiba: Infinity Castle{" "} */}
            {title}
          </p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 text-gray-400">
              {certification}
            </span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genres) => genres.name).join(", ")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-4">
              <CircularProcessBar
                percent={Math.round(point * 10 || 0)}
                size={3.5}
                strokeWidth={0.3}
                strokeColor={"green"}
              />
              Rating
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    className="aspect-video w-[50vw]"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />,
                );
              }}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
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
