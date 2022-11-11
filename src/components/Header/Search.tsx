import { MagnifyingGlass } from "phosphor-react";

export function Search() {
  return (
    <div className="flex flex-row">
      <input
        className="border border-zinc-400 p-3 px-4 w-96 bg-inherit text-inherit placeholder:text-inherit"
        type="text"
        placeholder="Vídeo"
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
