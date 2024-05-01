import { useEffect, useState } from "react";

export default function useViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === document.documentElement) {
          document.documentElement.style.setProperty(
            "--vh",
            `${window.innerHeight * 0.01}px`
          );
          document.documentElement.style.setProperty(
            "--vw",
            `${window.innerWidth * 0.01}px`
          );

          setIsMobile(window.innerWidth <= 768);

          if (window.innerWidth >= 1440) {
            document.documentElement.style.setProperty("--padding", "5rem");
          } else if (window.innerWidth >= 1025) {
            document.documentElement.style.setProperty("--padding", "4rem");
          } else if (window.innerWidth >= 769) {
            document.documentElement.style.setProperty("--padding", "3rem");
          } else if (window.innerWidth >= 426) {
            document.documentElement.style.setProperty("--padding", "2rem");
          } else {
            document.documentElement.style.setProperty("--padding", "1rem");
          }
        }
      });
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isMobile };
}
