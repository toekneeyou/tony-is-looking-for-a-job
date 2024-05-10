import IconButton from "../components/IconButton";
import { SectionDetail } from "../constants/data";
import { HEADER_ID } from "../constants/id";
import { classNames } from "../helpers/helpers";

type HeaderProps = {
  currentSection: SectionDetail;
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
};

export default function Header({
  currentSection,
  isSideMenuOpen,
  toggleSideMenu,
}: HeaderProps) {
  return (
    <header
      id={HEADER_ID}
      className={classNames(
        [
          "fixed top-0 z-50 flex justify-between items-center w-full bg-app-black",
        ],
        [
          "h-[var(--mobile-header-height)]",
          "md:h-[var(--tablet-header-height)]",
          "lg:h-[var(--header-height)]",
        ],
        ["px-1rem", "md:px-2rem"],
        ["lg:transition-transform lg:duration-300"],
        { "lg:translate-y-[-100%]": currentSection.label === "hero" }
      )}
    >
      <h1
        className={classNames(
          ["josefin-sans font-bold translate-y-[2px]"],
          ["text-1rem", "md:text-[1.25rem]"]
        )}
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
