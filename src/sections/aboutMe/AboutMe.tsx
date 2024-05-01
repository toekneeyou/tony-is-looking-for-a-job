import { useRef } from "react";
import { ABOUT_ME_SECTION_ID } from "../../constants/id";
import TextContent from "../../components/textContent/TextContent";
import nielsenLogo from "../../assets/nielsen-logo.svg";
import { genClassNames } from "../../helpers/helpers";
import Button from "../../components/button/Button";
import AboutMeVisual from "./aboutMeVIsual/AboutMeVisual";
import "./aboutMe.css";

type AboutMeProps = {
  isMobile: boolean;
};
export default function AboutMe({ isMobile }: AboutMeProps) {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  return (
    <section id={ABOUT_ME_SECTION_ID} className="ABOUT_ME hide">
      <div className={genClassNames({ about_me__text: true })}>
        <TextContent
          title="About Me"
          bodyText={`Hello! I'm Tony, a frontend developer located in Los Angeles, CA. I have over four years of experience building interactive user interfaces with React. Coming from a healthcare background, I’ve always prioritized solving problems and understanding patient and user needs. For more information, you can download my resume or get in touch with me using the links in the ${
            isMobile ? "located in the menu" : "bottom right corner"
          }.`}
          button={
            <Button
              onClick={() => {
                resumeRef.current?.click();
              }}
              rightIcon="download"
            >
              <a
                ref={resumeRef}
                href={nielsenLogo}
                download={"Resume"}
                style={{ display: "none" }}
              />
              Download Resume
            </Button>
          }
        />
      </div>
      <div className="about_me__visual">
        <AboutMeVisual isMobile={isMobile} />
      </div>
    </section>
  );
}
