import { ReactNode, useState } from "react";
import { classNames } from "../helpers/helpers";

type ButtonWithBarProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  label?: string;
};

export default function ButtonWithBar({
  children,
  className = "",
  onClick,
  label,
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
        aria-label={label}
        className={classNames(
          "centered py-[8px] space-x-2 z-10 bg-my-black relative",
          [
            "after:content-[''] after:w-full after:absolute after:h-[2px] after:bottom-[0] after:bg-pink after:drop-shadow-pink-glow",
            "after:transition-transform after:duration-300",
          ],
          {
            "after:translate-x-[110%]": !isHovered,
            "after:translate-x-0": isHovered,
          }
        )}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
