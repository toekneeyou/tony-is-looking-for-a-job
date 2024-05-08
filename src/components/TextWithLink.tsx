import { ReactNode } from "react";
import { classNames } from "../helpers/helpers";

type TextWithButtonProps = {
  text: string;
  button: ReactNode;
  title: string;
  containerClass?: string;
  h2Class?: string;
  textClass?: string;
};

export default function TextWithButton({
  text,
  button,
  containerClass = "",
  h2Class = "",
  textClass = "",
  title,
}: TextWithButtonProps) {
  return (
    <div
      className={classNames(
        "p-[1rem] flex flex-col justify-center items-center",
        ["xl:p-0"],
        { [containerClass]: !!containerClass }
      )}
    >
      <h2
        className={classNames(
          "josefin_sans_bold leading-none text-[1.25rem] text-center !font-medium mb-[2rem]",
          ["xl:text-[128px]"],
          { [h2Class]: !!h2Class }
        )}
      >
        {title}
      </h2>
      <div
        className={classNames("max-w-[52ch]", ["xl:max-w-[40ch]"], {
          [textClass]: !!textClass,
        })}
      >
        <p className={classNames("mb-[2rem]")}>{text}</p>
        {button}
      </div>
    </div>
  );
}
