import { useContext, useEffect, useRef } from "react";
import IconButton from "../../components/iconButton/IconButton";
import "./mobileHeader.css";
import { AppContext } from "../../App";

export default function MobileHeader() {
  const nameRef = useRef<HTMLDivElement>(null);
  const { setIsSideMenuOpen, isSideMenuOpen, sectionIndex } =
    useContext(AppContext);

  useEffect(() => {
    const nameEl = nameRef.current as HTMLDivElement;
    if (sectionIndex === 0) {
      nameEl.classList.remove("mobile_header__name__show");
    } else {
      nameEl.classList.add("mobile_header__name__show");
    }
  }, [sectionIndex]);

  return (
    <div className="MOBILE_HEADER">
      <div ref={nameRef} className="josefin_sans_bold mobile_header__name">
        TONY YU
      </div>
      <IconButton
        onClick={() => {
          setIsSideMenuOpen((p) => {
            return !p;
          });
        }}
        label="Menu"
        iconString={isSideMenuOpen ? "close" : "near_me"}
      />
    </div>
  );
}
