import { createContext, ReactNode, useEffect, useState } from "react";
import { useSupabase } from "../api/supabase";

export const VideoContext = createContext({
  videos: {},
  filterVideos: (_a: string) => {},
});

export function VideoProvider({ children }: { children: ReactNode }) {
  const { getAllVideos } = useSupabase();

  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    (async function () {
      setVideos((await getAllVideos()) || []);
    })();
  }, []);

  const filterVideos = (filter: string) => {
    setVideos(
      videos.filter(
        ({ title, category }: { title: string; category: string }) =>
          title.toLowerCase().includes(filter.toLowerCase()) ||
          category.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  return (
    <VideoContext.Provider value={{ videos, filterVideos }}>
      {children}
    </VideoContext.Provider>
  );
}
