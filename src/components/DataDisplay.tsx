// Reusable DataDisplay component
export default function DataDisplay({
  label,
  value,
  imgSrc,
  imgAlt = "Icon",
}: {
  label: string;
  value: string;
  imgSrc?: string;
  imgAlt?: string;
}) {
  return (
    <div className="bg-white font-semibold flex flex-col items-center md:pr-7 pl-3 lg:items-start lg:pr-15 lg:pl-5">
      <p className="text-[15px] text-[#969696] tracking-[1px] ">{label}</p>
      <div className="pt-[10px] md:pt-[20px] flex flex-row-reverse gap-3 justify-center items-center">
        <p className=" text-2xl">{value}</p>
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-8 h-5" />}
      </div>
    </div>
  );
}
