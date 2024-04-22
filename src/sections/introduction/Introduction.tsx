import {
  INTRODUCTION_SECTION_ID,
  INTRODUCTION_SECTION_LEFT_ID,
  INTRODUCTION_SECTION_RIGHT_ID,
  INTRODUCTION_SECTION_Z_INDEX,
} from "../../App";
import TonyIceland from "../../assets/tony-iceland.jpg";
import TonyIntro from "../../features/tonyIntro/TonyIntro";

import "./introduction.css";
import { useEffect } from "react";

export default function Introduction() {
  useEffect(() => {
    const introductionLeft = document.querySelector(
      ".introduction_section__left"
    );
    const tony = document.querySelector(".tony_intro");

    if (introductionLeft && tony) {
      setTimeout(() => {
        introductionLeft.classList.add("introduction_section__left__show");
      }, 250);
      setTimeout(() => {
        tony.classList.add("tony_intro__show");
      }, 900);
    }
  }, []);

  return (
    <section
      id={INTRODUCTION_SECTION_ID}
      className="introduction_section"
      style={{ zIndex: INTRODUCTION_SECTION_Z_INDEX }}
    >
      <div
        id={INTRODUCTION_SECTION_LEFT_ID}
        className="introduction_section__left"
      >
        <img src={TonyIceland} className="introduction_section__picture" />
        <div className="introduction_section__left__overlay" />
      </div>
      <div
        id={INTRODUCTION_SECTION_RIGHT_ID}
        className="introduction_section__right"
      >
        <TonyIntro animate />
      </div>
    </section>
  );
}
