import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { DarkModeContext } from "../../providers/DarkMode";

export function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <label htmlFor="toggleB" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggleB"
          className="sr-only"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div
          className={`flex flex-row w-14 rounded-full align-middle justify-between p-1 
            bg-zinc-${darkMode ? "300" : "800"}`}
        >
          <Moon size={20} weight="bold" />
          <Sun size={20} weight="bold" />
        </div>
        <div
          className={`
            dot absolute top-[2px]  w-6 h-6 rounded-full transition
            ${
              darkMode
                ? "transform translate-x-full right-[26px] bg-zinc-800"
                : "left-[2px] bg-zinc-200"
            }
        `}
        />
      </div>
    </label>
  );
}
