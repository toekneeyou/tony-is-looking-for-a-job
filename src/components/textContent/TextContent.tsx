import { ReactNode } from "react";
import "./textContent.css";

type TextContent = {
  title: string;
  bodyText?: string;
  bodyEl?: ReactNode;
  button?: ReactNode;
};

export default function TextContent({
  title,
  bodyText,
  bodyEl,
  button,
}: TextContent) {
  return (
    <div className="TEXT_CONTENT">
      <h2 className="josefin_sans_bold">{title}</h2>
      <div className="divider" />
      {bodyEl ? bodyEl : <span>{bodyText}</span>}
      {!!button && <div className="text_content__buttons">{button}</div>}
    </div>
  );
}
