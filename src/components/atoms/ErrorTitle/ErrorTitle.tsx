import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IErrorTitle {
  title: string;
}

export const ErrorTitle = memo(({ title }: IErrorTitle) => (
  <h2 className="error-title">{title}</h2>
));
