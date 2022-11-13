import { MonitorPlay } from "phosphor-react";
import cx from "classnames";
import { DarkModeContext } from "../../providers/DarkMode";
import { useContext } from "react";

export function VideoCarousel({ videos }: { videos: [] }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="flex flex-row flex-nowrap">
      {videos.map((video: any) => {
        return (
          video.title && (
            <a
              href={video.url}
              target="blank"
              key={video.id}
              className="p-2 w-[20%] max-w-[250px] min-w-[150px]"
            >
              {video.thumb ? (
                <div
                  className="w-auto max-w[230px] h-[140px] flex justify-center rounded-xl bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${video.thumb})` }}
                />
              ) : (
                <div
                  className={cx(
                    "w-auto max-w[230px] h-[140px] flex justify-center rounded-xl",
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
