// Reusable DataDisplay component
function DataDisplay({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white font-semibold flex flex-col items-center lg:items-start md:pr-[50px] md:pl-[20px*]">
      <p className="text-[15px] text-[#969696] tracking-[1px]">{label}</p>
      <p className="pt-[10px] md:pt-[20px] text-2xl">{value}</p>
    </div>
  );
}

function Result() {
  return (
    <div className="absolute md:bottom-[-10%] md:left-[25%]  bg-white w-[90%] lg:w-[65%] 2xl:w-[50%] p-[20px] text-center rounded-lg flex flex-col gap-[20px] md:flex-row  md:text-left md:gap-0 md:px-0 md:items-center lg:divide-x lg:divide-gray-300">
      <DataDisplay label="IP ADDRESS" value="192.212.233.43" />
      <DataDisplay label="LOCATION" value="Brooklyn, NY" />
      <DataDisplay label="TIMEZONE" value="UTC-05:00" />
      <DataDisplay label="ISP" value="SpaceX Starlink" />
    </div>
  );
}

export default Result;
