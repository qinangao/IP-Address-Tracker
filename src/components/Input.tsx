function Input() {
  return (
    <div>
      <div className="flex justify-center items-center pt-[10px]">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="w-[90%] text-[15px] px-[14px] bg-white md:w-[50%] lg:w-[35%] h-[50px] rounded-xl md:px-[20px] text-[#969696] md:text-[18px] outline-none"
        />
        <button className="bg-[#2b2b2b] rounded-r-xl w-[50px] h-[50px] ml-[-50px] flex items-center justify-center">
          <img src="/assets/icon-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Input;
