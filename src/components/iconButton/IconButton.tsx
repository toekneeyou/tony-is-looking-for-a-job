import { ReactNode } from "react";

import "./iconButton.css";

type IconButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export default function IconButton({ children, onClick }: IconButtonProps) {
  return (
    <button className="icon_button" onClick={onClick}>
      <div className="icon_button__background" />
      {children}
    </button>
  );
}
