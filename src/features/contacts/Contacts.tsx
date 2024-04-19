import { CONTACTS_Z_INDEX } from "../../App";
import IconButton from "../../components/iconButton/IconButton";
import "./contacts.css";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";

export default function Contacts() {
  return (
    <ul className="contacts" style={{ zIndex: CONTACTS_Z_INDEX }}>
      <IconButton
        onClick={() => {
          window.open("mailto:tonyyu1129@gmail.com", "_blank");
        }}
      >
        <span className="material-symbols-outlined">mail</span>
      </IconButton>
      <IconButton>
        <LinkedInIcon />
      </IconButton>
      <IconButton>
        <GithubIcon />
      </IconButton>
    </ul>
  );
}
