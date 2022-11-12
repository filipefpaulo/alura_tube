import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { DarkModeContext } from "../../providers/DarkMode";
import cx from "classnames";

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
          className={cx(
            "flex flex-row w-14 rounded-full align-middle justify-between p-1",
            {
              "bg-zinc-300": darkMode,
              "bg-zinc-800": !darkMode,
            }
          )}
        >
          <Moon size={20} weight="bold" />
          <Sun size={20} weight="bold" />
        </div>
        <div
          className={cx("absolute top-[2px]  w-6 h-6 rounded-full transition", {
            "transform translate-x-full right-[26px] bg-zinc-800": darkMode,
            "left-[2px] bg-zinc-200": !darkMode,
          })}
        />
      </div>
    </label>
  );
}
