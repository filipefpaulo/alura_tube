import { createContext, ReactNode, useState } from "react";
import cx from "classnames";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (a: boolean) => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={cx("h-full w-full", {
          "bg-zinc-100 text-zinc-900": darkMode,
          "bg-zinc-900 text-zinc-400": !darkMode,
        })}
      >
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}
