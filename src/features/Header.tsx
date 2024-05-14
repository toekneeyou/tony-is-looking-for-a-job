import { useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { APP_ID, HEADER_ID, HERO_ID } from "../constants/id";
import { classNames } from "../helpers/helpers";
import { sections } from "../constants/data";

type HeaderProps = {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
};

export default function Header({
  isSideMenuOpen,
  toggleSideMenu,
}: HeaderProps) {
  const [hideMenu, setHideMenu] = useState(true);

  useEffect(() => {
    const hero = document.getElementById(HERO_ID)!;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setHideMenu(entry.isIntersecting);
      });
    });
    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  });
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
      <h1
        className={classNames("josefin-sans font-bold translate-y-[2px]", [
          "text-1rem",
          "md:text-[1.25rem]",
        ])}
      >
        TONY YU
      </h1>
      <IconButton
        onClick={toggleSideMenu}
        className={classNames(["lg:hidden"])}
        iconString={isSideMenuOpen ? "close" : "menu"}
      />
      <nav className={classNames(["hidden", "lg:flex"], "lg:space-x-[1rem]")}>
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
            );
          }
        })}
      </nav>
    </header>
  );
}
