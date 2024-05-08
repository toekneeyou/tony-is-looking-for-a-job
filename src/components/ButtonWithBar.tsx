import { ReactNode, useState } from "react";
import { classNames } from "../helpers/helpers";

type ButtonWithBarProps = {
  children: ReactNode;
  className?: string;
};

export default function ButtonWithBar({
  children,
  className = "",
}: ButtonWithBarProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={classNames("centered w-full overflow-hidden", {
        [className]: !!className,
      })}
    >
      <div
        className={classNames(
          "divider flex-grow mr-[1rem] transition-transform duration-300",
          {
            "-translate-x-[100%]": isHovered,
          }
        )}
      />
      <button
        className={classNames(
          "centered py-[8px] space-x-2 z-10 bg-my-black relative",
          {
            "after:content-['']": true,
            "after:w-full": true,
            "after:absolute": true,
            "after:h-[2px]": true,
            "after:bottom-[0]": true,
            "after:bg-pink": true,
            "after:drop-shadow-pink-glow": true,
            "after:transition-transform": true,
            "after:duration-300": true,
            "after:translate-x-[110%]": !isHovered,
            "after:translate-x-0": isHovered,
          }
        )}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {children}
      </button>
    </div>
  );
}
