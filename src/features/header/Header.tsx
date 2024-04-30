import { useEffect, useRef } from "react";
import { HEADER_ID } from "../../constants/id";
import { HEADER_Z_INDEX } from "../../constants/zIndices";
import NavBar from "../navBar/NavBar";
import { SectionDetail } from "../../constants/data";
import "./header.css";

type HeaderProps = {
  currentSection: SectionDetail;
};
export default function Header({ currentSection }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headerEl = headerRef.current as HTMLElement;

    if (currentSection.label === "intro") {
      headerEl.classList.add("HEADER__hide");
    } else {
      headerEl.classList.remove("HEADER__hide");
    }
  }, [currentSection]);

  return (
    <header
      ref={headerRef}
      id={HEADER_ID}
      className="HEADER HEADER__hide"
      style={{ zIndex: HEADER_Z_INDEX }}
    >
      <div className="header_name">
        <span className="josefin_sans_bold">TONY YU</span>
      </div>
      <NavBar currentSection={currentSection} />
    </header>
  );
}
