import ButtonWithBar from "../../components/ButtonWithBar";
import TextWithLink from "../../components/TextWithLink";
import { SKILLS_HEADING_ID, SKILLS_ID } from "../../constants/id";
import { classNames } from "../../helpers/helpers";
import SkillsVisual from "./SkillsVisual";

type SkillsProps = {};
export default function Skills({}: SkillsProps) {
  return (
    <section
      id={SKILLS_ID}
      aria-labelledby={SKILLS_HEADING_ID}
      className={classNames(
        [
          "py-[var(--mobile-header-height)] space-y-[2rem]",
          "lg:py-0 lg:space-y-0",
        ],
        "lg:portrait:px-2rem",
        "lg:landscape:px-5rem",
        "lg:grid lg:grid-cols-8 lg:grid-rows-8 lg:gap-[1rem]"
      )}
    >
      <h2
        id={SKILLS_HEADING_ID}
        className={classNames("h2", [
          "lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:justify-self-start",
        ])}
      >
        Skills
      </h2>

      <TextWithLink
        containerClass={classNames(
          ["max-w-text"],
          ["mx-auto", "lg:mx-0"],
          "lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-3"
        )}
        text="I focus on creating user interfaces with React and the extensive JavaScript ecosystem. Though my expertise is mainly in frontend development, I've been involved in different phases of the development cycle and I'm always looking to expand my knowledge. Here are some of the recent tools I've used."
        button={
          <ButtonWithBar
            onClick={() => {
              window.open("https://github.com/toekneeyou", "_blank");
            }}
          >
            <span>See more on Github</span>
            <span aria-hidden="true" className="material-symbols-outlined">
              open_in_new
            </span>
          </ButtonWithBar>
        }
      />

      <SkillsVisual />
    </section>
  );
}
