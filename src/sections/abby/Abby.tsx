import AbbyLogin from "../../assets/abby-login.svg";
import abbyBalanceVideo from "../../assets/abby-balance-video.mp4";
import abbyTransactionVideo from "../../assets/abby-transaction-video.mp4";

import "./abby.css";
import Tabs, { TabProps } from "../../components/tabs/Tabs";
import { useContext, useEffect, useRef, useState } from "react";
import {
  ABBY_CONTENT_SECTION_ID,
  ABBY_HERO_SECTION_ID,
} from "../../constants/id";
import TextContent from "../../components/textContent/TextContent";
import abbyLogo from "../../assets/abby-logo-large.svg";
import Button from "../../components/button/Button";
import { AppContext } from "../../App";
import { combineClasses } from "../../helpers/helpers";

type AbbyProps = {};
type AbbyVideoType = "balances & trends" | "transactions";

export default function Abby({}: AbbyProps) {
  const abbyHeroRef = useRef<HTMLDivElement>(null);
  const abbyContentRef = useRef<HTMLDivElement>(null);
  const { sectionIndex } = useContext(AppContext);

  const [selectedVideo, setSelectedVideo] =
    useState<AbbyVideoType>("balances & trends");
  const videoTabs: TabProps[] = [
    {
      label: "balances & trends",
      onClick: () => setSelectedVideo("balances & trends"),
    },
    {
      label: "transactions",
      onClick: () => setSelectedVideo("transactions"),
    },
  ];

  useEffect(() => {
    const abbyHeroEl = abbyHeroRef.current as HTMLElement;
    if (sectionIndex === 3 || sectionIndex === 4) {
      abbyHeroEl.classList.remove("ABBY_HERO__hide");
      abbyHeroEl.classList.add("ABBY_HERO__show");
    } else {
      abbyHeroEl.classList.remove("ABBY_HERO__show");
      abbyHeroEl.classList.add("ABBY_HERO__hide");
    }
    const abbyContentEl = abbyContentRef.current as HTMLElement;
    if (sectionIndex === 4) {
      abbyContentEl.classList.remove("ABBY_CONTENT__hide");
      abbyContentEl.classList.add("ABBY_CONTENT__show");
    } else {
      abbyContentEl.classList.remove("ABBY_CONTENT__show");
      abbyContentEl.classList.add("ABBY_CONTENT__hide");
    }
  }, [sectionIndex]);

  return (
    <>
      <div ref={abbyHeroRef} id={ABBY_HERO_SECTION_ID} className="ABBY_HERO">
        <div className="abby_hero__logo">
          <img src={abbyLogo} />
        </div>

        <div className="overlay abby_hero__phone">
          <img src={AbbyLogin} alt="A screenshot of ABBY's login screen" />
        </div>
      </div>

      <div
        ref={abbyContentRef}
        id={ABBY_CONTENT_SECTION_ID}
        className="ABBY_CONTENT"
      >
        <div className="abby_content__left">
          <TextContent
            title="Projects: ABBY"
            bodyText="When Mint sunsetted, I decided to build my own app to monitor my finances. The app is still in its MVP state, and there are a ton of features I still want to add to it. Here’s a sneak peak:"
            button={
              <>
                <Button rightIcon="open_in_new">Design - Figma</Button>
                <Button rightIcon="open_in_new">Frontend - React Native</Button>
                <Button rightIcon="open_in_new">Backend - Express</Button>
              </>
            }
          />
        </div>
        <div className="abby_content__right">
          <div className="abby_content__videos">
            <Tabs tabs={videoTabs} initialTab={videoTabs[0]} />
            <div
              className="abby_content__videos__carousel"
              style={{
                width: `${
                  document.querySelector(".abby_video_player")?.clientWidth
                }px`,
                height: `${
                  document.querySelector(".abby_video_player")?.clientHeight
                }px`,
              }}
            >
              <AbbyVideoPlayer
                src={abbyBalanceVideo}
                className={
                  selectedVideo === "balances & trends"
                    ? "abby_video_player__selected"
                    : undefined
                }
              />
              <AbbyVideoPlayer
                src={abbyTransactionVideo}
                className={
                  selectedVideo === "transactions"
                    ? "abby_video_player__selected"
                    : undefined
                }
              />
            </div>
          </div>
          {/* <div className="abby_video_container">
            <Tabs tabs={videoTabs} initialTab={videoTabs[0]} />
            <div style={{ position: "relative" }}>
              <AbbyVideoPlayer
                src={abbyBalanceVideo}
                className={
                  selectedVideo === "balances & trends"
                    ? "abby_video_player__selected"
                    : undefined
                }
              />
              <AbbyVideoPlayer
                src={abbyTransactionVideo}
                className={
                  selectedVideo === "transactions"
                    ? "abby_video_player__selected"
                    : undefined
                }
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

type AbbyVideoPlayerProps = {
  src: string;
  className?: string;
};
function AbbyVideoPlayer({ src, className }: AbbyVideoPlayerProps) {
  return (
    <div className={combineClasses(["abby_video_player", className])}>
      <video src={src} controls />
    </div>
  );
}
