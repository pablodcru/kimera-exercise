import { useEffect } from "react";
import kimeraLogo from "./assets/kimera-icon.png";
import SearchBar from "./SearchBar";

export default function HeaderContainer({searchedUser, setSearchedUser}) {

    return (
        <div className="min-h-[20vh] bg-gradient-to-r from-[#E6A44D] to-[#F0BA74] w-full relative">
            <img src={kimeraLogo} alt="logo" className="absolute top-2 left-5" />
            <div className="absolute bottom-4 w-full px-32">
                <div className="flex justify-between items-start ">
                    <p className="text-8xl tracking-widest !font-indie">Find Me</p>
                    <div className="mt-4">
                        <SearchBar value={searchedUser} setValue={setSearchedUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}