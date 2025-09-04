import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaInputType from "./FormInput/MediaInputType";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  const [searchParams] = useSearchParams();

  const mediaType = searchParams.get("mediaType");
  console.log("slug", mediaType);
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });

  const onSubmit = (data) => {
    console.log({ formData: data });
  };

  // form có thay đổi => trả về dữ liệu form hiện tại
  const formValues = watch();
  // console.log({ formValues });

  useEffect(() => {
    setSearchFormValues(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValues)]);

  return (
    <>
      <div className="rounded-lg p-4 shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            label="Media Type"
            name="mediaType"
            control={control}
            Component={MediaInputType}
          />
          <FormField
            label="Genres"
            name="genres"
            control={control}
            Component={GenresInput}
          />
          <FormField
            label="Rating"
            name="rating"
            control={control}
            Component={RatingInput}
          />
          {/* <input type="submit" /> */}
        </form>
      </div>
    </>
  );
};
export default SearchForm;
