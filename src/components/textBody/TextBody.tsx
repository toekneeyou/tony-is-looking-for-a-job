import { useEffect, useRef } from "react";

import "./textBody.css";

type TextBodyProps = {
  text: string;
  show?: boolean;
  showBorder?: boolean;
};

export default function TextBody({
  text,
  show = true,
  showBorder = false,
}: TextBodyProps) {
  const textBodyBorderRef = useRef<HTMLDivElement>(null);
  const textBodySpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!show) {
      if (textBodyBorderRef.current) {
        textBodyBorderRef.current.style.transition = `transform 0.5s ease, opacity 0.5s ease`;
        textBodyBorderRef.current.style.opacity = "0";
        textBodyBorderRef.current.style.transform = "translateX(-100%)";
      }
      if (textBodySpanRef.current) {
        textBodySpanRef.current.style.transition = `transform 0.5s ease, opacity 0.5s ease`;
        textBodySpanRef.current.style.display = "inline-block";
        textBodySpanRef.current.style.opacity = "0";
        textBodySpanRef.current.style.transform = "translateX(-1rem)";
      }
    }
  }, [show]);

  return (
    <div className="text_body">
      {showBorder && (
        <div className="text_body__border" ref={textBodyBorderRef} />
      )}
      <span ref={textBodySpanRef}>{text}</span>
    </div>
  );
}
