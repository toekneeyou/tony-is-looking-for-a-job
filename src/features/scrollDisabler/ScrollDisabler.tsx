import { useContext } from "react";
import { SCROLL_DISABLER_Z_INDEX } from "../../constants/zIndices";
import { AppContext } from "../../App";
import "./scrollDisabler.css";

type ScrollDisablerProps = {};
export default function ScrollDisabler({}: ScrollDisablerProps) {
  const { isLoading } = useContext(AppContext);

  if (!isLoading) return null;

  return (
    <div
      className="SCROLL_DISABLER"
      style={{ zIndex: SCROLL_DISABLER_Z_INDEX }}
    />
  );
}
