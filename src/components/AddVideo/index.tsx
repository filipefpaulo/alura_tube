import { Plus } from "phosphor-react";
import { useState } from "react";
import { FormAddVideo } from "./FormAddVideo";

export function AddVideo() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-red-youtube rounded-full p-3 absolute bottom-0 right-0 m-5 flex align-middle justify-center"
        onClick={() => setIsFormOpen(true)}
      >
        <Plus size={25} weight="bold" className="text-zinc-200" />
      </button>
      {isFormOpen && <FormAddVideo setIsFormOpen={setIsFormOpen} />}
    </div>
  );
}
