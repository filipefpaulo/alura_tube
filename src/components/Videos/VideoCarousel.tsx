import Image from "next/image";
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
            <div
              key={video.id}
              className="p-2 w-[20%] max-w-[250px] min-w-[150px]"
            >
              {video.thumb ? (
                <Image
                  src={video.thumb}
                  alt={video.title}
                  width={230}
                  height={140}
                  className={cx("rounded-xl")}
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
                  <MonitorPlay size={140} className="h-fit w-fit " />
                </div>
              )}
              {video.title}
            </div>
          )
        );
      })}
    </div>
  );
}
