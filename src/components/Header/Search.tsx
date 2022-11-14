import { MagnifyingGlass } from "phosphor-react";
import { useContext, useState } from "react";
import { VideoContext } from "../../providers/Videos";
import { InputText } from "../InputText";

export function Search() {
  const { filterVideos } = useContext(VideoContext);
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-row">
      <InputText
        placeholder="Vídeo"
        name="search-video"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        className="w-[60%]"
      />
      <button
        type="button"
        className="border border-zinc-400 px-8 text-inherit bg-inherit"
        onClick={() => filterVideos(search)}
      >
        <MagnifyingGlass weight="bold" size={20} className="text" />
      </button>
    </div>
  );
}
