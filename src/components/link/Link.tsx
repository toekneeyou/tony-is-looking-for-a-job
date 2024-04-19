import { ReactNode } from "react";

import "./link.css";

type LinkProps = {
  children: ReactNode;
  onClick: () => void;
};

export default function Link({ children, onClick }: LinkProps) {
  return (
    <button className="link" onClick={onClick}>
      <span className="link__text">{children}</span>
      <div className="link__highlighter" style={{}} />
    </button>
  );
}
