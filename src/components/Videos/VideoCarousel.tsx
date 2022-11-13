import { MonitorPlay } from "phosphor-react";
import cx from "classnames";
import { DarkModeContext } from "../../providers/DarkMode";
import { useContext } from "react";

export function VideoCarousel({ videos }: { videos: [] }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={cx(
        "flex flex-row flex-nowrap overflow-x-auto scrollbar-thin p-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full",
        {
          "scrollbar-thumb-zinc-800 scrollbar-track-zinc-300": darkMode,
          "scrollbar-thumb-zinc-200 scrollbar-track-zinc-800": !darkMode,
        }
      )}
    >
      {videos.map((video: any) => {
        return (
          video.title && (
            <a
              href={video.url}
              target="blank"
              key={video.id}
              className="p-2 w-[250px]"
            >
              {video.thumb ? (
                <div
                  className="w-[230px] h-[140px] flex justify-center rounded-xl bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${video.thumb})` }}
                />
              ) : (
                <div
                  className={cx(
                    "w[230px] h-[140px] flex justify-center rounded-xl",
                    {
                      "bg-zinc-200": darkMode,
                      "bg-zinc-800": !darkMode,
                    }
                  )}
                >
                  <MonitorPlay size={140} className="h-fit w-fit" />
                </div>
              )}
              {video.title}
            </a>
          )
        );
      })}
    </div>
  );
}
