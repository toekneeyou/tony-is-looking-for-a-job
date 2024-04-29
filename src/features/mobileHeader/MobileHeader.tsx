import { useContext } from "react";
import IconButton from "../../components/iconButton/IconButton";
import "./mobileHeader.css";
import { AppContext } from "../../App";

export default function MobileHeader() {
  const { setIsSideMenuOpen, isSideMenuOpen } = useContext(AppContext);
  return (
    <div className="MOBILE_HEADER">
      <div className="josefin_sans_bold mobile_header__name">TONY YU</div>
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
