import { useRef, useState } from "react";
import "./tabs.css";
import { combineClasses } from "../../helpers/helpers";

type TabsProps = {
  tabs: TabProps[];
  initialTab: TabProps;
};
export default function Tabs({ tabs, initialTab = tabs[0] }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<TabProps>(initialTab);
  const tabsRef = useRef<HTMLUListElement>(null);

  return (
    <ul ref={tabsRef} className="tabs">
      {tabs.map((t) => {
        const isSelected = t.label === selectedTab.label;
        return (
          <Tab
            className={isSelected ? "tab__selected" : undefined}
            key={t.label}
            onClick={() => {
              setSelectedTab(t);
              t.onClick();
            }}
            label={t.label}
          />
        );
      })}
    </ul>
  );
}

export type TabProps = {
  label: string;
  onClick: () => void;
  className?: string;
};
function Tab({ label, onClick, className }: TabProps) {
  return (
    <li
      role="button"
      tabIndex={0}
      className={combineClasses(["tab", className])}
    >
      <span onClick={onClick} role="button" className="">
        {label}
      </span>
    </li>
  );
}
