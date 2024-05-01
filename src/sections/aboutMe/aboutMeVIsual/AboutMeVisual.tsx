import { useState } from "react";
import { genClassNames } from "../../../helpers/helpers";
import uclaLogo from "../../../assets/ucla-logo.webp";
import lewagonLogo from "../../../assets/lewagon-logo.jpg";
import nielsenLogo from "../../../assets/nielsen-logo.svg";
import tiltLogo from "../../../assets/tilt-logo.svg";

import "./aboutMeVisual.css";
import Button from "../../../components/button/Button";

type AboutMeVisualProps = {
  isMobile: boolean;
};
export default function AboutMeVisual({
  isMobile = false,
}: AboutMeVisualProps) {
  const [hoveredItem, setHoveredItem] = useState<
    "ucla" | "lewagon" | "nielsen" | "tilt" | null
  >(null);

  return (
    <div className="ABOUT_ME_VISUAL">
      <AboutMeVisualItem
        src={nielsenLogo}
        isMobile={isMobile}
        onMouseOver={() => setHoveredItem("nielsen")}
        isHovered={hoveredItem === "nielsen"}
        company="Gracenote, a Nielsen Company"
        title="Sr. Software Engineer"
        date="2020 - Present"
        className="ABOUT_ME_VISUAL_ITEM__nielsen"
      />
      <AboutMeVisualItem
        src={tiltLogo}
        onMouseOver={() => setHoveredItem("tilt")}
        isHovered={hoveredItem === "tilt"}
        company="Tilt"
        title="Software Engineer"
        date="2020-2021"
        isMobile={isMobile}
        className="ABOUT_ME_VISUAL_ITEM__tilt"
      />
      <AboutMeVisualItem
        src={lewagonLogo}
        onMouseOver={() => setHoveredItem("lewagon")}
        isHovered={hoveredItem === "lewagon"}
        company="Le Wagon"
        title="Web Development Program"
        date="2019"
        isMobile={isMobile}
        className="ABOUT_ME_VISUAL_ITEM__lewagon"
      />
      <AboutMeVisualItem
        src={uclaLogo}
        onMouseOver={() => setHoveredItem("ucla")}
        isHovered={hoveredItem === "ucla"}
        company="UCLA Jules Stein Eye Institute"
        title="Ophthalmic Technician II"
        date="2016 - 2019"
        isMobile={isMobile}
        className="ABOUT_ME_VISUAL_ITEM__ucla"
      />

      <Button
        onClick={() => {
          window.open("https://linkedin.com/in/tonyyu1129", "_blank");
        }}
        rightIcon="open_in_new"
      >
        See more on LinkedIn
      </Button>
    </div>
  );
}

type AboutMeVisualItemProps = {
  onMouseOver: () => void;
  isHovered: boolean;
  src: string;
  title: string;
  company: string;
  date: string;
  isMobile: boolean;
  className: string;
};
function AboutMeVisualItem({
  onMouseOver,
  isHovered,
  src,
  title,
  company,
  date,
  isMobile,
  className,
}: AboutMeVisualItemProps) {
  return (
    <div
      className={genClassNames({
        ABOUT_ME_VISUAL_ITEM: true,
        [className]: !!className,
      })}
      onMouseOver={onMouseOver}
    >
      <img className="about_me__logo" src={src} />
      <div
        className={genClassNames({
          overlay: !isMobile,
          about_me__description: true,
          about_me__description__show: isHovered,
        })}
      >
        <span className="about_me__description__title">{title}</span>
        <span className="about_me__description__company">{company}</span>
        <span className="about_me__description__date">{date}</span>
      </div>
    </div>
  );
}
