import { ReactNode } from "react";

import "./iconButton.css";

type IconButtonProps = {
  children: ReactNode;
  onClick: () => void;
  label: string;
};

export default function IconButton({
  children,
  onClick,
  label,
}: IconButtonProps) {
  return (
    <button className="icon_button" onClick={onClick} title={label}>
      <div className="icon_button__background" />
      {children}
    </button>
  );
}
