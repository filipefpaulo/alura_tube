import { createContext, ReactNode, useEffect, useState } from "react";
import { useSupabase } from "../api/supabase";

export const VideoContext = createContext({
  playlists: {},
});

export function VideoProvider({ children }: { children: ReactNode }) {
  const { getAllVideos } = useSupabase();

  const [playlists, setPlaylist] = useState({});

  useEffect(() => {
    (async function () {
      const videos = (await getAllVideos()) || [];
      const newPlaylists: any = {};

      videos.forEach((video: any) => {
        if (!newPlaylists[video.category]) {
          newPlaylists[video.category] = [];
        }
        newPlaylists[video.category].push(video);
      });

      setPlaylist(newPlaylists);
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ playlists }}>
      {children}
    </VideoContext.Provider>
  );
}
