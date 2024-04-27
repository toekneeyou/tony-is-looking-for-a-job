import { useEffect, useRef, useState } from "react";
import "./tabs.css";
import { combineClasses } from "../../helpers/helpers";

type TabsProps = {
  tabs: TabProps[];
  initialTab: TabProps;
};
export default function Tabs({ tabs, initialTab = tabs[0] }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<TabProps>(initialTab);
  const tabsRef = useRef<HTMLUListElement>(null);
  // const underlineRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (tabsRef.current && underlineRef.current) {
  //     const tabsEl = tabsRef.current;
  //     const underlineEl = underlineRef.current;
  //     const observer = new ResizeObserver((entries) => {
  //       for (let entry of entries) {
  //         if (entry.target === tabsEl) {
  //           underlineEl.style.width = `${tabsEl.clientWidth / tabs.length}px`;
  //         }
  //       }
  //     });

  //     observer.observe(tabsEl);

  //     return () => {
  //       observer.disconnect();
  //     };
  //   }
  // }, [tabs]);

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
      {/* <div
        ref={underlineRef}
        className="tabs__selected_underline"
        style={{
          transform: `translate(${
            tabs.findIndex((t) => selectedTab.label === t.label) * 100
          }%)`,
        }}
      /> */}
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
    <li className={combineClasses(["tab", className])}>
      <span onClick={onClick} role="button" className="">
        {label}
      </span>
    </li>
  );
}
