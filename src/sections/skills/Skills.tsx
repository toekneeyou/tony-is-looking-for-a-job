import TextContent from "../../components/textContent/TextContent";
import { SKILLS_SECTION_ID } from "../../constants/id";
import SkillsVisual from "./skillsVisual/SkillsVisual";
import Button from "../../components/button/Button";
import "./skills.css";

type SkillsProps = {
  isMobile: boolean;
};
export default function Skills({ isMobile }: SkillsProps) {
  return (
    <section id={SKILLS_SECTION_ID} className="SKILLS hide">
      <div className="skills__text">
        <TextContent
          title="Skills & Tools"
          bodyText="I focus on creating user interfaces with React and the extensive JavaScript ecosystem. Though my expertise is mainly in frontend development, I've been involved in different phases of the development cycle and I'm always looking to expand my knowledge. Here are some of the recent tools I've used."
          button={
            <Button
              onClick={() => {
                window.open("https://github.com/toekneeyou", "_blank");
              }}
              rightIcon="open_in_new"
            >
              See more on Github
            </Button>
          }
        />
      </div>
      <div className="skills__visual">
        <SkillsVisual isMobile={isMobile} />
      </div>
    </section>
  );
}
