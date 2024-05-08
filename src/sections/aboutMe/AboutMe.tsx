import { useRef } from "react";
import { ABOUT_ME_SECTION_ID, ABOUT_ME_TONY_IMG_ID } from "../../constants/id";
import AboutMeVisual from "./AboutMeVisual";
import tonyLa from "../../assets/tony-la.jpg";
import ButtonWithBar from "../../components/ButtonWithBar";

const resumeLink =
  process.env.RESUME_LINK ??
  "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/Resume_20240502.pdf";

type AboutMeProps = {};
export default function AboutMe({}: AboutMeProps) {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  return (
    <section
      id={ABOUT_ME_SECTION_ID}
      className="w-full py-[var(--mobile-header-height)] xl:mt-[10rem] xl:p-[5rem] xl:grid xl:grid-cols-4 xl:grid-rows-5 xl:gap-[1rem]"
    >
      <div className="p-[1rem] flex flex-col justify-center items-center xl:col-start-3 xl:col-end-5 xl:row-start-1 xl:row-end-3 xl:grid xl:grid-cols-2 xl:grid-rows-2">
        <h2 className="josefin_sans_bold leading-none text-[1.25rem] text-center !font-medium mb-[2rem] xl:mb-0 xl:text-[128px] xl:col-start-1 xl:col-end-3 xl:justify-self-start">
          About
        </h2>
        <div className="max-w-[52ch] xl:max-w-[40ch] justify-self-center xl:justify-self-end xl:col-start-1 xl:col-end-3">
          <p className="mb-[2rem]">
            Hello! I'm Tony, a frontend developer based in Los Angeles, CA. I've
            been in this field for over 4 years, and I love building engaging,
            intuitive, and beautiful user interfaces.
          </p>
          <ButtonWithBar>
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
        </div>
      </div>

      <div
        id={ABOUT_ME_TONY_IMG_ID}
        className="hidden xl:block col-start-1 col-end-3 row-start-1 row-end-4"
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
