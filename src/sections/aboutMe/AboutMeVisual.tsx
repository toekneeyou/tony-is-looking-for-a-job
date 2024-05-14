import uclaLogo from "../../assets/ucla-logo.webp";
import lewagonLogo from "../../assets/lewagon-logo.jpg";
import nielsenLogo from "../../assets/nielsen-logo.svg";
import tiltLogo from "../../assets/tilt-logo.svg";
import { classNames } from "../../helpers/helpers";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";

type AboutMeVisualProps = {};
export default function AboutMeVisual({}: AboutMeVisualProps) {
  const nielsenRef = useRef<HTMLLIElement>(null);
  const tiltRef = useRef<HTMLLIElement>(null);
  const lewagonRef = useRef<HTMLLIElement>(null);
  const uclaRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-1");
            if (
              entry.target.classList.contains("nielsen-visual-item") ||
              entry.target.classList.contains("lewagon-visual-item") ||
              entry.target.classList.contains("ucla-visual-item")
            ) {
              entry.target.classList.remove("translate-x-[5rem]");
              entry.target.classList.add("translate-x-0");
            } else {
              entry.target.classList.remove("-translate-x-[5rem]");
              entry.target.classList.add("translate-x-0");
            }
          } else {
            entry.target.classList.remove("translate-x-0");
            entry.target.classList.add("opacity-0");
            if (
              entry.target.classList.contains("nielsen-visual-item") ||
              entry.target.classList.contains("lewagon-visual-item") ||
              entry.target.classList.contains("ucla-visual-item")
            ) {
              entry.target.classList.add("translate-x-[5rem]");
              entry.target.classList.remove("opacity-1");
            } else {
              entry.target.classList.remove("translate-x-0");
              entry.target.classList.add("-translate-x-[5rem]");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(nielsenRef.current!);
    observer.observe(tiltRef.current!);
    observer.observe(lewagonRef.current!);
    observer.observe(uclaRef.current!);
    observer.observe(buttonRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ul
      role="list"
      className={classNames(
        "w-full",
        "lg:row-start-3 lg:row-end-6 lg:col-start-2 lg:col-end-5",
        ["grid grid-cols-1 gap-[1rem]", "lg:grid-cols-3 lg:grid-rows-3"],
        ["p-1rem", "lg:p-0"]
      )}
    >
      <AboutMeVisualItem
        ref={nielsenRef}
        src={nielsenLogo}
        company="Gracenote, a Nielsen Company"
        title="Sr. Software Engineer"
        date="2020 - Present"
        className={classNames(
          "nielsen-visual-item",
          "bg-gradient-to-br from-[#5030aa] via-[#304e69] to-[#1f2c66]",
          "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
        )}
      />
      <AboutMeVisualItem
        ref={tiltRef}
        src={tiltLogo}
        company="Tilt"
        title="Software Engineer"
        date="2020-2021"
        className={classNames(
          "tilt-visual-item",
          "bg-app-white text-app-black",
          "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3"
        )}
      />
      <AboutMeVisualItem
        ref={lewagonRef}
        src={lewagonLogo}
        company="Le Wagon"
        title="Web Development Program"
        date="2019"
        className={classNames(
          "lewagon-visual-item",
          "bg-[#e71005] delay-200",
          "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4"
        )}
      />
      <AboutMeVisualItem
        ref={uclaRef}
        src={uclaLogo}
        company="UCLA Jules Stein Eye Institute"
        title="Ophthalmic Technician II"
        date="2016 - 2019"
        className={classNames(
          "ucla-visual-item",
          "bg-[#0f7bb6]",
          "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3"
        )}
      />
      <button
        ref={buttonRef}
        className={classNames(
          "centered w-full max-w-text border-2 border-app-white justify-self-center ",
          "lg:aspect-square",
          "lg:row-start-3 lg:row-end-4",
          "lg:transition-[opacity,transform] lg:delay-200 lg:duration-300 lg:will-change[opacity,transform]",
          ["h-[7rem]", "lg:h-auto"],
          ["rounded-3xl", "lg:rounded-none"]
        )}
        onClick={() => {
          window.open("https://linkedin.com/in/tonyyu1129", "_blank");
        }}
      >
        <span className="mr-[0.5rem]">See more on LinkedIn</span>
        <span className="material-symbols-outlined">open_in_new</span>
      </button>
    </ul>
  );
}

type AboutMeVisualItemProps = {
  src: string;
  title: string;
  company: string;
  date: string;
  className: string;
};
const AboutMeVisualItem = forwardRef(function AboutMeVisualItem(
  { src, title, company, date, className }: AboutMeVisualItemProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <li
      ref={ref}
      className={classNames(
        "overflow-hidden group relative w-full max-w-text items-center gap-[0.5rem] justify-self-center",
        "lg:aspect-square",
        "lg:transition-[transform,opacity] lg:ease-in-out lg:duration-300 lg:will-change-[transform,opacity]",
        ["h-[7rem]", "lg:h-auto"],
        ["rounded-3xl", "lg:rounded-none"],
        ["grid grid-cols-[6rem_1fr]", "lg:grid-cols-1"],
        {
          [className]: !!className,
        }
      )}
    >
      <img
        className={classNames(
          "justify-self-center",
          "lg:duration-500 lg:transition-transform lg:group-hover:translate-x-[110%]",
          ["w-[5rem]", "lg:w-[85%]"]
        )}
        src={src}
        alt={`${company}-logo`}
      />
      <div
        className={classNames(
          "flex flex-col",
          "lg:absolute lg:top-0 lg:left-0",
          "lg:w-full lg:h-full lg:centered",
          "lg:transition-transform lg:duration-500 lg:translate-x-[-100%] lg:group-hover:translate-x-0"
        )}
      >
        <span className="font-bold">{title}</span>
        <span className="text-[14px] font-medium">{company}</span>
        <span className="text-[14px] font-medium">{date}</span>
      </div>
    </li>
  );
});
