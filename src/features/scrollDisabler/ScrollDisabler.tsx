import "./scrollDisabler.css";

type ScrollDisablerProps = { isLoading: boolean };
export default function ScrollDisabler({ isLoading }: ScrollDisablerProps) {
  if (!isLoading) return null;

  return <div className="SCROLL_DISABLER" />;
}
