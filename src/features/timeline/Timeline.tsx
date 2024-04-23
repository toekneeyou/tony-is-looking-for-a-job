import { CSSProperties, useEffect, useRef, useState } from "react";
import "./timeline.css";

import nielsenLogo from "../../assets/nielsen-logo.svg";
import lewagonLogo from "../../assets/lewagon-logo.jpg";
import uclaLogo from "../../assets/ucla-logo.webp";
import Button from "../../components/button/Button";

const years = new Array(2024 - 2016 + 1)
  .fill(2016)
  .map((y, i) => {
    return y + i;
  })
  .reverse();
const TIMELINE_HEIGHT = 600;

export default function Timeline() {
  const [timelineHeight, setTimelineHeight] = useState(600);
  const [yearRange, setYearRange] = useState<[number, number]>([0, 0]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // adjust height of timeline when window is resized
    if (timelineRef.current) {
      const clientHeight = timelineRef.current.clientHeight;
      const observer = new ResizeObserver(() => {
        setTimelineHeight(clientHeight as number);
      });

      observer.observe(timelineRef.current);

      return () => {
        observer.disconnect();
      };
    }
  });

  return (
    <div
      ref={timelineRef}
      className="timeline"
      style={{
        minHeight: `${TIMELINE_HEIGHT}px`,
      }}
    >
      <div className="timeline__axis">
        <div className="timeline__axis__labels">
          {years.map((y, i) => {
            const segmentLength = timelineHeight / years.length;
            const showLabel =
              y === 2024 || y === 2020 || y === 2019 || y === 2016;
            const isHovered = y === yearRange[0] || y === yearRange[1];

            return (
              <div
                className={`timeline__axis__segment__label${
                  isHovered ? " timeline__axis__segment__label__hovered" : ""
                }`}
                style={{
                  height: `${segmentLength}px`,
                  zIndex: years.length - i,
                  opacity: showLabel ? 1 : 0,
                }}
              >
                <span>{y}</span>
                <div
                  className="timeline__axis__segment__circle"
                  style={{
                    backgroundColor:
                      y === yearRange[1]
                        ? "var(--red)"
                        : y === yearRange[0]
                        ? "var(--blue)"
                        : undefined,
                  }}
                />
              </div>
            );
          })}
          <div
            className={`timeline__axis__segment__label${
              yearRange[0] === 2011
                ? " timeline__axis__segment__label__hovered"
                : ""
            }`}
            style={{
              height: `${timelineHeight / years.length}px`,
              zIndex: years.length + 1,
            }}
          >
            <span>2011</span>
            <div
              className="timeline__axis__segment__circle"
              style={{
                backgroundColor:
                  2011 === yearRange[0] ? "var(--blue)" : undefined,
              }}
            />
          </div>
        </div>
        <div className="timeline__axis__segments">
          {years.map((y, i) => {
            const expandSegmentGradient = y === yearRange?.[1];
            let segmentLength = timelineHeight / years.length;
            let height = expandSegmentGradient
              ? yearRange[0] === 2011
                ? `${segmentLength}px`
                : `${segmentLength * (yearRange[1] - yearRange[0])}px`
              : 0;

            return (
              <div
                key={y}
                style={{
                  height: `${segmentLength}px`,
                  zIndex: years.length - i,
                }}
                className="timeline__axis__segment"
              >
                <div
                  className="timeline__axis__segment__gradient"
                  style={{
                    height,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <ul className="timeline__data">
        <TimelineItem
          main="Gracenote, a Nielsen company"
          sub="Sr. Software Engineer"
          src={nielsenLogo}
          style={{
            height: `${(timelineHeight / years.length) * 4}px`,
            backgroundColor: "white",
            padding: "1rem",
          }}
          onMouseOver={() => setYearRange([2020, 2024])}
          onMouseOut={() => setYearRange([0, 0])}
          fontColor="var(--black)"
        />
        <TimelineItem
          main="Le Wagon"
          sub="Web Development Program"
          src={lewagonLogo}
          style={{
            height: `${timelineHeight / years.length}px`,
            backgroundColor: "#E61006",
            padding: "0",
          }}
          onMouseOver={() => setYearRange([2019, 2020])}
          onMouseOut={() => setYearRange([0, 0])}
        />
        <TimelineItem
          main="UCLA Health"
          sub="Ophthalmic Technician II"
          src={uclaLogo}
          style={{
            height: `${(timelineHeight / years.length) * 3}px`,
            backgroundColor: "#0f7bb6",
          }}
          onMouseOver={() => setYearRange([2016, 2019])}
          onMouseOut={() => setYearRange([0, 0])}
        />
        <li
          className="timeline__item timeline__item__button"
          style={{ height: `${timelineHeight / years.length}px` }}
        >
          <Button
            onClick={() => {
              window.open("https://linkedin.com/in/tonyyu1129", "_blank");
            }}
            rightIcon="open_in_new"
            onMouseOver={() => setYearRange([2011, 2016])}
            onMouseOut={() => setYearRange([0, 0])}
          >
            See more on LinkedIn
          </Button>
          <div className="timeline__item__connector" />
        </li>
      </ul>
    </div>
  );
}

type TimelineItemProps = {
  src: string;
  style?: CSSProperties;
  main: string;
  sub: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
  fontColor?: string;
};
function TimelineItem({
  src,
  style,
  main,
  sub,
  onMouseOver,
  onMouseOut,
  fontColor,
}: TimelineItemProps) {
  return (
    <li
      className="timeline__item"
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img src={src} />
      <div className="timeline__item__description">
        <span style={{ color: fontColor }}>{main}</span>
        <span style={{ color: fontColor }}>{sub}</span>
      </div>
      <div className="timeline__item__connector" />
    </li>
  );
}
