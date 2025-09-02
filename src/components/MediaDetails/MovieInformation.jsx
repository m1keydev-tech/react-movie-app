import { currencyFormat } from "@/libs/utils";

const MovieInformation = ({ movieInfo }) => {
  return (
    <>
      <div>
        <p className="mb-4 text-[1.4vw] font-bold">Information</p>
        <div className="mb-4">
          <p className="font-bold">Original Name</p>
          <p className="">{movieInfo.original_title}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Original Country</p>
          {(movieInfo.origin_country || []).map((countryCode) => (
            <img
              key={movieInfo.id}
              src={`https://flagcdn.com/32x24/${countryCode.toLowerCase()}.png`}
              alt=""
              className="mt-1 mr-1 w-[1.4vw]"
            />
          ))}
        </div>
        <div className="mb-4">
          <p className="font-bold">STATUS</p>
          <p className="">{movieInfo.status}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Budget</p>
          <p className="">{currencyFormat(movieInfo.budget, "USD")}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Revenue</p>
          <div className="">
            <p className="">{currencyFormat(movieInfo.revenue, "USD")}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieInformation;
