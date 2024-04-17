import { INTRODUCTION_SECTION_ID } from "../../App";
import TonyIceland from "../../assets/tony-iceland.jpg";
import Quote from "../../components/quote/Quote";

import "./introduction.css";

export default function Introduction() {
  return (
    <section id={INTRODUCTION_SECTION_ID} className="introduction_section">
      <div className="introduction_section__left">
        <img src={TonyIceland} />
      </div>
      <div className="introduction_section__right">
        <div className="introduction_section__text">
          <h1>Hi, I'm Tony</h1>
          <Quote quote="a Frontend Developer" />
        </div>
      </div>
    </section>
  );
}
