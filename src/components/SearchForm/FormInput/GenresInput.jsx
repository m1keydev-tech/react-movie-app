import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";

const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control }); // listen value cua mediaType => fetch lai genres
  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enabled: mediaType }, // khi co mediaType thi moi call API
  );
  //   console.log({ data, mediaType });

  useEffect(() => {
    onChange([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);

  return (
    <>
      <div className="flex flex-wrap gap-1">
        {(data.genres || []).map((genre) => (
          <p
            key={genre.id}
            className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? "bg-white text-black" : ""}`}
            onClick={() => {
              let newValue = [...value];
              if (value.includes(genre.id)) {
                newValue = newValue.filter((g) => g !== genre.id);
              } else {
                newValue = [...value, genre.id];
              }
              onChange(newValue);
            }}
          >
            {genre.name}
          </p>
        ))}
      </div>
    </>
  );
};
export default GenresInput;
