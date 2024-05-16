import { HERO_ID } from "../../constants/id";
import tony from "../../assets/tony-iceland.jpg";
import { classNames } from "../../helpers/helpers";
import Actions from "../../features/Actions";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../App";

type HeroProps = {};

export default function Hero({}: HeroProps) {
  const { isLoading, setLoadingState } = useContext(AppContext);
  const tonyRef = useRef<HTMLHeadingElement>(null);
  const yuRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        overlayRef.current!.classList.add("lg:translate-y-full");

        tonyRef.current!.classList.remove("lg:opacity-0");
        tonyRef.current!.classList.add("lg:opacity-100");
        tonyRef.current!.classList.add("lg:translate-x-[5rem]");

        yuRef.current!.classList.remove("lg:opacity-0");
        yuRef.current!.classList.add("lg:opacity-100");
        yuRef.current!.classList.add("lg:-translate-x-[5rem]");

        titleRef.current!.classList.remove("lg:opacity-0");
        titleRef.current!.classList.add("lg:opacity-100");
      }, 500);
    }
  }, [isLoading]);

  return (
    <div
      id={HERO_ID}
      className={classNames(
        "flex overflow-hidden relative",
        ["min-h-svh", "lg:min-h-vh"],
        ["max-h-svh", "lg:max-h-vh"]
      )}
    >
      <div
        ref={overlayRef}
        className={classNames(
          ["hidden", "lg:landscape:block", "xl:block"],
          "absolute top-0 left-0 w-full h-full bg-app-black z-10",
          "transition-transform will-change-transform duration-[700ms] ease"
        )}
      />
      {/* 
      
      TONY H1 only visible on lg viewports

      */}
      <div
        className={classNames("flex-col justify-between py-5rem", "lg:z-20", [
          "hidden",
          "lg:landscape:flex",
          "xl:flex",
        ])}
      >
        <h1
          ref={tonyRef}
          className={classNames(
            "josefin-sans font-bold leading-none select-none",
            "lg:transition-[transform,opacity] lg:will-change-[transform,opacity] lg:duration-500 lg:opacity-0 lg:delay-[700ms]",
            ["text-[10rem]", "lg:text-[11rem]", "xl:text-[12rem]"]
          )}
          aria-label="Tony Yu"
        >
          TONY
        </h1>
        <div
          ref={titleRef}
          className="lg:transition-opacity lg:will-change-[opacity] lg:opacity-0 lg:duration-500 lg:delay-[1000ms]"
        >
          <h3 className="h3 translate-x-[5rem] font-bold text-[1.25rem] select-none opacity-75">
            FRONTEND DEVELOPER
          </h3>
          <div
            className={classNames(
              "flex align-middle mt-1rem translate-x-[5rem]"
            )}
          >
            <div aria-hidden="true" className="divider w-[6rem] my-1rem" />
            <Actions className="ml-1rem" />
          </div>
        </div>
      </div>
      {/*
      
      Visual section of Hero

      */}
      <div
        className={classNames(
          "bottom-0 z-0",
          ["absolute", "lg:landscape:static", "xl:static"],
          ["top-[var(--mobile-header-height)]", "lg:top-0"]
        )}
      >
        <img
          className="h-full object-cover"
          src={tony}
          alt="Author wearing a red jacket standing in front of a snow-capped mountain"
          onLoad={() => setLoadingState((p) => ({ ...p, hero: false }))}
        />
      </div>
      {/* 
      
      YU H1 heading, only visible on lg viewports
      
      */}
      <div
        className={classNames("py-5rem", "lg:z-20", [
          "hidden",
          "lg:landscape:flex",
          "xl:flex",
        ])}
      >
        <h1
          aria-hidden="true"
          ref={yuRef}
          className={classNames(
            "josefin-sans font-bold self-end leading-none select-none",
            "lg:transition-[transform,opacity] lg:will-change-[transform,opacity] lg:duration-500 lg:opacity-0 lg:delay-[800ms]",
            ["text-[10rem]", "xl:text-[12rem]"]
          )}
        >
          YU
        </h1>
      </div>
      {/* 
      
      Mobile text of Hero
      
      */}
      <div
        className={classNames(
          "w-full z-10",
          "flex flex-col justify-end items-center",
          ["py-3rem", "lg:portrait:py-5rem"],
          ["lg:landscape:hidden", "xl:hidden"]
        )}
      >
        <h1
          className={classNames("josefin-sans font-bold leading-none", [
            "text-[6rem]",
            "md:text-[8rem]",
            "lg:text-[10rem]",
          ])}
        >
          TONY
        </h1>
        <h1
          className={classNames("josefin-sans font-bold leading-none", [
            "text-[6rem]",
            "md:text-[8rem]",
            "lg:text-[10rem]",
          ])}
        >
          YU
        </h1>
        <div className="h-[2px] bg-[var(--pink)] shadow-pink-glow w-[50vw] my-1rem" />
        <h3
          className={classNames("font-bold", [
            "md:text-[1.5rem]",
            "lg:text-2rem",
          ])}
        >
          Frontend Developer
        </h3>
      </div>
    </div>
  );
}
