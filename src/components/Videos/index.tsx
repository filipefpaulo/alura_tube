import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../../providers/Videos";
import { VideoCarousel } from "./VideoCarousel";

export function Videos() {
  const { videos } = useContext(VideoContext);
  const [playlists, setPlaylists] = useState<any>({});

  useEffect(() => {
    const newPlaylists: any = {};

    (videos as []).forEach((video: any) => {
      if (!newPlaylists[video.category]) {
        newPlaylists[video.category] = [];
      }
      newPlaylists[video.category].push(video);
    });

    setPlaylists(newPlaylists);
  }, [videos]);

  return (
    <div className="w-full p-8">
      {Object.entries(playlists).map(([playlist, videos], index) => {
        return (
          <div key={index} className="m-4">
            <h1 className="text-xl mb-4">{playlist}</h1>
            <VideoCarousel videos={videos as []} />
          </div>
        );
      })}
    </div>
  );
}
