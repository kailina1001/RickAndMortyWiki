import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IDescriptionTitle {
  title: string;
}

export const DescriptionTitle = memo(({ title }: IDescriptionTitle) => (
  <h3 className="description-title">{title}</h3>
));
