import { useState } from "react";
import { useSupabase } from "../../api/supabase";

export function UseForm(initialValues: any) {
  const [formData, setFormData] = useState(initialValues);
  const { addNewVideo } = useSupabase();

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function resetForm() {
    setFormData({});
  }

  function onSubmit() {
    addNewVideo(formData);
    resetForm();
  }

  return { formData, handleChange, resetForm, onSubmit };
}
