import { useEffect } from "react";
import {
  ABBY_SECTION_ID,
  APP_ID,
  INTRODUCTION_SECTION_ID,
  NAV_HEADER_ID,
  NAV_HEADER_Z_INDEX,
  SKILLS_SECTION_ID,
} from "../../App";

import "./navHeader.css";
import Link from "../../components/link/Link";

export default function NavHeader() {
  useEffect(() => {
    const app = document.getElementById(APP_ID);
    const nav = document.querySelector(".nav_header__nav") as HTMLElement;
    const introSection = document.getElementById(INTRODUCTION_SECTION_ID);
    const skillsSection = document.getElementById(SKILLS_SECTION_ID);
    const abbySection = document.getElementById(ABBY_SECTION_ID);
    const links = document.querySelectorAll(`#${NAV_HEADER_ID} nav ul li`);
    const scrollbarTracker = document.querySelector(
      ".nav_header__scrollbar__tracker"
    ) as HTMLElement;

    if (
      app &&
      nav &&
      introSection &&
      skillsSection &&
      abbySection &&
      links &&
      scrollbarTracker
    ) {
      const handleNavBar = () => {
        const navWidth = 400;
        const adjustedNavWidth = 400 + 8;
        const totalHeight = app.clientHeight;
        const introPercentage = introSection.clientHeight / totalHeight;
        const skillsPercentage = skillsSection.clientHeight / totalHeight;
        const abbyPercentage = 1 - introPercentage - skillsPercentage;
        const percentages = [introPercentage, skillsPercentage, abbyPercentage];
        // handle scrollbar segment width
        percentages.forEach((p, i) => {
          const link = links[i] as HTMLElement;
          link.style.width = `${p * navWidth}px`;
        });
        const totalDistance = app.scrollHeight;
        const percentageScrolled = window.scrollY / totalDistance;
        // handle scrollbar tracker
        if (skillsSection.getBoundingClientRect().bottom >= 0) {
          scrollbarTracker.style.left = `${
            percentageScrolled * adjustedNavWidth
          }px`;
        } else {
          const traversedSegmentLength =
            (introPercentage + skillsPercentage) * adjustedNavWidth;
          const remainingSegment = abbyPercentage * adjustedNavWidth;
          const traversablePercentage =
            Math.abs(abbySection.getBoundingClientRect().top) /
            (abbySection.clientHeight - window.innerHeight);
          scrollbarTracker.style.left = `${
            traversedSegmentLength + traversablePercentage * remainingSegment
          }px`;
        }
        // handle selected
        if (abbySection.getBoundingClientRect().top < 1) {
          links[0].classList.remove("selected");
          links[1].classList.remove("selected");
          links[2].classList.add("selected");
        } else if (skillsSection.getBoundingClientRect().top < 1) {
          links[0].classList.remove("selected");
          links[1].classList.add("selected");
          links[2].classList.remove("selected");
        } else {
          links[0].classList.add("selected");
          links[1].classList.remove("selected");
          links[2].classList.remove("selected");
        }
      };
      window.addEventListener("scroll", handleNavBar);
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === app) {
            handleNavBar();
          }
        }
      });
      observer.observe(app);

      return () => {
        window.removeEventListener("scroll", handleNavBar);
        observer.disconnect();
      };
    }
  }, []);
  return (
    <div
      id={NAV_HEADER_ID}
      className="nav_header"
      style={{ zIndex: NAV_HEADER_Z_INDEX }}
    >
      <div className="nav_header__name">Tony Yu</div>
      <nav className="nav_header__nav">
        <ul>
          <li
            className="selected"
            onClick={() => {
              document
                .getElementById(INTRODUCTION_SECTION_ID)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
            <div className="nav_header__scrollbar__segment" />
          </li>
          <li
            onClick={() => {
              document
                .getElementById(SKILLS_SECTION_ID)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
            <div className="nav_header__scrollbar__segment" />
          </li>
          <li
            onClick={() => {
              document
                .getElementById(ABBY_SECTION_ID)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
            <div className="nav_header__scrollbar__segment" />
          </li>
        </ul>
        <div className="nav_header__scrollbar__tracker" />
      </nav>
    </div>
  );
}
