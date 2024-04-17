import { ReactNode } from "react";

import "./quote.css";

type QuoteProps = {
  quote: string | ReactNode;
};

export default function Quote({ quote }: QuoteProps) {
  return (
    <div className="quote">
      {typeof quote === "string" ? <span>{quote}</span> : quote}
    </div>
  );
}
