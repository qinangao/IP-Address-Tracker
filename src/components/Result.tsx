import { useLocation } from "../contexts/locationContext";
// Reusable DataDisplay component
function DataDisplay({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white font-semibold flex flex-col items-center md:pr-7 pl-3 lg:items-start lg:pr-15 lg:pl-5">
      <p className="text-[15px] text-[#969696] tracking-[1px] ">{label}</p>
      <p className="pt-[10px] md:pt-[20px] text-2xl">{value}</p>
    </div>
  );
}

function Result() {
  const { location } = useLocation();
  if (!location) {
    return <p>{"Loading..."}</p>;
  }
  return (
    <div className="absolute z-100 top-45 md:top-55  left-1/2 transform -translate-x-1/2  md:h-[160px] bg-white w-[90%] xl:w-[65%] 2xl:w-[60%] p-[20px] text-center rounded-xl flex flex-col gap-[20px] md:flex-row  lg:text-left md:gap-0 md:px-0  lg:divide-x lg:divide-gray-300">
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
