import AbbyLogin from "../../assets/abby-login.svg";
import abbyBalanceVideo from "../../assets/abby-balance-video.mp4";
import abbyTransactionVideo from "../../assets/abby-transaction-video.mp4";

import "./abby.css";
import Tabs, { TabProps } from "../../components/tabs/Tabs";
import { useEffect, useRef, useState } from "react";
import {
  ABBY_SECTION_FEATURES_ID,
  ABBY_SECTION_HERO_ID,
  ABBY_SECTION_ID,
} from "../../constants/id";
import TextContent from "../../components/textContent/TextContent";
import abbyLogo from "../../assets/abby-logo-large.svg";
import Button from "../../components/button/Button";
import { combineClasses } from "../../helpers/helpers";

type AbbyProps = { isMobile: boolean };
type AbbyVideoType = "balances & trends" | "transactions";

export default function Abby({ isMobile }: AbbyProps) {
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

  return (
    <section id={ABBY_SECTION_ID} className="ABBY">
      <div className="abby__description">
        <TextContent
          title="PROJECTS: ABBY"
          bodyText="When Mint sunsetted, I decided to build my own app to monitor my finances. The app is still in its MVP state, and there are a ton of features I still want to add to it. Here’s a sneak peak:"
        />
      </div>
      <div id={ABBY_SECTION_HERO_ID} className="abby__hero">
        <div className="abby__hero__logo">
          <img src={abbyLogo} />
        </div>

        <div className="overlay abby__hero__phone">
          <img src={AbbyLogin} alt="A screenshot of ABBY's login screen" />
        </div>
      </div>
      {isMobile ? (
        <div id={ABBY_SECTION_FEATURES_ID} className="abby__features__mobile">
          <TextContent
            title="Videos"
            button={
              <>
                <Button
                  onClick={() => {
                    const videoElement = document.querySelector(
                      ".abby_balance_video"
                    ) as HTMLVideoElement;
                    videoElement.play();
                  }}
                  rightIcon="play_arrow"
                >
                  Balances & Trends
                </Button>
                <Button
                  onClick={() => {
                    const videoElement = document.querySelector(
                      ".abby_transaction_video"
                    ) as HTMLVideoElement;
                    videoElement.play();
                  }}
                  rightIcon="play_arrow"
                >
                  Transactions
                </Button>
              </>
            }
          />
          <TextContent
            title="Links"
            button={
              <>
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.figma.com/file/NJuPGZIs74vcuwP5Ty3VLD/Abby-Design-System?type=design&node-id=2-96&mode=design",
                      "_blank"
                    );
                  }}
                  rightIcon="open_in_new"
                >
                  Design - Figma
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://github.com/toekneeyou/abby-ui",
                      "_blank"
                    );
                  }}
                  rightIcon="open_in_new"
                >
                  Frontend - React Native
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://github.com/toekneeyou/abby-backend",
                      "_blank"
                    );
                  }}
                  rightIcon="open_in_new"
                >
                  Backend - Express
                </Button>
              </>
            }
          />
          <div
            style={{
              position: "absolute",
              transform: `translate(200%)`,
              opacity: 0,
            }}
          >
            <AbbyVideoPlayer
              src={abbyBalanceVideo}
              isSelected={selectedVideo === "balances & trends"}
              videoClassName="abby_balance_video"
            />
            <AbbyVideoPlayer
              src={abbyTransactionVideo}
              isSelected={selectedVideo === "transactions"}
              videoClassName="abby_transaction_video"
            />
          </div>
        </div>
      ) : (
        <div id={ABBY_SECTION_FEATURES_ID} className="abby__features">
          <div className="abby__features__left">
            <TextContent
              title="Projects: ABBY"
              bodyText="When Mint sunsetted, I decided to build my own app to monitor my finances. The app is still in its MVP state, and there are a ton of features I still want to add to it. Here’s a sneak peak:"
              button={
                <>
                  <Button
                    onClick={() => {
                      window.open(
                        "https://www.figma.com/file/NJuPGZIs74vcuwP5Ty3VLD/Abby-Design-System?type=design&node-id=2-96&mode=design",
                        "_blank"
                      );
                    }}
                    rightIcon="open_in_new"
                  >
                    Design - Figma
                  </Button>
                  <Button
                    onClick={() => {
                      window.open(
                        "https://github.com/toekneeyou/abby-ui",
                        "_blank"
                      );
                    }}
                    rightIcon="open_in_new"
                  >
                    Frontend - React Native
                  </Button>
                  <Button
                    onClick={() => {
                      window.open(
                        "https://github.com/toekneeyou/abby-backend",
                        "_blank"
                      );
                    }}
                    rightIcon="open_in_new"
                  >
                    Backend - Express
                  </Button>
                </>
              }
            />
          </div>
          <div className="abby__features__right">
            <div className="abby__features__videos">
              <Tabs tabs={videoTabs} initialTab={videoTabs[0]} />
              <div
                className="abby__features__videos__carousel"
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
                  isSelected={selectedVideo === "balances & trends"}
                  videoClassName="abby_balance_video"
                />
                <AbbyVideoPlayer
                  src={abbyTransactionVideo}
                  isSelected={selectedVideo === "transactions"}
                  videoClassName="abby_transaction_video"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

type AbbyVideoPlayerProps = {
  src: string;
  isSelected: boolean;
  videoClassName: string;
};
function AbbyVideoPlayer({
  src,
  isSelected,
  videoClassName,
}: AbbyVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const videoEl = videoRef.current as HTMLVideoElement;
    if (!isSelected) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  }, [isSelected]);

  return (
    <div
      className={combineClasses([
        "abby_video_player",
        isSelected ? "abby_video_player__selected" : undefined,
      ])}
    >
      <video className={videoClassName} ref={videoRef} src={src} controls />
    </div>
  );
}
