import "./index.css";

import Intro from "./sections/Intro";
import AboutMe from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import { APP_ID } from "./constants/id";

export default function App() {
  return (
    <main
      id={APP_ID}
      className="h-[var(--100vh)] overflow-y-scroll overflow-x-hidden relative flex-col items-center justify-center"
    >
      <Intro />
      <AboutMe />
      <Skills />
    </main>
  );
}
