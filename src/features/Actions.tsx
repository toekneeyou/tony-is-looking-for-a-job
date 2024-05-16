import IconButton from "../components/IconButton";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import { classNames } from "../helpers/helpers";

type ActionsProps = {
  className?: string;
};

export default function Actions({ className = "" }: ActionsProps) {
  return (
    <ul
      className={classNames("centered space-x-[1rem]", {
        [className]: !!className,
      })}
      aria-label="Contact Information"
    >
      <li>
        <IconButton
          label="E-mail"
          iconString="mail"
          onClick={() => {
            window.open("mailto:tonyyu1129@gmail.com", "_blank");
          }}
        />
      </li>
      <li>
        <IconButton
          label="LinkedIn"
          IconEl={LinkedInIcon}
          onClick={() => {
            window.open("https://linkedin.com/in/tonyyu1129", "_blank");
          }}
        />
      </li>
      <li>
        <IconButton
          label="Github"
          IconEl={GithubIcon}
          onClick={() => {
            window.open("https://github.com/toekneeyou", "_blank");
          }}
        />
      </li>
    </ul>
  );
}
