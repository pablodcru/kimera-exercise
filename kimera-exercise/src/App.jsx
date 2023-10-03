import { useState } from "react";
import "./App.css";
import HeaderContainer from "./HeaderContainer";
import UsersContainer from "./UsersContainer";


export default function App() {
  const [searchedUser, setSearchedUser] = useState('')

  return (
    <div className=" min-h-screen">

      <HeaderContainer 
      searchedUser={searchedUser} setSearchedUser={setSearchedUser} 
      />

      <div className="h-4 bg-[#EAE9EE]"></div>

      <UsersContainer 
      searchedUser={searchedUser} 
      />
    </div>
  );
}
