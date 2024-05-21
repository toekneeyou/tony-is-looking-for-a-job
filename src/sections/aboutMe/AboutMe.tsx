import { useRef } from "react";
import { ABOUT_ME_HEADING_ID, ABOUT_ME_ID } from "../../constants/id";
import AboutMeVisual from "./AboutMeVisual";
import tonyLa from "../../assets/tony-la.jpg";
import ButtonWithBar from "../../components/ButtonWithBar";
import TextWithLink from "../../components/TextWithLink";
import { classNames } from "../../helpers/helpers";
import { useLoadingContext } from "../../contexts/LoadingContext";

const resumeLink =
  process.env.RESUME_LINK ??
  "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/Resume_20240502.pdf";

type AboutMeProps = {};
export default function AboutMe({}: AboutMeProps) {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const { setLoadingState } = useLoadingContext();

  return (
    <section
      aria-labelledby={ABOUT_ME_HEADING_ID}
      id={ABOUT_ME_ID}
      className={classNames(
        "lg:grid lg:grid-cols-4 lg:grid-rows-5 lg:gap-[1rem]",
        ["w-full max-w-text", "lg:max-w-full"],
        ["space-y-[2rem]", "lg:space-y-0"],
        ["mt-[var(--mobile-header-height)] mx-auto", "lg:mt-0"],
        ["lg:portrait:px-2rem", "lg:landscape:px-5rem"],
        ["py-[var(--mobile-header-height)]", "lg:py-0"]
      )}
    >
      {/* heading */}
      <h2
        id={ABOUT_ME_HEADING_ID}
        className={classNames(
          "h2",
          "lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2"
        )}
      >
        About
      </h2>
      {/* description */}
      <TextWithLink
        containerClass={classNames(
          "lg:w-full",
          "lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-3 lg:justify-self-end lg:self-start",
          "lg:flex lg:items-end"
        )}
        textClass={classNames("lg:justify-self-end", "lg:max-w-small-text")}
        text="Hello! I'm Tony, a frontend developer based in Los Angeles, CA. I've
            been in this field for over 4 years, and I love building engaging,
            intuitive, and beautiful user interfaces."
        button={
          <ButtonWithBar
            className="lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-3"
            onClick={() => {
              resumeRef.current?.click();
            }}
          >
            <span>Download Resume</span>
            <span aria-hidden="true" className="material-symbols-outlined">
              download
            </span>
            <a
              ref={resumeRef}
              href={resumeLink}
              target="_blank"
              download={"TonyYu_Resume"}
              className="hidden"
            />
          </ButtonWithBar>
        }
      />
      {/* Image */}
      <div
        className={classNames(
          "z-10",
          "col-start-1 col-end-3 row-start-1 row-end-4",
          ["hidden", "lg:block"]
        )}
      >
        <img
          className="h-full object-cover object-right-bottom"
          src={tonyLa}
          alt="Author overlooking the downtown los angeles skyline."
          onLoad={() => setLoadingState((p) => ({ ...p, "about me": false }))}
        />
      </div>

      <AboutMeVisual />
    </section>
  );
}
