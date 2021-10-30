import * as React from "react";
import { memo } from "react";
import "./index.css";
import loading from "../../images/loading.gif";

export const PagePreloader = memo(() => {
  return (
    <div className="page-preloader">
      <img src={loading} alt="loading" />
    </div>
  );
});
