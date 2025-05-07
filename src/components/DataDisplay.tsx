// Reusable DataDisplay component
export default function DataDisplay({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white font-semibold flex flex-col items-center md:pr-7 pl-3 lg:items-start lg:pr-15 lg:pl-5">
      <p className="text-[15px] text-[#969696] tracking-[1px] ">{label}</p>
      <p className="pt-[10px] md:pt-[20px] text-2xl">{value}</p>
    </div>
  );
}
