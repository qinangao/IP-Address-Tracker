import Input from "./Input";
import Result from "./Result";
import Title from "./Title";

function Header() {
  return (
    <div className="relative h-[300px] bg-[url(/assets/pattern-bg-mobile.png)] p-[10px] text-3xl md:bg-[url(/assets/pattern-bg-desktop.png)] bg-cover bg-no-repeat md:h-[350px] flex flex-col">
      <Title />
      <Input />
      <Result />
    </div>
  );
}

export default Header;
