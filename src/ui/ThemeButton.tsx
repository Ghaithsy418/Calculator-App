import { useEffect, useState } from "react";

function ThemeButton() {
  const [theme, setTheme] = useState(
    Number(localStorage.getItem("theme")) || 1,
  );
  const themeString = "theme-";

  useEffect(function () {
    document.documentElement.classList.add(
      themeString + String(localStorage.getItem("theme") || 1),
    );
  }, []);

  function handleClick() {
    if (theme === 1 || theme === 2) {
      document.documentElement.classList.remove(themeString + String(theme));
      document.documentElement.classList.add(themeString + String(theme + 1));
      setTheme((t) => t + 1);
    } else {
      document.documentElement.classList.remove(themeString + String(theme));
      document.documentElement.classList.add(themeString + String(1));
      setTheme(1);
    }
    if (theme !== 3) localStorage.setItem("theme", JSON.stringify(theme + 1));
    else localStorage.setItem("theme", JSON.stringify(1));
  }

  return (
    <div className="flex items-end gap-5 tracking-wide">
      <h3 className="text-xs uppercase">Theme</h3>
      <div className="flex w-14 flex-col">
        <span className="flex w-full items-center justify-around text-xs">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </span>
        <div className="relative h-5 w-full rounded-full bg-blue-600">
          <div
            onClick={handleClick}
            className={`absolute top-[3px] cursor-pointer transition-all duration-300 ${theme === 1 ? "translate-x-[3px]" : theme === 2 ? "translate-x-[20px]" : "translate-x-[39px]"} h-3.5 w-3.5 rounded-full bg-red-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ThemeButton;
