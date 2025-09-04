import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-4 px-8 text-white lg:h-20">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/">
            <img src="/public/netflix.png" alt="" className="w-8 sm:w-10" />
          </Link>
          <Link to="/search?mediaType=movie" className="lg:text-lg">
            Movie
          </Link>
          <Link to="/search?mediaType=tv" className="lg:text-lg">
            Television
          </Link>
        </div>
        <div>
          <Link to={`/search`}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
