import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ILocationType {
  type: string;
}

export const LocationType = memo(({ type }: ILocationType) => (
  <p className="location-type">{type}</p>
));
