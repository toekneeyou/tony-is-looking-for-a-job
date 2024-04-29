import { useContext } from "react";
import NavBar from "../navBar/NavBar";
import "./navSideMenu.css";
import { AppContext } from "../../App";
import { combineClasses } from "../../helpers/helpers";

export default function NavSideMenu() {
  const { isSideMenuOpen } = useContext(AppContext);

  return (
    <div
      className={combineClasses([
        "NAV_SIDE_MENU",
        isSideMenuOpen ? "NAV_SIDE_MENU__show" : undefined,
      ])}
    >
      <NavBar />
    </div>
  );
}
