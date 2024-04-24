import { ReactNode, useEffect } from "react";
import {
  ABBY_SECTION_ID,
  ABOUT_ME_SECTION_ID,
  APP_ID,
  INTRODUCTION_SECTION_ID,
  NAV_HEADER_ID,
  NAV_HEADER_Z_INDEX,
  SKILLS_SECTION_ID,
} from "../../App";

import "./navHeader.css";

const NAV_WIDTH = 480;
const COLUMN_GAP = 4;

type NavLink = { label: string; id: string };

export default function NavHeader() {
  const navLinks: NavLink[] = [
    { label: "Intro", id: INTRODUCTION_SECTION_ID },
    { label: "About Me", id: ABOUT_ME_SECTION_ID },
    { label: "Skills", id: SKILLS_SECTION_ID },
    { label: "Projects", id: ABBY_SECTION_ID },
  ];

  // useEffect(() => {
  //   const app = document.getElementById(APP_ID);
  //   const nav = document.querySelector(".nav_header__nav") as HTMLElement;
  //   const introSection = document.getElementById(INTRODUCTION_SECTION_ID);
  //   const aboutMeSection = document.getElementById(ABOUT_ME_SECTION_ID);
  //   const skillsSection = document.getElementById(SKILLS_SECTION_ID);
  //   const abbySection = document.getElementById(ABBY_SECTION_ID);
  //   const links = document.querySelectorAll(`#${NAV_HEADER_ID} nav ul li`);
  //   const scrollbarTracker = document.querySelector(
  //     ".nav_header__scrollbar__tracker"
  //   ) as HTMLElement;

  //   if (
  //     app &&
  //     nav &&
  //     introSection &&
  //     aboutMeSection &&
  //     skillsSection &&
  //     abbySection &&
  //     links &&
  //     scrollbarTracker
  //   ) {
  //     const navItems = navLinks
  //       .map((nl) => {
  //         return { ...nl, el: document.getElementById(nl.id) as HTMLElement };
  //       })
  //       .map((nl) => {
  //         return { ...nl, percentage: nl.el?.clientHeight / app.clientHeight };
  //       });

  //     const handleNavBar = () => {
  //       const adjustedNavWidth = NAV_WIDTH + (navItems.length - 1) * COLUMN_GAP;
  //       // handle scrollbar segment width
  //       navItems.forEach((nl, i) => {
  //         const link = links[i] as HTMLElement;
  //         link.style.width = `${nl.percentage * NAV_WIDTH}px`;
  //       });
  //       const totalDistance = app.scrollHeight;
  //       const percentageScrolled = window.scrollY / totalDistance;
  //       // handle scrollbar tracker
  //       if (skillsSection.getBoundingClientRect().bottom >= 0) {
  //         scrollbarTracker.style.left = `${
  //           percentageScrolled * adjustedNavWidth
  //         }px`;
  //       } else {
  //         const traversedSegmentLength =
  //           (navItems[0].percentage +
  //             navItems[1].percentage +
  //             navItems[2].percentage) *
  //           adjustedNavWidth;
  //         const remainingSegment = navItems[3].percentage * adjustedNavWidth;
  //         const traversablePercentage =
  //           Math.abs(abbySection.getBoundingClientRect().top) /
  //           (abbySection.clientHeight - window.innerHeight);
  //         scrollbarTracker.style.left = `${
  //           traversedSegmentLength + traversablePercentage * remainingSegment
  //         }px`;
  //       }
  //       // handle selected
  //       const [intro, aboutMe, skills, abby] = links;
  //       if (abbySection.getBoundingClientRect().top < 1) {
  //         intro.classList.remove("selected");
  //         aboutMe.classList.remove("selected");
  //         skills.classList.remove("selected");
  //         abby.classList.add("selected");
  //       } else if (skillsSection.getBoundingClientRect().top < 1) {
  //         intro.classList.remove("selected");
  //         aboutMe.classList.remove("selected");
  //         skills.classList.add("selected");
  //         abby.classList.remove("selected");
  //       } else if (aboutMeSection.getBoundingClientRect().top < 1) {
  //         intro.classList.remove("selected");
  //         aboutMe.classList.add("selected");
  //         skills.classList.remove("selected");
  //         abby.classList.remove("selected");
  //       } else {
  //         intro.classList.add("selected");
  //         aboutMe.classList.remove("selected");
  //         skills.classList.remove("selected");
  //         abby.classList.remove("selected");
  //       }
  //     };
  //     window.addEventListener("scroll", handleNavBar);
  //     const observer = new ResizeObserver((entries) => {
  //       for (let entry of entries) {
  //         if (entry.target === app) {
  //           handleNavBar();
  //         }
  //       }
  //     });
  //     observer.observe(app);

  //     return () => {
  //       window.removeEventListener("scroll", handleNavBar);
  //       observer.disconnect();
  //     };
  //   }
  // }, []);
  return (
    <div
      id={NAV_HEADER_ID}
      className="NAV_HEADER"
      style={{ zIndex: NAV_HEADER_Z_INDEX }}
    >
      <div className="josefin_sans_bold nav_header__name">Tony Yu</div>
      {/* <nav className="nav_header__nav_scroll">
        <ul
          style={{
            gridTemplateColumns: `repeat(${navLinks.length}, max-content)`,
            width: NAV_WIDTH,
            columnGap: COLUMN_GAP,
          }}
        >
          {navLinks.map(({ label, id }) => {
            return (
              <NavButton
                key={label}
                onClick={() => {
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {label}
              </NavButton>
            );
          })}
        </ul>
        <div className="nav_header__scrollbar__tracker" />
      </nav> */}
      <nav className="nav_header__nav">
        <ul style={{ gridTemplateColumns: `repeat(${navLinks.length}, 1fr)` }}>
          {navLinks.map(({ label, id }) => {
            return (
              <NavButton
                key={label}
                onClick={() => {
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {label}
              </NavButton>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

type NavButtonProps = {
  onClick: () => void;
  children: ReactNode;
};
function NavButton({ children, onClick }: NavButtonProps) {
  return (
    <li role="button" onClick={onClick}>
      <span>{children}</span>
      {/* <div className="nav_header__scrollbar__segment" /> */}
    </li>
  );
}
