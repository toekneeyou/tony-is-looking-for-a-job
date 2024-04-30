import NavBar from "../navBar/NavBar";
import { combineClasses } from "../../helpers/helpers";
import { SectionDetail } from "../../constants/data";
import Actions from "../actions/Actions";
import "./navSideMenu.css";

type NavSideMenuProps = {
  isSideMenuOpen: boolean;
  isMobile: boolean;
  currentSection: SectionDetail;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavSideMenu({
  isSideMenuOpen,
  isMobile,
  currentSection,
  setIsSideMenuOpen,
}: NavSideMenuProps) {
  return (
    <div
      className={combineClasses([
        "NAV_SIDE_MENU",
        isSideMenuOpen ? "NAV_SIDE_MENU__show" : undefined,
      ])}
    >
      <NavBar
        isMobile={isMobile}
        setIsSideMenuOpen={setIsSideMenuOpen}
        currentSection={currentSection}
      />
      <Actions />
    </div>
  );
}
