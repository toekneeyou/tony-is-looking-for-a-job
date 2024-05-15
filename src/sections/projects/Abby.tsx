import { ABBY_ID } from "../../constants/id";
import TextWithLink from "../../components/TextWithLink";
import ButtonWithBar from "../../components/ButtonWithBar";
import { classNames } from "../../helpers/helpers";
import AbbyLogin from "../../assets/abby-login.svg";
import AbbyVideos from "./AbbyVideos";
import { useContext } from "react";
import { AppContext } from "../../App";

type AbbyProps = {};

export default function Abby({}: AbbyProps) {
  const { setLoadingState } = useContext(AppContext);
  return (
    <div
      id={ABBY_ID}
      className={classNames(
        "relative space-y-[2rem]",
        "from-[var(--eggplant)] to-[var(--dark-eggplant)]",
        "lg:space-y-0 lg:grid lg:grid-cols-4 lg:grid-rows-8"
      )}
    >
      <h3
        className={classNames(
          "h3",
          "text-center",
          "lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2 lg:justify-self-center lg:self-end"
        )}
      >
        SPOTLIGHT: ABBY
      </h3>
      <TextWithLink
        containerClass={classNames(
          ["mx-auto", "lg:!mt-1rem"],
          "max-w-text",
          "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-5 lg:self-start"
        )}
        text="When Mint sunsetted, I decided to build my own app to monitor my finances. Users can monitor their balances and manage their transactions to better understand their financial health."
      />
      <img
        className={classNames(
          ["hidden", "lg:block"],
          "lg:max-h-[600px] lg:z-10",
          "lg:row-start-2 lg:row-end-5 lg:col-start-1 lg:col-end-3 lg:justify-self-center lg:self-start"
        )}
        src={AbbyLogin}
        alt="A screenshot of ABBY's login screen"
        onLoad={() => setLoadingState((p) => ({ ...p, projects: false }))}
      />

      {/*

        Videos of ABBY in action

        */}
      <AbbyVideos
        className={classNames([
          "lg:p-0 ",
          "lg:col-start-1 lg:col-end-5 lg:row-start-5 lg:row-end-9 lg:justify-self-center lg:self-center",
        ])}
      />

      {/* 
      
      Links to ABBY repos and design 
      
    */}
      <AbbyLinks
        className={classNames([
          "lg:max-w-full lg:w-full",
          "lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:self-end",
        ])}
      />
    </div>
  );
}

type AbbyLinksProps = {
  className?: string;
};

function AbbyLinks({ className = "" }: AbbyLinksProps) {
  return (
    <div
      className={classNames(
        ["p-1rem space-y-1 max-w-text mx-auto justify-self-center"],
        ["lg:p-0"],
        { [className]: !!className }
      )}
    >
      <ButtonWithBar
        onClick={() => {
          window.open(
            "https://www.figma.com/file/NJuPGZIs74vcuwP5Ty3VLD/Abby-Design-System?type=design&node-id=2-96&mode=design",
            "_blank"
          );
        }}
      >
        <span>Design - Figma</span>
        <span className="material-symbols-outlined">open_in_new</span>
      </ButtonWithBar>
      <ButtonWithBar
        onClick={() => {
          window.open("https://github.com/toekneeyou/abby-ui", "_blank");
        }}
      >
        <span>Frontend - React Native</span>
        <span className="material-symbols-outlined">open_in_new</span>
      </ButtonWithBar>
      <ButtonWithBar
        onClick={() => {
          window.open("https://github.com/toekneeyou/abby-backend", "_blank");
        }}
      >
        <span>Backend - Express</span>
        <span className="material-symbols-outlined">open_in_new</span>
      </ButtonWithBar>
    </div>
  );
}
