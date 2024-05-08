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
  return (
    <button
      className="group icon-button transition-all hover:translate-y-[4px] opacity-95 hover:opacity-100"
      tabIndex={0}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {!!IconEl && <IconEl />}
      {!!iconString && (
        <span className="material-symbols-outlined transition-all text-[30px] group-hover:text-white group-hover:drop-shadow-pink-glow">
          {iconString}
        </span>
      )}
      {showLabel && <span>{label}</span>}
    </button>
  );
}
