import { INTRO_SECTION_ID, INTRO_TONY_ID, INTRO_YU_ID } from "../constants/id";
import tony from "../assets/tony-iceland.jpg";
import IconButton from "../components/IconButton";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GithubIcon from "../components/icons/GithubIcon";
import { classNames } from "../helpers/helpers";

type IntroProps = {};

export default function Intro({}: IntroProps) {
  return (
    <div
      id={INTRO_SECTION_ID}
      className="min-h-[var(--100vh)] max-h-[var(--100vh)] flex"
    >
      <div className="hidden xl:flex flex-col justify-between py-[5rem] lg:z-10">
        <h1
          id={INTRO_TONY_ID}
          className={classNames(
            "josefin_sans_bold text-[200px] leading-none select-none"
          )}
          style={{ transform: "translateX(80px)" }}
        >
          TONY
        </h1>
        <div>
          <h2 className="translate-x-[5rem] font-bold text-[24px] select-none">
            Frontend Developer
          </h2>
          <div className="flex translate-x-[5rem] align-middle mt-4">
            <div className="divider w-[6rem] my-[1rem]" />
            <div className="centered space-x-[0.75rem] ml-[1rem]">
              <IconButton
                iconString="mail"
                onClick={() => {
                  window.open("mailto:tonyyu1129@gmail.com", "_blank");
                }}
              />
              <IconButton
                IconEl={LinkedInIcon}
                onClick={() => {
                  window.open("https://linkedin.com/in/tonyyu1129", "_blank");
                }}
              />
              <IconButton
                IconEl={GithubIcon}
                onClick={() => {
                  window.open("https://github.com.com/toekneeyou", "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute xl:static top-[var(--mobile-header-height)] bottom-0 z-0">
        <img
          className="h-full object-cover"
          src={tony}
          alt="Photo of author wearing a red jacket standing in front of a snow-capped mountain"
        />
      </div>
      <div className="hidden xl:flex py-[5rem]">
        <h1
          id={INTRO_YU_ID}
          className={classNames(
            "josefin_sans_bold self-end -translate-x-[5rem] text-[200px] leading-none select-none"
          )}
        >
          YU
        </h1>
      </div>
      {/* mobile */}
      <div className="xl:hidden w-full flex z-10 flex-col justify-end items-center py-[2rem] lg:py-[3rem]">
        <h1 className="josefin_sans_bold leading-none text-[6rem] md:text-[8rem] lg:text-[10rem]">
          TONY
        </h1>
        <h1 className="josefin_sans_bold leading-none text-[6rem] md:text-[8rem] lg:text-[10rem]">
          YU
        </h1>
        <div className="h-[2px] bg-[var(--pink)] shadow-pink-glow w-[50vw] my-[1rem]" />
        <h3 className="font-bold md:text-[1.5rem] lg:text-[2rem]">
          Frontend Developer
        </h3>
      </div>
    </div>
  );
}
