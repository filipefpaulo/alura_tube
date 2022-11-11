import { createContext, ReactNode, useState } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (a: boolean) => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`h-screen bg-zinc-${darkMode ? "100" : "900"} text-zinc-${
          darkMode ? "900" : "400"
        }`}
      >
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}
