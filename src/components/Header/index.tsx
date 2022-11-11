import { Search } from "./Search";
import { DarkModeToggle } from "./DarkModeToggle";
import { YoutubeLogo } from "../YoutubeLogo";

export function Header() {
  return (
    <div className="flex flex-row justify-around p-2">
      <div className="flex flex-row items-center">
        {/* <Image src={YoutubeLogo} alt="Logo do youtube" priority className="" /> */}
        <YoutubeLogo />
      </div>
      <Search />
      <DarkModeToggle />
    </div>
  );
}
