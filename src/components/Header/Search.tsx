import { MagnifyingGlass } from "phosphor-react";
import { InputText } from "../InputText";

export function Search() {
  return (
    <div className="flex flex-row">
      <InputText
        placeholder="Vídeo"
        name="search-video"
        value=""
        onChange={() => {}}
        className="w-96"
      />
      <button
        type="button"
        className="border border-zinc-400 px-8 text-inherit bg-inherit"
      >
        <MagnifyingGlass weight="bold" size={20} className="text" />
      </button>
    </div>
  );
}
