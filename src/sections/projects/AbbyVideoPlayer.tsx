import { useEffect, useRef, useState } from "react";
import { classNames } from "../../helpers/helpers";

type AbbyVideoPlayerProps = {
  coverSrc: string;
  videoSrc: string;
  className?: string;
  isSelected: boolean;
};
export default function AbbyVideoPlayer({
  coverSrc,
  videoSrc,
  className = "",
  isSelected,
}: AbbyVideoPlayerProps) {
  const [hasBeenPlayed, setHasBeenPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current as HTMLVideoElement;
    if (!isSelected) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  }, [isSelected]);

  return (
    <div
      className={classNames(
        "ABBY_VIDEO_PLAYER",
        "relative h-full max-w-max overflow-hidden",
        "border-[8px] border-[#111] rounded-3xl",
        { [className]: !!className }
      )}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className={classNames(
          "absolute top-0 left-0 right-0 h-full centered transition-opacity opacity-0",
          {
            "opacity-100": isHovered || !isPlaying,
          }
        )}
      >
        <div
          className={classNames(
            "absolute top-0 left-0 right-0 h-full centered z-10 transition-opacity duration-300 bg-[rgba(0,0,0,0.5)]"
          )}
        >
          <button
            className="group"
            onClick={() => {
              const video = videoRef.current!;
              if (video.paused) {
                setHasBeenPlayed(true);
                video.play();
              } else {
                video.pause();
              }
            }}
          >
            <span
              className={classNames(
                "material-symbols-outlined",
                "text-4rem text-app-white border-[0.5rem] border-app-white rounded-full p-[0.5rem] transition-all",
                "group-hover:drop-shadow-pink-glow"
              )}
            >
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>
        </div>
        <img
          className={classNames("relative object-contain z-0 h-full", {
            "!opacity-0": isPlaying || hasBeenPlayed,
          })}
          src={coverSrc}
        />
      </div>

      <video
        className="h-full"
        ref={videoRef}
        src={videoSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
      />
    </div>
  );
}
