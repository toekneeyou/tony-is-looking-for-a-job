import { ReactNode } from "react";

import "./quote.css";

type QuoteProps = {
  quote: string | ReactNode;
};

export default function Quote({ quote }: QuoteProps) {
  return (
    <div className="quote_container">
      <div className="quote_container__border_left" />
      <div className="quote_container__text">
        {typeof quote === "string" ? <span>{quote}</span> : quote}
      </div>
    </div>
  );
}
