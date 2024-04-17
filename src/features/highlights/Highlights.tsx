import { CSSProperties, ReactNode } from "react";
import "./highlights.css";

export type Highlight = {
  main: string | ReactNode;
  sub: string | ReactNode;
};

type HighlightsProps = {
  highlightsSectionId: string;
  highlights: Highlight[];
  style?: CSSProperties;
};
export default function Highlights({
  highlightsSectionId,
  highlights,
  style,
}: HighlightsProps) {
  return (
    <section
      id={highlightsSectionId}
      className="highlights_section"
      style={style}
    >
      <ul className="highlights_list">
        {highlights.map((hl) => {
          return <Highlight key={JSON.stringify(hl)} {...hl} />;
        })}
      </ul>
    </section>
  );
}

type HighlightProps = Highlight & {};
function Highlight({ main, sub }: HighlightProps) {
  return (
    <li className="highlight">
      <div className="highlight_main">{main}</div>
      <div className="highlight_sub">{sub}</div>
    </li>
  );
}
