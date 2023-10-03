import { useNavigate } from "react-router-dom";
import City from "../assets/house-solid.svg?react";

export default function UserCard({ user }) {
  let navigate = useNavigate();

  return (
    <div
      className="h-[15rem] w-48 bg-white flex flex-col items-center justify-between shadow-xl rounded-md hover:cursor-pointer hover:scale-110 transition-all ease-in-out"
      onClick={() => navigate("/users", { state: user })}
    >
      <div className="mt-8 flex flex-col items-center">
        <img
          src={user.picture.thumbnail}
          alt="photo"
          className="w-[65px] h-65px] rounded-full"
        />
        <p className="mt-4 text-sm">{user.name.title}</p>
        <p className="font-bold">
          {" "}
          {user.name.first} {user.name.last}
        </p>
      </div>
      <div className="flex w-full rounded-b-md justify-start px-8 gap-4  items-center h-1/5 bg-[#ffd7a2]">
        <City className="w-[12px] h-[12px]" />
        <p className="text-sm">{user.location.city}</p>
      </div>
    </div>
  );
}
