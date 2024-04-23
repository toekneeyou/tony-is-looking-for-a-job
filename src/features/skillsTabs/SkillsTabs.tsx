import { useEffect, useState } from "react";
import "./skillsTabs.css";
import htmlLogo from "../../assets/html-logo.svg";
import cssLogo from "../../assets/css-logo.svg";
import jsLogo from "../../assets/js-logo.svg";
import tsLogo from "../../assets/ts-logo.svg";
import reactLogo from "../../assets/react-logo.svg";
import figmaLogo from "../../assets/figma-logo.svg";
import nodeLogo from "../../assets/node-logo.svg";
import expressLogo from "../../assets/express-logo.svg";
import illustratorLogo from "../../assets/illustrator-logo.svg";
import awsLogo from "../../assets/aws-logo.svg";
import sassLogo from "../../assets/sass-logo.svg";
import dockerLogo from "../../assets/docker-logo.svg";
import lightroomLogo from "../../assets/lightroom-logo.svg";
import photoshopLogo from "../../assets/photoshop-logo.svg";
import webcomponentLogo from "../../assets/webcomponent-logo.svg";

type Skill = "design" | "frontend" | "backend";
type Tool = { name: string; icon: any };
type SkillTab = { name: Skill; tools: Tool[] };
const skills: SkillTab[] = [
  {
    name: "design",
    tools: [
      { name: "Figma", icon: figmaLogo },
      { name: "Illustrator", icon: illustratorLogo },
      { name: "Lightroom", icon: lightroomLogo },
      { name: "Photoshop", icon: photoshopLogo },
    ],
  },
  {
    name: "frontend",
    tools: [
      { name: "React", icon: reactLogo },
      { name: "TypeScript", icon: tsLogo },
      { name: "JavaScript", icon: jsLogo },
      { name: "Sass", icon: sassLogo },
      { name: "CSS", icon: cssLogo },
      { name: "HTML", icon: htmlLogo },
      { name: "Web Components", icon: webcomponentLogo },
    ],
  },
  {
    name: "backend",
    tools: [
      { name: "Node.js", icon: nodeLogo },
      { name: "Express.js", icon: expressLogo },
      { name: "AWS", icon: awsLogo },
      { name: "Docker", icon: dockerLogo },
    ],
  },
];

export default function SkillsTabs() {
  const [selectedTab, setSelectedTab] = useState<SkillTab>(skills[1]);

  useEffect(() => {
    const skillsTabsList = document.querySelector(".skills_tabs__list");
    const underline = document.querySelector(
      ".skills_tabs__underline"
    ) as HTMLElement;
    if (skillsTabsList && underline) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === skillsTabsList) {
            underline.style.width = `${
              skillsTabsList.clientWidth / skills.length
            }px`;
          }
        }
      });

      observer.observe(skillsTabsList);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="skills_tabs">
      <ul className="skills_tabs__list">
        {skills.map((s) => {
          return (
            <li
              className={`josefin_sans_bold skills_tabs__tab ${
                selectedTab.name === s.name ? "skills_tabs__tab__selected" : ""
              }`}
              role="button"
              onClick={() => {
                setSelectedTab(s);
              }}
              key={s.name}
            >
              <span>{s.name}</span>
            </li>
          );
        })}
        <div
          className="skills_tabs__underline"
          style={{
            transform: `translate(${
              selectedTab.name === "design"
                ? 0
                : selectedTab.name === "frontend"
                ? 100
                : 200
            }%)`,
          }}
        />
      </ul>
      <ul className="skills_tabs__tools">
        {selectedTab.tools.map((t) => {
          return <ToolItem src={t.icon} key={t.name} label={t.name} />;
        })}
      </ul>
    </div>
  );
}

type ToolItemProps = {
  src: string;
  label: string;
};
function ToolItem({ src, label }: ToolItemProps) {
  return (
    <li className="skills_tabs__tools__item">
      <img src={src} alt={label} />
      <span>{label}</span>
    </li>
  );
}
