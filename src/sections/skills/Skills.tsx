import { SKILLS_SECTION_ID } from "../../App";
import Highlights, { Highlight } from "../../features/highlights/Highlights";

const skills: Highlight[] = [
  { main: "4+ years", sub: "Work Experience" },
  { main: "Frontend", sub: "Web & Mobile" },
  { main: "UI/UX", sub: "Design & Prototyping" },
  { main: "Backend", sub: "Databases & APIs" },
];

export default function Skills() {
  return (
    <Highlights highlightsSectionId={SKILLS_SECTION_ID} highlights={skills} />
  );
}
