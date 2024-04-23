import {
  ABOUT_ME_SECTION_ID,
  ABOUT_ME_SECTION_LEFT_ID,
  ABOUT_ME_SECTION_RIGHT_ID,
} from "../../App";
import Description from "../../components/description/Description";
import Timeline from "../../features/timeline/Timeline";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <section id={ABOUT_ME_SECTION_ID} className="about_me">
      <div id={ABOUT_ME_SECTION_LEFT_ID} className="about_me__left">
        <Description
          title="About Me"
          body="The only thing that excites me more than a beautiful, intuitive user interface is hitting the slopes on my snowboard or sending a fun bouldering route. With over four years of experience in collaborative development environments, I've honed my skills in building engaging applications using React. Though my expertise lies in frontend development, I've been actively involved in every phase of the development lifecycle."
          position="left"
        />
      </div>
      <div id={ABOUT_ME_SECTION_RIGHT_ID} className="about_me__right">
        <Timeline />
      </div>
    </section>
  );
}
