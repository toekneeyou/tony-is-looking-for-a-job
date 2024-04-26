import { sections } from "../../constants/data";
import { combineClasses } from "../../helpers/helpers";
import "./navBar.css";

type NavBarProps = {
  className?: string;
};
export default function NavBar({ className }: NavBarProps) {
  return (
    <nav className={combineClasses(["NAV_BAR", className])}>
      <ul
        className={combineClasses(["nav_list"])}
        style={{
          gridTemplateColumns: `repeat(${sections.length - 1}, max-content)`,
        }}
      >
        {sections.map((s) => {
          if (s.label === "intro") return null;
          const el = document.getElementById(s.id) as HTMLElement;
          const onClick = () => el.scrollIntoView();
          return (
            <li
              className="nav_list__item"
              role="button"
              key={s.label}
              onClick={onClick}
            >
              {s.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
