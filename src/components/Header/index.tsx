import { Search } from "./Search";
import { DarkModeToggle } from "./DarkModeToggle";
import { YoutubeLogo } from "../YoutubeLogo";

export function Header() {
  return (
    <div className="flex flex-row justify-around p-2 bg-inherit">
      <div className="flex flex-row items-center">
        <YoutubeLogo />
      </div>
      <Search />
      <DarkModeToggle />
    </div>
  );
}
