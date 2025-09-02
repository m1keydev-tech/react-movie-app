const TVShowInformation = ({ tvInfo }) => {
  return (
    <>
      <div>
        <p className="mb-4 text-[1.4vw] font-bold">Information</p>
        <div className="mb-4">
          <p className="font-bold">Original Name</p>
          <p className="">{tvInfo.original_name}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Original Country</p>
          {(tvInfo.origin_country || []).map((countryCode) => (
            <img
              src={`https://flagcdn.com/32x24/${countryCode.toLowerCase()}.png`}
              alt=""
              key={tvInfo.id}
              className="mt-1 mr-1 w-[1.4vw]"
            />
          ))}
        </div>
        <div className="mb-4">
          <p className="font-bold">STATUS</p>
          <p className="">{tvInfo.status}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Network</p>
          <p className="mt-1 flex flex-col gap-5">
            {(tvInfo.networks || []).map((network) => (
              <img
                className="w-18 object-cover invert"
                key={network.id}
                src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
              />
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
export default TVShowInformation;
