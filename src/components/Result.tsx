import { useLocation } from "../contexts/locationContext";
import DataDisplay from "./DataDisplay";

function Result() {
  const { location } = useLocation();
  if (!location) return;

  return (
    <div className="absolute z-10 top-45 md:top-65  left-1/2 transform -translate-x-1/2  md:h-[160px] bg-white w-[90%] xl:w-[65%] 2xl:w-[55%] p-[20px] text-center rounded-xl flex flex-col gap-[20px] md:flex-row  lg:text-left md:gap-0 md:px-0  md:divide-x lg:divide-gray-300">
      <DataDisplay label="IP ADDRESS" value={location?.ip} />
      <DataDisplay
        label="LOCATION"
        value={`${location?.city}, ${location?.countryName}`}
      />
      <DataDisplay label="COUNTRY" value={`${location.region}`} />
      <DataDisplay
        label="CALLING CODE"
        value={location.callingCode}
        imgSrc={location.flag}
        imgAlt={location.countryCode}
      />
    </div>
  );
}

export default Result;
