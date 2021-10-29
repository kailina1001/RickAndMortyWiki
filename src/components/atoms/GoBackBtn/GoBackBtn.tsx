import * as React from "react";
import { memo } from "react";
import "./index.css";

export const GoBackBtn = memo(() => {
  function goBack() {
    window.history.back();
  }
  return (
    <button className="selected-btn" onClick={goBack}>
      Go back
    </button>
  );
});
