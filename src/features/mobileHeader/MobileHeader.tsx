import { useRef } from "react";
import IconButton from "../../components/iconButton/IconButton";
import "./mobileHeader.css";

type MobileHeaderProps = {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileHeader({
  isSideMenuOpen,
  setIsSideMenuOpen,
}: MobileHeaderProps) {
  const nameRef = useRef<HTMLDivElement>(null);

  return (
    <div className="MOBILE_HEADER">
      <div ref={nameRef} className="josefin_sans_bold mobile_header__name">
        TONY YU
      </div>
      <IconButton
        onClick={() => {
          setIsSideMenuOpen((p) => !p);
        }}
        label="Menu"
        iconString={isSideMenuOpen ? "close" : "menu"}
      />
    </div>
  );
}
