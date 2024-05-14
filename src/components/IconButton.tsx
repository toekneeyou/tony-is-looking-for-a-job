import { classNames } from "../helpers/helpers";

type IconButtonProps = {
  onClick: () => void;
  iconString?: string;
  IconEl?: any;
  label?: string;
  showLabel?: string;
  className?: string;
  disabled?: boolean;
};

export default function IconButton({
  onClick,
  iconString,
  IconEl,
  label,
  showLabel,
  className = "",
  disabled,
}: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      className={classNames(
        "group icon-button",
        "transition-[transform,opacity] will-change-[transform,opacity] opacity-95",
        "hover:translate-y-[4px] hover:opacity-100",
        {
          [className]: !!className,
          "pointer-events-none !opacity-25": !!disabled,
        }
      )}
      tabIndex={0}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {!!IconEl && <IconEl />}
      {!!iconString && (
        <span
          className={classNames(
            "material-symbols-outlined",
            "transition-[color,drop-shadow] will-change-[color,drop-shadow] text-[30px]",
            "group-hover:text-white group-hover:drop-shadow-pink-glow"
          )}
        >
          {iconString}
        </span>
      )}
      {showLabel && <span>{label}</span>}
    </button>
  );
}
