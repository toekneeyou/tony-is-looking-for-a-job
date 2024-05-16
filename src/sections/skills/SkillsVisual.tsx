import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { SkillDetail, skills } from "../../constants/data";
import { classNames } from "../../helpers/helpers";

type SkillsVisualProps = {};
export default function SkillsVisual({}: SkillsVisualProps) {
  const frontendRef = useRef<HTMLLIElement>(null);
  const backendRef = useRef<HTMLLIElement>(null);
  const designRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("lg:opacity-0");
            entry.target.classList.add("lg:opacity-1");
            entry.target.classList.remove("lg:-translate-x-[5rem]");
            entry.target.classList.add("lg:translate-x-0");
          } else {
            entry.target.classList.remove("lg:translate-x-0");
            entry.target.classList.add("lg:opacity-0");
            entry.target.classList.add("lg:-translate-x-[5rem]");
            entry.target.classList.remove("lg:opacity-1");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(frontendRef.current!);
    observer.observe(backendRef.current!);
    observer.observe(designRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ul
      aria-label="Web Development Expertise"
      className={classNames(
        "w-full flex",
        "lg:justify-center",
        "lg:row-start-3 lg:row-end-9 lg:col-start-1 lg:col-end-9",
        "lg:grid lg:grid-cols-8 lg:grid-rows-6 lg:gap-[1rem]",
        ["overflow-x-scroll", "lg:overflow-auto"],
        ["p-1rem", "lg:px-0"],
        ["space-x-[1rem]", "lg:space-x-0"]
      )}
    >
      {skills.sort().map((s) => {
        return (
          <SkillsVisualItem
            className={`${s.name}-visual-item`}
            ref={
              s.name === "frontend"
                ? frontendRef
                : s.name === "backend"
                ? backendRef
                : designRef
            }
            skill={s}
            key={s.name}
          />
        );
      })}
    </ul>
  );
}

type SkillsVisualItemProps = {
  skill: SkillDetail;
  className: string;
};
const SkillsVisualItem = forwardRef(function (
  { skill, className }: SkillsVisualItemProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <li
      aria-label={skill.name}
      ref={ref}
      className={classNames(
        "grid relative",
        "lg:aspect-square",
        "lg:transition-[transform,opacity] lg:will-change-[transform,opacity] lg:duration-500",
        ["min-w-[300px]", "lg:min-w-[260px]"],
        ["w-[300px]", "lg:w-full"],
        {
          "lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-6 lg:self-center":
            skill.name === "frontend",
          "lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-4":
            skill.name === "design",
          "lg:col-start-6 lg:col-end-9 lg:row-start-4 lg:row-end-7":
            skill.name === "backend",
          [className]: !!className,
        }
      )}
    >
      <label
        aria-hidden="true"
        className="absolute top-[-12px] left-[12px] font-semibold capitalize"
      >
        {skill.name}
      </label>
      <ul
        aria-label={`${skill.name} tools`}
        className={classNames(
          ["grid grid-cols-3 grid-rows-3 gap-[1rem]", "w-full bg-black p-1rem"],
          ["rounded-3xl", "lg:rounded-none"]
        )}
      >
        {skill.tools.map((s) => {
          return (
            <li
              aria-label={s.name}
              key={s.name}
              className="w-full h-auto aspect-square centered relative group"
            >
              <img
                src={s.icon}
                role="none"
                className="h-[75%] w-[75%] object-contain"
              />
              <div
                aria-hidden="true"
                className={classNames([
                  "absolute top-0 left-0 right-0 bottom-0",
                  "bg-[rgba(0,0,0,0.75)] centered opacity-0 transition-opacity",
                  "group-hover:opacity-100",
                ])}
              >
                <span className="font-bold">{s.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </li>
  );
});
