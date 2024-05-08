import { useRef } from "react";
import { ABOUT_ME_SECTION_ID, ABOUT_ME_TONY_IMG_ID } from "../../constants/id";
import AboutMeVisual from "./AboutMeVisual";
import tonyLa from "../../assets/tony-la.jpg";
import ButtonWithBar from "../../components/ButtonWithBar";
import TextWithButton from "../../components/TextWithLink";
import { classNames } from "../../helpers/helpers";

const resumeLink =
  process.env.RESUME_LINK ??
  "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/Resume_20240502.pdf";

type AboutMeProps = {};
export default function AboutMe({}: AboutMeProps) {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  return (
    <section
      id={ABOUT_ME_SECTION_ID}
      className={classNames(
        "w-full space-y-[2rem] py-[var(--mobile-header-height)]",
        {
          "xl:space-y-0 xl:mt-[10rem] xl:p-[5rem]": true,
          "xl:grid xl:grid-cols-4 xl:grid-rows-5 xl:gap-[1rem]": true,
        }
      )}
    >
      <TextWithButton
        containerClass="xl:col-start-3 xl:col-end-5 xl:row-start-1 xl:row-end-3 xl:grid xl:grid-cols-2 xl:grid-rows-2"
        title="About"
        text="Hello! I'm Tony, a frontend developer based in Los Angeles, CA. I've
            been in this field for over 4 years, and I love building engaging,
            intuitive, and beautiful user interfaces."
        textClass="xl:justify-self-end xl:self-start xl:col-start-1 xl:col-end-3"
        h2Class="xl:self-start"
        button={
          <ButtonWithBar
            onClick={() => {
              resumeRef.current?.click();
            }}
          >
            <span>Download Resume</span>
            <span className="material-symbols-outlined">download</span>
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

      <div
        id={ABOUT_ME_TONY_IMG_ID}
        className={classNames(
          "hidden col-start-1 col-end-3 row-start-1 row-end-4",
          { "xl:block": true, "xl:p-0": true }
        )}
      >
        <img
          src={tonyLa}
          alt="Author overlooking the downtown los angeles skyline."
        />
      </div>

      <AboutMeVisual />
    </section>
  );
}
