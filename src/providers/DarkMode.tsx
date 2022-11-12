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
        className={`h-screen 
          ${
            darkMode ? "bg-zinc-100 text-zinc-900" : "bg-zinc-900 text-zinc-400"
          }`}
      >
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}
