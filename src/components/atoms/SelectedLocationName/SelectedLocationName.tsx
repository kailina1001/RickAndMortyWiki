import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ISelectedLocationName {
  name: string;
}

export const SelectedLocationName = memo(({ name }: ISelectedLocationName) => (
  <h4 className="selected-location-name">{name}</h4>
));
