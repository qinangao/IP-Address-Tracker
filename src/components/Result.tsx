import { useLocation } from "../contexts/locationContext";
import DataDisplay from "./DataDisplay";

function Result() {
  const { location } = useLocation();
  if (!location) return;

  return (
    <div className="absolute z-100 top-45 md:top-55  left-1/2 transform -translate-x-1/2  md:h-[160px] bg-white w-[90%] xl:w-[65%] 2xl:w-[53%] p-[20px] text-center rounded-xl flex flex-col gap-[20px] md:flex-row  lg:text-left md:gap-0 md:px-0  md:divide-x lg:divide-gray-300">
      <DataDisplay label="IP ADDRESS" value={location?.ip} />
      <DataDisplay
        label="LOCATION"
        value={`${location?.city}, ${location?.country} ${location?.postcode}`}
      />
      <DataDisplay label="TIMEZONE" value={`UTC ${location.timezone}`} />
      <DataDisplay label="ISP" value={location.isp} />
    </div>
  );
}

export default Result;
