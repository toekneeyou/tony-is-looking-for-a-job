import { PROJECTS_HEADING_ID, PROJECTS_ID } from "../../constants/id";
import { classNames } from "../../helpers/helpers";
import Abby from "./Abby";

export default function Projects({}) {
  return (
    <section
      title="Projects"
      aria-labelledby={PROJECTS_HEADING_ID}
      id={PROJECTS_ID}
      className={classNames(
        ["space-y-[2rem] py-[var(--mobile-header-height)]"],
        ["lg:space-y-0 lg:px-5rem lg:py-0"]
      )}
    >
      <h2
        id={PROJECTS_HEADING_ID}
        className={classNames(["h2 mb-5rem"], ["lg:mb-0"])}
      >
        Projects
      </h2>
      <Abby />
    </section>
  );
}
