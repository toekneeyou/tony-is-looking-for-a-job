import { useContext, useEffect, useRef } from "react";
import { HEADER_ID } from "../../constants/id";
import { HEADER_Z_INDEX } from "../../constants/zIndices";
import NavBar from "../navBar/NavBar";
import { AppContext } from "../../App";
import "./header.css";

type HeaderProps = {};
export default function Header({}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const { sectionIndex } = useContext(AppContext);

  useEffect(() => {
    const headerEl = headerRef.current as HTMLElement;

    if (sectionIndex === 0) {
      headerEl.classList.add("HEADER__hide");
      headerEl.classList.remove("HEADER__show");
    } else {
      headerEl.classList.remove("HEADER__hide");
      headerEl.classList.add("HEADER__show");
    }
  }, [sectionIndex]);

  return (
    <header
      ref={headerRef}
      id={HEADER_ID}
      className="HEADER"
      style={{ zIndex: HEADER_Z_INDEX }}
    >
      <div className="header_name">
        <span className="josefin_sans_bold">TONY YU</span>
      </div>
      <NavBar />
    </header>
  );
}
