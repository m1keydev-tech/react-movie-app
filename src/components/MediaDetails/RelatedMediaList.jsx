import MediaCard from "@components/MediaCard";
import Loading from "../Loading";

const RelatedMediaList = ({ mediaList, isLoading }) => {
  return (
    <>
      <div className="mt-6">
        <p className="mt-6 mb-4 text-[1.4vw] font-bold">More like this </p>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            {mediaList.map((media) => (
              <MediaCard
                key={media.id}
                id={media.id}
                title={media.title || media.name}
                releaseDate={media.release_date || media.first_air_date}
                poster={media.poster_path}
                point={media.vote_average}
                mediaType={media.media_type}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default RelatedMediaList;
