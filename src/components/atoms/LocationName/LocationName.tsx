import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ILocationName {
  name: string;
}

export const LocationName = memo(({ name }: ILocationName) => (
  <p className="location-name">{name}</p>
));
