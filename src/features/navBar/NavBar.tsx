import { useContext, useRef } from "react";
import { sections } from "../../constants/data";
import { combineClasses } from "../../helpers/helpers";
import "./navBar.css";
import { AppContext } from "../../App";

type NavBarProps = {
  className?: string;
};
export default function NavBar({ className }: NavBarProps) {
  const navRef = useRef<HTMLElement>(null);
  const { sectionIndex, isMobile, setIsSideMenuOpen } = useContext(AppContext);

  return (
    <nav ref={navRef} className={combineClasses(["NAV_BAR", className])}>
      <ul
        className={combineClasses(["nav_list"])}
        style={{
          gridTemplateColumns: `repeat(${sections.length - 1}, max-content)`,
        }}
      >
        {sections.map((s) => {
          if (s.label === "intro") return null;
          const el = document.getElementById(s.id) as HTMLElement;
          const onClick = () => {
            el.scrollIntoView();
            if (isMobile) {
              setIsSideMenuOpen(false);
            }
          };
          let isSelected = false;

          switch (s.label) {
            case "about me":
              isSelected = sectionIndex === 1;
              break;
            case "skills":
              isSelected = sectionIndex === 2;
              break;
            case "projects":
              isSelected = sectionIndex === 3 || sectionIndex === 4;
              break;
          }
          return (
            <li
              className={combineClasses([
                "nav_list__item",
                isSelected ? "nav_list__item__selected" : undefined,
              ])}
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
