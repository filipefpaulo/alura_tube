import { useContext } from "react";
import { VideoContext } from "../../providers/Videos";
import { VideoCarousel } from "./VideoCarousel";

export function Videos() {
  const { playlists } = useContext(VideoContext);

  return (
    <div className="w-full p-10">
      {Object.entries(playlists).map(([playlist, videos], index) => {
        return (
          <div key={index}>
            <h1 className="text-xl">{playlist}</h1>
            <VideoCarousel videos={videos as []} />
          </div>
        );
      })}
    </div>
  );
}
