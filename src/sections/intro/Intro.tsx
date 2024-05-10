import { HERO_ID, HERO_H1_TONY_ID, HERO_H1_YU_ID } from "../../constants/id";
import tony from "../../assets/tony-iceland.jpg";
import { classNames } from "../../helpers/helpers";
import Actions from "../../features/Actions";

type IntroProps = {};

export default function Intro({}: IntroProps) {
  return (
    <div
      id={HERO_ID}
      className={classNames(
        "flex",
        ["min-h-svh", "lg:min-h-vh"],
        ["max-h-svh", "lg:max-h-vh"]
      )}
    >
      {/* 
      
      TONY H1 only visible on lg viewports

      */}
      <div
        className={classNames("flex-col justify-between py-5rem", "lg:z-10", [
          "hidden",
          "lg:landscape:flex",
        ])}
      >
        <h1
          id={HERO_H1_TONY_ID}
          className={classNames(
            "josefin-sans font-bold leading-none select-none",
            ["text-[10rem]", "xl:text-[12rem]"]
          )}
          style={{ transform: "translateX(80px)" }}
        >
          TONY
        </h1>
        <div>
          <h3 className="h3 translate-x-[5rem] font-bold text-[1.25rem] select-none opacity-75">
            FRONTEND DEVELOPER
          </h3>
          <div
            className={classNames(
              "flex align-middle mt-1rem translate-x-[5rem]"
            )}
          >
            <div className="divider w-[6rem] my-1rem" />
            <Actions className="ml-1rem" />
          </div>
        </div>
      </div>
      {/*
      
      Visual section of Intro

      */}
      <div
        className={classNames(
          "bottom-0 z-0",
          ["absolute lg:landscape:static"],
          ["top-[var(--mobile-header-height)]", "lg:top-0"]
        )}
      >
        <img
          className="h-full object-cover"
          src={tony}
          alt="Photo of author wearing a red jacket standing in front of a snow-capped mountain"
        />
      </div>
      {/* 
      
      YU H1 heading, only visible on lg viewports
      
      */}
      <div className={classNames("py-5rem", ["hidden", "lg:landscape:flex"])}>
        <h1
          id={HERO_H1_YU_ID}
          className={classNames(
            "josefin-sans font-bold self-end -translate-x-[5rem] leading-none select-none",
            ["text-[10rem]", "xl:text-[12rem]"]
          )}
        >
          YU
        </h1>
      </div>
      {/* 
      
      Mobile text of Intro
      
      */}
      <div
        className={classNames(
          "w-full z-10",
          "flex flex-col justify-end items-center",
          ["py-3rem", "lg:portrait:py-5rem"],
          ["lg:landscape:hidden"]
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
