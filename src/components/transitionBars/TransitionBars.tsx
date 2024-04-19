import "./transition-bars.css";

type TransitionBarsProps = {
  color?: string;
  rotate?: boolean;
};

export default function TransitionBars({
  color = "#604956",
  rotate = false,
}: TransitionBarsProps) {
  return (
    <div
      className={"transition_bars"}
      style={{ transform: `rotate(${rotate ? 180 : 0}deg)` }}
    >
      <div className={"bar_one"} style={{ backgroundColor: color }} />
      <div className={"bar_two"} style={{ backgroundColor: color }} />
      <div className={"bar_three"} style={{ backgroundColor: color }} />
      <div className={"bar_four"} style={{ backgroundColor: color }} />
    </div>
  );
}
