import { ReactNode } from "react";
import "./button.css";

type ButtonProps = React.DOMAttributes<HTMLButtonElement> & {
  onClick: () => void;
  children: ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  height?: number;
};

export default function Button({
  onClick,
  children,
  leftIcon,
  rightIcon,
  height,
  ...attr
}: ButtonProps) {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ height: `${height}px` }}
      {...attr}
    >
      <div className="button__overlay" />
      {leftIcon && (
        <span className="material-symbols-outlined button__left_icon">
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className="material-symbols-outlined button__right_icon">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
