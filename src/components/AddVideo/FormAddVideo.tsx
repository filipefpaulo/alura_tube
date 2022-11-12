import { X } from "phosphor-react";

export function FormAddVideo({
  setIsFormOpen,
}: {
  setIsFormOpen: (value: boolean) => void;
}) {
  return (
    <form
      className="flex align-middle justify-center"
      onSubmit={(evento) => {
        evento.preventDefault();
        setIsFormOpen(false);
      }}
    >
      <div className="flex flex-col w-[30%]">
        <button type="button" className="" onClick={() => setIsFormOpen(false)}>
          <X size={25} weight="bold" className="" />
        </button>
        <input
          placeholder="Titulo do vídeo"
          name="titulo"
          // value={formCadastro.values.titulo}
          // onChange={formCadastro.handleChange}
        />
        <input
          placeholder="URL"
          name="url"
          // value={formCadastro.values.url}
          // onChange={formCadastro.handleChange}
        />
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}
