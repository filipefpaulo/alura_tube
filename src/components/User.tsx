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
            "url(https://3.bp.blogspot.com/-zvvZFrfFQ6k/XGHkab95xcI/AAAAAAAACdY/9HyNnoPd1mEtM0o3LG3M1hF6K9z2inW3wCKgBGAs/w5120-h2160-c/mountain-landscape-abstract-4K-151.jpg)",
        }}
      />
      <div
        className={`flex flex-row items-center p-4 
          bg-zinc-${darkMode ? "200" : "800"}`}
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
          <span className="text-md text-inherit">Fullstack web Developer</span>
        </div>
      </div>
    </div>
  );
}
