import { useContext, useEffect, useRef } from "react";
import TextContent from "../../components/textContent/TextContent";
import { Skill, SkillDetail, Tool, skills } from "../../constants/data";
import { SKILLS_SECTION_ID } from "../../constants/id";
import "./skills.css";
import { AppContext } from "../../App";
import { combineClasses } from "../../helpers/helpers";

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);
  const { sectionIndex } = useContext(AppContext);

  useEffect(() => {
    const skillsEl = skillsRef.current as HTMLElement;
    if (sectionIndex == 2) {
      skillsEl.classList.add("SKILLS__show");
      skillsEl.classList.remove("SKILLS__hide");
    } else {
      skillsEl.classList.remove("SKILLS__show");
      skillsEl.classList.add("SKILLS__hide");
    }
  }, [sectionIndex]);
  return (
    <section ref={skillsRef} id={SKILLS_SECTION_ID} className="SKILLS">
      <div className="skills_left">
        <div className="skills_visual">
          {skills.map((s, i) => {
            return (
              <SkillItem
                skill={s}
                key={s.name}
                className={`SKILL_ITEM__${i}`}
              />
            );
          })}
        </div>
      </div>

      <div className="skills_right">
        <TextContent
          title="Skills & Tools"
          bodyText="The only thing that excites me more than a beautiful, intuitive user interface is hitting the slopes on my snowboard or sending a fun bouldering route. With over four years of experience in collaborative development environments, I've honed my skills in building engaging applications using React. Though my expertise lies in frontend development, I've been actively involved in every phase of the development lifecycle."
        />
      </div>
    </section>
  );
}

type SkillItemProps = {
  skill: SkillDetail;
  className: string;
};
function SkillItem({ skill, className }: SkillItemProps) {
  return (
    <div className={combineClasses(["SKILL_ITEM", className])}>
      <div
        className="skill_item__label"
        style={{
          transform: "translateX(-48px)",
        }}
      >
        <span>{skill.name}</span>
      </div>

      <ul
        className="skill_item__tools"
        style={{
          transform: "translateX(-48px)",
        }}
      >
        {skill.tools.map((t) => {
          return <ToolItem key={t.name} {...t} />;
        })}
        <div className="overlay skill_item__overlay" />
      </ul>
    </div>
  );
}

function ToolItem({ icon, name }: Tool) {
  return (
    <li className="TOOL_ITEM">
      <img src={icon} />
      <div className="overlay">
        <span>{name}</span>
      </div>
    </li>
  );
}
