import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "../providers/DarkMode";

export function User() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="flex flex-col">
      <div
        className="w-screen h-[250px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/c6/f0/7b/c6f07bd3b603b121e40ead8362b454d4.jpg)",
        }}
      />
      <div
        className={`flex flex-row items-center p-4 bg-zinc-${
          darkMode ? "200" : "800"
        }`}
      >
        <Image
          src="https://github.com/filipefpaulo.png"
          alt="Foto de perfil"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="ml-3 flex flex-col">
          <span className={`text-2xl text-zinc-${darkMode ? "900" : "200"}`}>
            Filipe Ferreira Paulo
          </span>
          <span className="text-md">Fullstack web Developer</span>
        </div>
      </div>
    </div>
  );
}
