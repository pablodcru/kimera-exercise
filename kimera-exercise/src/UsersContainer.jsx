import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loader from "./Loader";

export default function UsersContainer({ searchedUser }) {
  const [usersData, setUsersData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

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

  return (
    <div className="min-h-[80vh] w-full px-32 flex-wrap flex gap-8 justify-center overflow-visible z-[10] -translate-y-7 ">
        
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
              user.name.last.toLowerCase().includes(searchedUser.toLowerCase())
            ) {
              return (
                <div key={user.cell}>
                  <UserCard user={user} />
                </div>
              );
            }
          }
        })}
      {showLoader && <Loader />}
    </div>
  );
}
