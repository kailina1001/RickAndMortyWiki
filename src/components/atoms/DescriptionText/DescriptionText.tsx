import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IDescriptionText {
  text: string;
}

export const DescriptionText = memo(({ text }: IDescriptionText) => (
  <p className="description-text">{text}</p>
));
