import { useState } from "react";
function Search() {
  const [search, setSearch] = useState<string>("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search) return;
    alert("test");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center pt-[10px]">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="w-[90%] text-[15px] px-[14px] bg-white md:w-[50%] lg:w-[35%] h-[50px] rounded-xl md:px-[20px] text-[#969696] md:text-[18px] outline-none"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="bg-[#2b2b2b] rounded-r-xl w-[50px] h-[50px] ml-[-50px] flex items-center justify-center hover:cursor-pointer"
          type="submit"
        >
          <img src="/assets/icon-arrow.svg" alt="arrow" />
        </button>
      </div>
    </form>
  );
}

export default Search;
