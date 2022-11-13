import { X } from "phosphor-react";
import { useContext } from "react";
import { DarkModeContext } from "../../providers/DarkMode";
import { InputText } from "../InputText";
import cx from "classnames";
import { UseForm } from "./UseForm";
import { useRouter } from "next/router";

interface FormAddVideoProps {
  setIsFormOpen: (value: boolean) => void;
}

function getThumbnail(url: string) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export function FormAddVideo({ setIsFormOpen }: FormAddVideoProps) {
  const router = useRouter();
  const { darkMode } = useContext(DarkModeContext);
  const { formData, handleChange, onSubmit } = UseForm({
    title: "",
    url: "",
    thumb: "",
    category: "",
  });

  return (
    <form
      className="flex align-middle justify-center fixed top-0 left-0 w-full h-full bg-[#00000099] p-40"
      onSubmit={(e) => {
        e.preventDefault();
        formData.url && (formData.thumb = getThumbnail(formData.url));
        onSubmit();
        setIsFormOpen(false);
        router.reload();
      }}
    >
      <div
        className={cx("flex flex-col w-[30%] p-8 rounded-2xl", {
          "bg-[#ffffff99]": darkMode,
          "bg-inherit": !darkMode,
        })}
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
          value={formData.title}
          onChange={handleChange}
        />
        <InputText
          className="rounded-md w-auto mt-4"
          placeholder="URL do vídeo"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
        <InputText
          className="rounded-md w-auto mt-4"
          placeholder="Categoria"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-red-youtube p-3 rounded-full mt-4 w-fit px-8 m-auto text-lg disabled:opacity-50"
          disabled={!formData.title || !formData.url || !formData.category}
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
