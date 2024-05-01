import { useMemo } from "react";
import { SkillDetail, skills } from "../../../constants/data";
import { genClassNames } from "../../../helpers/helpers";
import Button from "../../../components/button/Button";
import "./skillsVisual.css";

type SkillsVisualProps = {
  isMobile: boolean;
};
export default function SkillsVisual({ isMobile }: SkillsVisualProps) {
  const sortedSkills = useMemo(() => {
    const copy = [...skills];
    if (isMobile) {
      return copy.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return copy;
    }
  }, [isMobile]);

  return (
    <div className="SKILLS_VISUAL">
      {sortedSkills.sort().map((s, i) => {
        return (
          <SkillsVisualItem
            skill={s}
            key={s.name}
            className={`SKILL_ITEM__${i}`}
          />
        );
      })}
      {!isMobile && (
        <Button
          onClick={() => {
            window.open("mailto:tonyyu1129@gmail.com", "_blank");
          }}
          rightIcon="open_in_new"
        >
          Need help with a project?
        </Button>
      )}
    </div>
  );
}

type SkillsVisualItemProps = {
  skill: SkillDetail;
  className?: string;
};
function SkillsVisualItem({ skill, className = "" }: SkillsVisualItemProps) {
  return (
    <div
      className={genClassNames({
        SKILLS_VISUAL_ITEM: true,
        [className]: !!className,
      })}
    >
      <div className="skills_visual_item__label">
        <span>{skill.name}</span>
      </div>
      <ul className="skills_visual_item__tools_list">
        {skill.tools.map((s) => {
          return (
            <li key={s.name} className="skills_visual_item__tools_list__item">
              <img src={s.icon} />
              <div className="overlay skills_visual_item__tools_list__item__overlay">
                <span>{s.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
