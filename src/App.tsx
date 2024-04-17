import { useEffect, useState } from "react";
import "./App.css";
import Introduction from "./sections/introduction/Introduction";
import Skills from "./sections/skills/Skills";

const APP_ID = "app";
export const INTRODUCTION_SECTION_ID = "introduction-section";
export const SKILLS_SECTION_ID = "skills-section";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const app = document.getElementById(APP_ID);

    if (app) {
      const handleScroll = (e: Event) => {
        if (isLoading) {
          e.preventDefault();
        } else {
        }
      };

      app.addEventListener("scroll", handleScroll, { passive: false });
      setIsLoading(false);

      return () => {
        app.removeEventListener("scroll", handleScroll);
      };
    }
    setIsLoading(false);
  }, [isLoading]);
  return (
    <main id={APP_ID}>
      <Introduction />
      <Skills />
    </main>
  );
}

export default App;
