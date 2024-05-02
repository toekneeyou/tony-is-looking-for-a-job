import { useState } from "react";
import "./iconButton.css";

type IconButtonProps = {
  onClick: () => void;
  iconString?: string;
  IconEl?: any;
  label?: string;
  showLabel?: string;
};

export default function IconButton({
  onClick,
  iconString,
  IconEl,
  label,
  showLabel,
}: IconButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className="ICON_BUTTON"
      tabIndex={0}
      onClick={onClick}
      aria-label={label}
      title={label}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {!!IconEl && <IconEl isGradient={isHovered} />}
      {!!iconString && (
        <span className="material-symbols-outlined">{iconString}</span>
      )}
      {showLabel && <span>{label}</span>}
    </button>
  );
}
