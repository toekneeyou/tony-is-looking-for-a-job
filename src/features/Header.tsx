import { useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { HEADER_ID, HERO_ID } from "../constants/id";
import { classNames } from "../helpers/helpers";

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
    </header>
  );
}
