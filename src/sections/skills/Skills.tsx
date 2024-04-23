import { SKILLS_SECTION_ID, SKILLS_SECTION_Z_INDEX, WHITE } from "../../App";
import Description from "../../components/description/Description";
import Quote from "../../components/quote/Quote";
import TextBody from "../../components/textBody/TextBody";
import Highlights, { Highlight } from "../../features/highlights/Highlights";
import SkillsTabs from "../../features/skillsTabs/SkillsTabs";

import "./skills.css";

export default function Skills() {
  return (
    <section
      id={SKILLS_SECTION_ID}
      style={{ zIndex: SKILLS_SECTION_Z_INDEX }}
      className="skills_section"
    >
      <div className="skills_section__left">
        <SkillsTabs />
      </div>
      <div className="skills_section__right">
        <Description
          title="Skills & Tools"
          body="As a senior software engineer at Nielsen, I've worked with a wide range of frontend tools, with React being my go-to. I've also explored design, backend development, and devops—areas that, while not my main focus, I find both intriguing and rewarding to learn about. I love diving into new technologies and expanding my skill set, keeping my work both dynamic and exciting."
          position="right"
        />
      </div>
    </section>
  );
}
