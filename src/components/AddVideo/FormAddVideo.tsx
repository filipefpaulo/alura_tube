import { X } from "phosphor-react";
import { useContext } from "react";
import { DarkModeContext } from "../../providers/DarkMode";
import { InputText } from "../InputText";

interface FormAddVideoProps {
  setIsFormOpen: (value: boolean) => void;
}

export function FormAddVideo({ setIsFormOpen }: FormAddVideoProps) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <form
      className="flex align-middle justify-center absolute top-0 left-0 w-full h-full bg-[#00000099] p-40"
      onSubmit={(e) => {
        e.preventDefault();
        setIsFormOpen(false);
      }}
    >
      <div
        className={`flex flex-col w-[30%] p-8 rounded-2xl 
          ${darkMode ? "bg-[#ffffff99]" : "bg-inherit"}`}
      >
        <button
          type="button"
          className="ml-auto"
          onClick={() => setIsFormOpen(false)}
        >
          <X size={25} weight="bold" className="" />
        </button>
        <InputText
          className="rounded-md w-auto mt-4"
          placeholder="Titulo do vídeo"
          name="title"
          value=""
          onChange={() => {}}
        />
        <InputText
          className="rounded-md w-auto mt-4"
          placeholder="URL do vídeo"
          name="url"
          value=""
          onChange={() => {}}
        />
        <button
          type="submit"
          className="bg-red-youtube p-3 rounded-full mt-4 w-fit px-8 m-auto"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
