import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loader from "./Loader";
import NotFound from "./NotFound";

export default function UsersContainer({ searchedUser }) {
  const [usersData, setUsersData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  let noMatches = [];

  function fetchUsersData() {
    setShowLoader(true);
    fetch("https://randomuser.me/api/?results=50")
      .then((data) => data.json())
      .then((data) => {
        setShowLoader(false);
        setUsersData(data.results);
      });
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  //para mostrar componente de not found cuando no se encontro ningun usuario
  useEffect(() => {
    if (searchedUser.length > 0) {
      noMatches = usersData.filter(
        (user) =>
          user.name.first.toLowerCase().includes(searchedUser?.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchedUser?.toLowerCase())
      );

      if (noMatches.length === 0) {
        setShowNotFound(true);
      } 
    } 
    if(noMatches.length !== 0 || searchedUser.length === 0) {

      setShowNotFound(false);
    
    }
  }, [searchedUser]);

  {
    /* <div className="min-h-[80vh] w-full px-32 overflow-x-visible z-10">
<div className="w-full grid grid-flow-col grid-rows-2 gap-8 -translate-y-7 overflow-hidden overflow-x-scroll"> */
  }
  return (
    <div className="min-h-[80vh] w-full px-32 overflow-visible  z-[10] -translate-y-7 ">
      <div className="w-full flex-wrap flex gap-8 justify-center overflow-y-scroll max-h-[65vh] style-scrollbar">
        {usersData.length > 0 &&
          usersData.map((user) => {
            if (!searchedUser) {
              return (
                <div key={user.cell}>
                  <UserCard user={user} />
                </div>
              );
            } else {
              if (
                user.name.first
                  .toLowerCase()
                  .includes(searchedUser.toLowerCase()) ||
                user.name.last
                  .toLowerCase()
                  .includes(searchedUser.toLowerCase())
              ) {
                return (
                  <div key={user.cell}>
                    <UserCard user={user} />
                  </div>
                );
              }
            }
          })}
        {showNotFound && <NotFound props={'user'} />}
        {showLoader && <Loader />}
      </div>
    </div>
  );
}
