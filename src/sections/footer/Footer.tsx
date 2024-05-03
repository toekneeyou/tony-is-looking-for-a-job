import IconButton from "../../components/iconButton/IconButton";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import { FOOTER_ID } from "../../constants/id";
import "./footer.css";

export default function Footer() {
  return (
    <footer id={FOOTER_ID} className="FOOTER">
      <div className="divider" />
      <ul className="footer__links">
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
    </footer>
  );
}
