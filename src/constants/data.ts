import {
  ABBY_SECTION_ID,
  ABOUT_ME_SECTION_ID,
  INTRO_SECTION_ID,
  SKILLS_SECTION_ID,
} from "./id";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import jsLogo from "../assets/js-logo.svg";
import tsLogo from "../assets/ts-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import figmaLogo from "../assets/figma-logo.svg";
import nodeLogo from "../assets/node-logo.svg";
import expressLogo from "../assets/express-logo.svg";
import illustratorLogo from "../assets/illustrator-logo.svg";
import awsLogo from "../assets/aws-logo.svg";
import sassLogo from "../assets/sass-logo.svg";
import dockerLogo from "../assets/docker-logo.svg";
import lightroomLogo from "../assets/lightroom-logo.svg";
import photoshopLogo from "../assets/photoshop-logo.svg";
import reduxLogo from "../assets/redux-logo.svg";
import postmanLogo from "../assets/postman-logo.svg";
import tailwindLogo from "../assets/tailwind-logo.svg";
import nextLogo from "../assets/next-logo.svg";

export type Section = "intro" | "about me" | "skills" | "projects";
export type SectionDetail = {
  label: Section;
  id: string;
};
export const sections: SectionDetail[] = [
  { label: "intro", id: INTRO_SECTION_ID },
  { label: "about me", id: ABOUT_ME_SECTION_ID },
  { label: "skills", id: SKILLS_SECTION_ID },
  { label: "projects", id: ABBY_SECTION_ID },
];

export type Skill = "design" | "frontend" | "backend";
export type Tool = { name: string; icon: any };
export type SkillDetail = { name: Skill; tools: Tool[] };
export const skills: SkillDetail[] = [
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
      { name: "Redux", icon: reduxLogo },
      { name: "TypeScript", icon: tsLogo },
      { name: "JavaScript", icon: jsLogo },
      { name: "Tailwind", icon: tailwindLogo },
      { name: "Sass", icon: sassLogo },
      { name: "HTML", icon: htmlLogo },
      { name: "CSS", icon: cssLogo },
      { name: "Next.js", icon: nextLogo },
    ],
  },
  {
    name: "backend",
    tools: [
      { name: "Node.js", icon: nodeLogo },
      { name: "Express.js", icon: expressLogo },
      { name: "Postman", icon: postmanLogo },
      { name: "AWS", icon: awsLogo },
      { name: "Docker", icon: dockerLogo },
    ],
  },
];
