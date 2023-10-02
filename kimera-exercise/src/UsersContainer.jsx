import { useEffect, useState } from "react"
import UserCard from "./UserCard"

export default function UsersContainer ({searchedUser}) {
    const [usersData, setUsersData] = useState([])

    function fetchUsersData() {
        fetch('https://randomuser.me/api/?results=50').then((data) => data.json()).then((data) => setUsersData(data.results))
    }

    useEffect(() => {
        fetchUsersData()
    }, [])


    return (
        <div className="min-h-[80vh] w-full px-32 flex-wrap flex gap-8 justify-center overflow-visible z-[10] -translate-y-7 ">
            {usersData.length > 0 && usersData.map((user) => {
                if(!searchedUser) {

                    return(
                        <div key={user.cell}>
                        <UserCard user={user}  />
                    </div>

)
                } else {
                    if(
                        (user.name.first.toLowerCase()).includes(searchedUser.toLowerCase()) || 
                        (user.name.last.toLowerCase()).includes(searchedUser.toLowerCase())
                        ){
                        return(
                            <div key={user.cell}>
                            <UserCard user={user}  />
                        </div>
                    )
                }
                }
            })}

      </div>
    )
}