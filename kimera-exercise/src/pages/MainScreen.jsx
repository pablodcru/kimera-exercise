import { useState } from "react";
import "../styles/App.css";
import HeaderContainer from "../templates/HeaderContainer";
import UsersContainer from "../templates/UsersContainer";

export default function App() {
  const [searchedUser, setSearchedUser] = useState("");

  return (
    <div className=" min-h-screen">
      
      <HeaderContainer
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
      />

      <div className="h-4 bg-[#EAE9EE]"></div>

      <UsersContainer searchedUser={searchedUser} />
    </div>
  );
}
