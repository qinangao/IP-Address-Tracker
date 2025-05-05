import Input from "./Input";
function Header() {
  return (
    <div className="bg-[url(/assets/pattern-bg-mobile.png)] p-[10px] text-3xl md:bg-[url(/assets/pattern-bg-desktop.png)] bg-cover bg-no-repeat md:h-[350px] flex flex-col">
      <h1 className="py-[20px] md:p-[30px]  flex items-center justify-center text-white md:text-4xl font-bold tracking-[1px]">
        IP Address Tracker
      </h1>
      <Input />
    </div>
  );
}

export default Header;
