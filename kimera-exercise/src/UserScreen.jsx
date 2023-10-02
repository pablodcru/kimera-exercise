import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Email from "./assets/envelope-regular.svg?react";
import City from "./assets/map-pin-solid.svg?react";
import GoBack from "./assets/arrow-left-long-solid.svg?react"
import Phone from "./assets/phone-solid.svg?react";

export default function UserScreen() {
  let location = useLocation();
    let navigate = useNavigate()

  return (
    <div className="w-full h-full min-h-[100vh] bg-gradient-to-t from-[#E6A44D] to-[#F8D2A2] flex justify-center items-center">
        <div className="absolute top-5 left-10" onClick={() => navigate("/")}>
            <div className="flex items-center gap-2">

            <GoBack fill={"#475569"} className="h-[12px] w-[12px]" />
            <p className="text-[#475569] hover:cursor-pointer hover:underline hover:scale-105">Go Back</p>
            </div>
        </div>
      <div className="w-fit h-fit bg-gradient-to-t from-[#E6A44D] to-[#fffcf9] shadow-xl rounded-lg">
        <div className="flex">
          <div className="flex flex-col px-12 py-8 items-center justify-around text-slate-600">
            <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">{location.state.name.first}</p>
            <p className="text-4xl font-bold">{location.state.name.last}</p>
            </div>
            <div>
              <div className="flex flex-row items-center mt-6 gap-2">
                <Email fill={"#475569"} className="h-[12px] w-[12px]" />
                <p className="text-sm">{location.state.email}</p>
              </div>
              <div className="flex flex-row items-center mt-3 gap-2">
                <City fill={"#475569"} className="h-[12px] w-[12px]" />

                <div>
                  <p className="text-sm">
                    {location.state.location.city},{" "}
                    {location.state.location.postcode},
                  </p>
                  <p className="text-sm">{location.state.location.country}</p>
                </div>
              </div>
              <div className="flex flex-row items-center mt-3 gap-2">
              <Phone fill={"#475569"} className="h-[12px] w-[12px]" />
              <p>{location.state.phone}</p>
            </div>
            </div>
            
          </div>
          <img
            src={location.state.picture.large}
            alt="user"
            className="grayscale h-80 w-auto rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}
