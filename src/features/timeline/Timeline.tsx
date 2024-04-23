import "./timeline.css";

import nielsenLogo from "../../assets/nielsen-logo.svg";
import lewagonLogo from "../../assets/lewagon-logo.jpg";
import uclaLogo from "../../assets/ucla-logo.webp";
import { CSSProperties } from "react";

const years = new Array(2024 - 2016 + 1)
  .fill(2016)
  .map((y, i) => {
    return y + i;
  })
  .reverse();

const TIMELINE_HEIGHT = 600;

export default function Timeline() {
  return (
    <div
      className="timeline"
      style={{
        height: `${TIMELINE_HEIGHT}px`,
        maxHeight: `${TIMELINE_HEIGHT}px`,
      }}
    >
      <div className="timeline__axis">
        {years.map((y, i) => {
          return (
            <div
              key={y}
              style={{
                height: `${TIMELINE_HEIGHT / years.length}px`,
                zIndex: i,
                borderLeftStyle: y === 2016 ? "dashed" : "solid",
              }}
              className="timeline__axis__segment"
            >
              {(y === 2016 || y === 2019 || y === 2020 || y === 2024) && (
                <div className="timeline__axis__segment__label">
                  <span>{y}</span>
                </div>
              )}
            </div>
          );
        })}
        <div
          className="timeline__axis__segment__label"
          style={{ bottom: "-8px", top: "unset", left: "-6px", zIndex: 10 }}
        >
          <span>2007</span>
        </div>
      </div>
      <ul className="timeline__data">
        <TimelineItem
          main="Gracenote, a Nielsen company"
          sub="Sr. Software Engineer"
          src={nielsenLogo}
          style={{
            height: `${(TIMELINE_HEIGHT / years.length) * 4}px`,
            backgroundColor: "white",
            padding: "1rem",
          }}
        />
        <TimelineItem
          main="Le Wagon"
          sub="Web Development Program"
          src={lewagonLogo}
          style={{
            height: `${TIMELINE_HEIGHT / years.length}px`,
            backgroundColor: "#E61006",
            padding: "0",
          }}
        />
        <TimelineItem
          main="UCLA Health"
          sub="Ophthalmic Technician II"
          src={uclaLogo}
          style={{
            height: `${(TIMELINE_HEIGHT / years.length) * 3}px`,
            backgroundColor: "#0f7bb6",
          }}
        />
        <button
          style={{
            height: `${TIMELINE_HEIGHT / years.length}px`,
          }}
        >
          See more on LinkedIn
        </button>
      </ul>
    </div>
  );
}

type TimelineItemProps = {
  src: string;
  style?: CSSProperties;
  main: string;
  sub: string;
};
function TimelineItem({ src, style, main, sub }: TimelineItemProps) {
  return (
    <li className="timeline__item" style={style}>
      <img src={src} />
      <div className="timeline__item__description">
        <span>{main}</span>
        <span>{sub}</span>
      </div>
      <div className="timeline__item__connector" />
    </li>
  );
}
