import abbyBalanceVideo from "../../assets/abby-balance-video.mp4";
import abbyBalanceScreen from "../../assets/abby-balance-screen.jpg";
import abbyTransactionScreen from "../../assets/abby-transaction-screen.jpg";
import abbyTransactionVideo from "../../assets/abby-transaction-video.mp4";
import { classNames } from "../../helpers/helpers";
import { useState } from "react";
import IconButton from "../../components/IconButton";
import AbbyVideoPlayer from "./AbbyVideoPlayer";

type AbbyVideoType = {
  label: "balances & trends" | "transactions";
  video: string;
  image: string;
  index: number;
};
const abbyVideos: AbbyVideoType[] = [
  {
    label: "balances & trends",
    video: abbyBalanceVideo,
    image: abbyBalanceScreen,
  },
  {
    label: "transactions",
    video: abbyTransactionVideo,
    image: abbyTransactionScreen,
  },
].map((v, i) => ({ ...v, index: i } as AbbyVideoType));

type AbbyVideosProps = {
  className?: string;
};

export default function AbbyVideos({ className = "" }: AbbyVideosProps) {
  const [selectedVideo, setSelectedVideo] = useState<AbbyVideoType>(
    abbyVideos[0]
  );

  return (
    <div
      className={classNames(
        "ABBY_VIDEOS",
        "p-1rem w-full max-w-text mx-auto",
        "grid grid-rows-[max-content_max-content]",
        { [className]: !!className }
      )}
    >
      <div className={classNames("w-full overflow-hidden")}>
        <ul
          aria-label="abby video tabs"
          className={classNames(
            "grid grid-cols-2-full grid-flow-col",
            `transition-transform duration-500 -translate-x-[${
              abbyVideos.findIndex((v) => v.label === selectedVideo.label) * 100
            }%]`
          )}
        >
          {abbyVideos.map((v) => {
            return (
              <li
                aria-current={selectedVideo.index === v.index}
                key={v.label}
                className={classNames("flex w-full")}
                onClick={() => setSelectedVideo(v)}
              >
                <label className="flex-grow text-center font-semibold capitalize">
                  {v.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex w-full items-center px-1rem">
        <IconButton
          label="previous video"
          disabled={selectedVideo.index === 0}
          iconString="arrow_back_ios"
          onClick={() =>
            setSelectedVideo((p) => {
              if (p.index == 0) {
                return p;
              } else {
                return abbyVideos[p.index - 1];
              }
            })
          }
        />
        <div
          role="list"
          className={classNames(
            ["relative h-[376px] flex-grow", "grid grid-cols-1 grid-rows-1"],
            ["lg:h-[35rem]"]
          )}
        >
          {abbyVideos.map((v) => {
            const isSelected = selectedVideo.label === v.label;
            return (
              <AbbyVideoPlayer
                label={v.label}
                key={v.label}
                coverSrc={v.image}
                videoSrc={v.video}
                isSelected={isSelected}
                className={classNames(
                  "row-start-1 row-end-2 col-start-1 col-end-2 justify-self-center",
                  {
                    "animate-move-to-back": !isSelected,
                    "animate-bring-to-front": isSelected,
                  }
                )}
              />
            );
          })}
        </div>
        <IconButton
          label="next video"
          disabled={selectedVideo.index === abbyVideos.length - 1}
          iconString="arrow_forward_ios"
          onClick={() =>
            setSelectedVideo((p) => {
              if (p.index == abbyVideos.length - 1) {
                return p;
              } else {
                return abbyVideos[p.index + 1];
              }
            })
          }
        />
      </div>
    </div>
  );
}
