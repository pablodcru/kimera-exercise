import kimeraLogo from "../assets/kimera-icon.png";
import SearchBar from "../components/SearchBar";

export default function HeaderContainer({ searchedUser, setSearchedUser }) {
  return (
    <div className="min-h-[20vh] bg-gradient-to-r from-[#E6A44D] to-[#f6dcbc] w-full relative">
      <img
        src={kimeraLogo}
        alt="logo"
        className="absolute top:1 sm:top-2 left:3 sm:left-5 w-[50px] md:w-[70px] h-auto"
      />
      <div className="absolute bottom-7 md:bottom-10 lg:bottom-5 w-full sm:px-24 lg:px-32 px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start ">
          <p className="smF:text-7xl lg:text-8xl tracking-widest sm:tracking-normal md:tracking-widest !font-indie text-6xl">
            Find Me
          </p>
          <div className="sm:mt-4">
            <SearchBar value={searchedUser} setValue={setSearchedUser} />
          </div>
        </div>
      </div>
    </div>
  );
}
