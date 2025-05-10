import { useLocation } from "../contexts/locationContext";
function Error() {
  const { error, handleCloseError } = useLocation();

  return (
    <div>
      <div className="absolute w-[80%] p-4 z-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 md:w-[50%] xl:w-[33%]  flex flex-col gap-[30px] items-center md:p-10 bg-amber-50 text-red-800 rounded-2xl ">
        <img src="/assets/icons8-error-64.png" alt="error" />
        <p className="text-xl">Error: {error}</p>
        <button
          type="button"
          onClick={handleCloseError}
          className="px-5 py-2.5 text-md cursor-pointer text-white font-semibold bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Try again
        </button>
      </div>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"></div>
    </div>
  );
}

export default Error;
