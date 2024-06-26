import { ReactNode } from "react";
import { classNames } from "../helpers/helpers";

type TextWithLinkProps = {
  text: string;
  button?: ReactNode;
  containerClass?: string;
  textClass?: string;
};

export default function TextWithLink({
  text,
  button,
  containerClass = "",
  textClass = "",
}: TextWithLinkProps) {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center",
        ["p-1rem", "lg:p-0"],
        { [containerClass]: !!containerClass }
      )}
    >
      <p
        className={classNames(
          "font-semibold opacity-60",
          ["text-1rem", "xl:text-[1.25rem]"],
          {
            "mb-2rem": !!button,
            [textClass]: !!textClass,
          }
        )}
      >
        {text}
      </p>
      {button}
    </div>
  );
}
