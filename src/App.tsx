import Intro from "./sections/Intro";
import { APP_ID } from "./constants/id";

import "./index.css";

export default function App() {
  return (
    <main
      id={APP_ID}
      className="h-[var(--100vh)] overflow-y-scroll overflow-x-hidden relative flex-col items-center justify-center"
    >
      <Intro />
    </main>
  );
}
