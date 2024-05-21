import { SyntheticEvent, useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { APP_ID, HEADER_ID, HERO_ID } from "../constants/id";
import { classNames } from "../helpers/helpers";
import { sections } from "../constants/data";
import { useSectionContext } from "../contexts/SectionContext";
import { useSideMenuContext } from "../contexts/SideMenuContext";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const [hideMenu, setHideMenu] = useState(true);
  const { currentSection } = useSectionContext();
  const { isSideMenuOpen, toggleSideMenu } = useSideMenuContext();

  useEffect(() => {
    if (currentSection.label === "hero") {
      setHideMenu(true);
    } else {
      setHideMenu(false);
    }
  }, [currentSection]);

  // scroll to hero section while preventing default of anchor element
  const scrollToHero = (event: SyntheticEvent) => {
    event.preventDefault();
    document.getElementById(HERO_ID)!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id={HEADER_ID}
      className={classNames(
        "fixed top-0 z-50 flex justify-between items-center w-full bg-app-black",
        "lg:transition-transform lg:duration-300 lg:will-change-transform",
        [
          "h-[var(--mobile-header-height)]",
          "md:h-[var(--tablet-header-height)]",
          "lg:h-[var(--header-height)]",
        ],
        ["px-1rem", "md:px-2rem"],
        {
          "lg:-translate-y-[100%]": hideMenu,
        }
      )}
    >
      {/* TONY YU on top left corner */}
      <h1
        className={classNames("josefin-sans font-bold translate-y-[2px]", [
          "text-1rem",
          "md:text-[1.25rem]",
        ])}
      >
        <a href={`#${HERO_ID}`} onClick={scrollToHero}>
          TONY YU
        </a>
      </h1>
      {/* menu button visible on < lg viewports*/}
      <IconButton
        onClick={toggleSideMenu}
        className={classNames(["lg:hidden"])}
        iconString={isSideMenuOpen ? "close" : "menu"}
      />
      {/* site navigation visible on >= lg viewports */}
      <nav
        className={classNames(["hidden", "lg:flex"])}
        aria-label="Sections on this page"
      >
        <ul className="lg:flex lg:space-x-[1rem]">
          {sections.map((s) => {
            if (s.label !== "hero") {
              const onClick = (e: React.MouseEvent) => {
                e.preventDefault();
                const app = document.getElementById(APP_ID)!;
                const el = document.getElementById(s.id)!;
                const top =
                  el.getBoundingClientRect().top +
                  app.scrollTop +
                  app.getBoundingClientRect().top -
                  100;
                app.scrollTo({ top, behavior: "smooth" });
              };

              return (
                <li
                  key={s.label}
                  aria-current={s.label === currentSection.label}
                >
                  <a
                    className={classNames(
                      "font-semibold",
                      "transition-[transform,drop-shadow] will-change-[transform,drop-shadow]",
                      "hover:drop-shadow-pink-glow hover:translate-y-[4px]"
                    )}
                    href={`#${s.id}`}
                    onClick={onClick}
                  >
                    {s.label}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
}
