import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ILocationDimension {
  dimension: string;
}

export const LocationDimension = memo(({ dimension }: ILocationDimension) => (
  <p className="location-dimension">{dimension}</p>
));
