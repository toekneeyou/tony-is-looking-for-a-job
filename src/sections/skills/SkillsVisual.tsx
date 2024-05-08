import { SkillDetail, skills } from "../../constants/data";
import { classNames } from "../../helpers/helpers";

type SkillsVisualProps = {};
export default function SkillsVisual({}: SkillsVisualProps) {
  return (
    <ul
      className={classNames(
        "w-full overflow-x-scroll p-[1rem] flex space-x-[1rem]",
        [
          "lg:justify-center lg:overflow-auto",
          "xl:px-0 xl:col-start-1 xl:col-end-5 xl:row-start-2 xl:row-end-4 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-[1rem] xl:space-x-0",
        ]
      )}
    >
      {skills.sort().map((s, i) => {
        return <SkillsVisualItem skill={s} key={s.name} />;
      })}
      {/* {!isMobile && (
        <Button
          onClick={() => {
            window.open("mailto:tonyyu1129@gmail.com", "_blank");
          }}
          rightIcon="open_in_new"
        >
          Need help with a project?
        </Button>
      )} */}
    </ul>
  );
}

type SkillsVisualItemProps = {
  skill: SkillDetail;
};
function SkillsVisualItem({ skill }: SkillsVisualItemProps) {
  return (
    <li
      className={classNames(
        "grid w-[300px] min-w-[300px] relative",
        ["xl:w-full xl:aspect-square"],
        {
          "xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-3":
            skill.name === "frontend",
          "xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3":
            skill.name === "design",
          "xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2":
            skill.name === "backend",
        }
      )}
    >
      <label className="absolute top-[-12px] left-[12px]">{skill.name}</label>
      <ul className="w-full grid grid-cols-3 grid-rows-3 bg-black p-[1rem] gap-[1rem]">
        {skill.tools.map((s) => {
          return (
            <li
              key={s.name}
              className="w-full h-auto aspect-square centered relative group"
            >
              <img
                src={s.icon}
                alt={`${s.name}-logo`}
                className="h-[75%] w-[75%] object-contain"
              />
              <div className="absolute bg-[rgba(0,0,0,0.75)] top-0 left-0 right-0 bottom-0 centered opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-bold">{s.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
