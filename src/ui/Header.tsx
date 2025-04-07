import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <div className="flex items-center justify-between p-3 text-slate-100">
      <h1 className="text-2xl font-bold tracking-wide">calc</h1>
      <ThemeButton />
    </div>
  );
}

export default Header;
