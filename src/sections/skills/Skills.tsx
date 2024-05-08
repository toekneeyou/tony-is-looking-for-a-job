import ButtonWithBar from "../../components/ButtonWithBar";
import TextWithButton from "../../components/TextWithLink";
import { SKILLS_SECTION_ID } from "../../constants/id";
import { classNames } from "../../helpers/helpers";
import SkillsVisual from "./SkillsVisual";

type SkillsProps = {};
export default function Skills({}: SkillsProps) {
  return (
    <section
      id={SKILLS_SECTION_ID}
      className={classNames("py-[var(--mobile-header-height)] space-y-[2rem]", [
        "xl:space-y-0 xl:mt-[10rem] xl:p-[5rem]",
        "xl:grid xl:grid-cols-4 xl:grid-rows-3 xl:gap-[1rem]",
      ])}
    >
      <TextWithButton
        title="Skills"
        containerClass="xl:col-start-1 xl:col-end-5 xl:grid xl:grid-cols-4"
        h2Class="xl:col-start-1 xl:col-end-3 xl:m-0 xl:self-start xl:text-start"
        textClass="xl:col-start-3 xl:col-end-5"
        text="I focus on creating user interfaces with React and the extensive JavaScript ecosystem. Though my expertise is mainly in frontend development, I've been involved in different phases of the development cycle and I'm always looking to expand my knowledge. Here are some of the recent tools I've used."
        button={
          <ButtonWithBar
            onClick={() => {
              window.open("https://github.com/toekneeyou", "_blank");
            }}
          >
            <span>See more on Github</span>
            <span className="material-symbols-outlined">open_in_new</span>
          </ButtonWithBar>
        }
      />

      <SkillsVisual />
    </section>
  );
}
