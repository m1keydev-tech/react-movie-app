const MediaInputType = ({ onChange, value, name }) => {
  return (
    <>
      <div className="accent-white">
        <input
          id="sf-type-movie"
          type="radio"
          name={name}
          value={"movie"}
          onChange={onChange}
          checked={value === "movie"}
          className="mr-1"
        />
        <label htmlFor="sf-type-movie">Movie</label>
        <br />
        <input
          id="sf-type-tv"
          type="radio"
          name={name}
          value={"tv"}
          onChange={onChange}
          checked={value === "tv"}
          className="mr-1"
        />
        <label htmlFor="sf-type-tv">TV</label>
      </div>
    </>
  );
};
export default MediaInputType;
