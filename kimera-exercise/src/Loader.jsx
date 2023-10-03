import KimeraLogo from "./assets/kimera-icon.png";

export default function Loader() {
    return (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%]">
        <img src={KimeraLogo} alt="loader" className="animate-spin " />
      </div>
    )
}