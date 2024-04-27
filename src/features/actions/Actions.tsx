import { useEffect, useRef } from "react";
import IconButton from "../../components/iconButton/IconButton";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import { ACTIONS_ID } from "../../constants/id";
import { ACTIONS_Z_INDEX } from "../../constants/zIndices";
import "./actions.css";

export default function Actions() {
  const actionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const aboutMeEl = actionsRef.current as HTMLUListElement;
    aboutMeEl.classList.add("ACTIONS__show");
  }, []);

  return (
    <ul
      ref={actionsRef}
      id={ACTIONS_ID}
      className="ACTIONS"
      style={{ zIndex: ACTIONS_Z_INDEX }}
    >
      <IconButton
        onClick={() => {
          window.open("mailto:tonyyu1129@gmail.com", "_blank");
        }}
        iconString="mail"
      />
      <IconButton
        IconEl={LinkedInIcon}
        onClick={() => {
          window.open("https://linkedin.com/in/tonyyu1129", "_blank");
        }}
      />
      <IconButton
        IconEl={GithubIcon}
        onClick={() => {
          window.open("https://github.com/toekneeyou", "_blank");
        }}
      />
    </ul>
  );
}
