import { useRef } from "react";
import { SectionDetail, sections } from "../../constants/data";
import { combineClasses } from "../../helpers/helpers";
import "./navBar.css";
import {
  ABBY_SECTION_ID,
  ABOUT_ME_SECTION_ID,
  SKILLS_SECTION_ID,
} from "../../constants/id";

type NavBarProps = {
  className?: string;
  isMobile?: boolean;
  setIsSideMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  currentSection: SectionDetail;
};
export default function NavBar({
  className,
  isMobile,
  setIsSideMenuOpen,
  currentSection,
}: NavBarProps) {
  const navRef = useRef<HTMLElement>(null);

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
          const onClick = () => {
            const el = document.getElementById(s.id) as HTMLElement;
            el?.scrollIntoView({ behavior: "smooth" });
            if (isMobile) {
              setIsSideMenuOpen?.(false);
            }
          };
          let isSelected = false;

          switch (s.label) {
            case "about me":
              isSelected = currentSection.id === ABOUT_ME_SECTION_ID;
              break;
            case "skills":
              isSelected = currentSection.id === SKILLS_SECTION_ID;
              break;
            case "projects":
              isSelected = currentSection.id === ABBY_SECTION_ID;
              break;
          }
          return (
            <li
              className={combineClasses([
                "nav_list__item",
                isSelected ? "nav_list__item__selected" : undefined,
              ])}
              role="button"
              tabIndex={0}
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
