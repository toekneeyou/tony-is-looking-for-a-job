import { useEffect, useRef } from "react";
import "./tonyLogo.css";

type TonyLogoProps = {
  animate: boolean;
};

export default function TonyLogo({ animate }: TonyLogoProps) {
  const firstNameRef = useRef<HTMLDivElement>(null);
  const lastNameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animate && firstNameRef.current && lastNameRef.current) {
      const firstNameOverlay = firstNameRef.current.querySelector(
        ".first_name__overlay"
      ) as HTMLElement;
      firstNameOverlay.style.display = "initial";
      firstNameOverlay.style.transform = "translateX(0)";
      const lastNameOverlay = lastNameRef.current.querySelector(
        ".last_name__overlay"
      ) as HTMLElement;
      lastNameOverlay.style.display = "initial";
      lastNameOverlay.style.transform = "translateY(0)";
    }
  }, [animate]);

  return (
    <div className="tony_logo">
      <div ref={firstNameRef} className="first_name josefin_sans_bold ">
        TONY
        <div className="first_name__overlay" />
      </div>
      <div ref={lastNameRef} className="last_name josefin_sans_bold ">
        U<div className="last_name__overlay" />
      </div>
    </div>
  );
}
