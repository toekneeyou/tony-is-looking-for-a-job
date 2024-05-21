import ButtonWithBar from "../components/ButtonWithBar";
import { sections } from "../constants/data";
import { classNames } from "../helpers/helpers";
import Actions from "./Actions";
import { useSectionContext } from "../contexts/SectionContext";
import { useSideMenuContext } from "../contexts/SideMenuContext";

type SideMenuProps = {};

export default function SideMenu({}: SideMenuProps) {
  const { currentSection } = useSectionContext();
  const { isSideMenuOpen, toggleSideMenu } = useSideMenuContext();

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 h-svh w-full bg-app-black z-40",
        "flex flex-col justify-center items-end",
        "transition-transform duration-500",
        {
          "translate-x-full": !isSideMenuOpen,
          "translate-x-0": isSideMenuOpen,
        },
        ["lg:hidden"]
      )}
    >
      <nav className="p-5rem w-[25rem]" aria-label="Sections on this page">
        <ul className="space-y-3">
          {sections.map((s) => {
            if (s.label === "hero") return null;

            const onClick = () => {
              const el = document.getElementById(s.id)!;
              el.scrollIntoView({ behavior: "smooth" });
              toggleSideMenu();
            };

            return (
              <li key={s.label} aria-current={s.label === currentSection.label}>
                <ButtonWithBar onClick={onClick}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => e.preventDefault()}
                    className="font-semibold"
                  >
                    {s.label}
                  </a>
                </ButtonWithBar>
              </li>
            );
          })}
        </ul>
      </nav>
      <Actions className="pr-5rem" />
    </div>
  );
}
