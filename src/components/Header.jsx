import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-4 px-8 text-white lg:h-20">
        <div className="flex items-center gap-4 lg:gap-6">
          <img src="/public/netflix.png" alt="" className="w-8 sm:w-10" />
          <a href="" className="lg:text-lg">
            Movie
          </a>
          <a href="" className="lg:text-lg">
            Television
          </a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};
export default Header;
