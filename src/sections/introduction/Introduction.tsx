import { useEffect } from "react";
import {
  INTRODUCTION_SECTION_ID,
  INTRODUCTION_SECTION_LEFT_ID,
  INTRODUCTION_SECTION_RIGHT_ID,
  INTRODUCTION_SECTION_Z_INDEX,
} from "../../App";
import TonyIceland from "../../assets/tony-iceland.jpg";
import Quote from "../../components/quote/Quote";

import "./introduction.css";
import TextBody from "../../components/textBody/TextBody";

export default function Introduction() {
  useEffect(() => {
    const header = document.querySelector(
      `#${INTRODUCTION_SECTION_RIGHT_ID} h1`
    );
    const quote = document.querySelector(
      `#${INTRODUCTION_SECTION_RIGHT_ID} .quote_container`
    );
    const textBodyBorder = document.querySelector(
      `#${INTRODUCTION_SECTION_RIGHT_ID} .text_body__border`
    ) as HTMLElement;
    const textBodyText = document.querySelector(
      `#${INTRODUCTION_SECTION_RIGHT_ID} .text_body span`
    ) as HTMLElement;
    if (header && quote && textBodyBorder && textBodyText) {
      header.classList.add("fade-in");
      setTimeout(() => {
        quote.classList.add("show");
      }, 500);
      setTimeout(() => {
        textBodyBorder.style.transform = "translateX(0)";
        textBodyBorder.style.opacity = "1";
        textBodyText.style.transform = "translateX(0)";
        textBodyText.style.opacity = "1";
      }, 1000);
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
        <img src={TonyIceland} />
      </div>
      <div
        id={INTRODUCTION_SECTION_RIGHT_ID}
        className="introduction_section__right"
      >
        <div className="introduction_section__text">
          <div style={{ overflow: "hidden" }}>
            <h1 className="fade_in">Hi, I&apos;m Tony</h1>
          </div>

          <Quote quote="Frontend Developer" />

          <TextBody
            showBorder
            show={false}
            text="I have over 4 years of experience building user interfaces with
              React, a JavaScript library."
          />
        </div>
      </div>
    </section>
  );
}
