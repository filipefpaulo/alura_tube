import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://kntaazqxlkcakrodqxsk.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudGFhenF4bGtjYWtyb2RxeHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTUwNTEsImV4cCI6MTk4Mzc5MTA1MX0.I3Sdhw8xVyRGF-6NvMeT1gYKKbxEddJyvhaRwEHC8HI";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function useSupabase() {
  return {
    supabase,
    getAllVideos: async () => {
      const { data, error } = await supabase.from("alura_tube").select("*");
      if (error) {
        console.error(error);
      }
      return data;
    },
  };
}
