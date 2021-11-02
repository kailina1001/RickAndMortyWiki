import * as React from "react";
import { memo } from "react";
import "./index.css";
import loading from "../../../images/loading.gif";

export const PageLoader = memo(() => (
  <div className="loader-page-wrapper">
    <img src={loading} />
  </div>
));
