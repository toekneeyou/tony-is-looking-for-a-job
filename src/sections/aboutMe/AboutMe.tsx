import { useRef } from "react";
import { ABOUT_ME_SECTION_ID } from "../../constants/id";
import TextContent from "../../components/textContent/TextContent";
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
          bodyText={`Hello! I'm Tony, a frontend developer located in Los Angeles, CA. I have over four years of experience building engaging user interfaces with React. Coming from a healthcare background, I've delivered high-quality solutions that have directly contributed to improved healthcare outcomes. I believe my diverse background is a unique asset, enabling me to approach challenges with a distinctive perspective and a deep understanding of user needs.`}
          button={
            <Button
              onClick={() => {
                resumeRef.current?.click();
              }}
              rightIcon="download"
            >
              <a
                ref={resumeRef}
                href={
                  "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/Resume_20240502.pdf"
                }
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
