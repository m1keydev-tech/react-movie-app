import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "../Image";

const Movie = (props) => {
  const {
    data: { backdrop_path, title, overview, release_date },
  } = props;

  return (
    <>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
        className="aspect-video w-full brightness-75"
        width={900}
        height={500}
      />
      <div className="absolute bottom-[30%] left-8 w-1/2 text-white sm:w-1/3">
        <p className="sm: mb-2 text-[2vw] font-bold">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG18
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p className="text-[1vw] lg:text-lg">{overview}</p>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button className="flex cursor-pointer items-center gap-2 rounded bg-red-600 px-4 py-2 text-[10px] text-white hover:bg-red-700 lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <button className="flex cursor-pointer items-center gap-2 rounded bg-gray-600 px-4 py-2 text-[10px] text-white hover:bg-gray-700 lg:text-lg">
            Information
          </button>
        </div>
      </div>
    </>
  );
};
export default Movie;
