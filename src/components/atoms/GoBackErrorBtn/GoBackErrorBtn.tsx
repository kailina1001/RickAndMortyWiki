import React from "react";
import { memo } from "react";
import "./index.css";

export const GoBackErrorBtn = memo(() => {
  function goBack() {
    window.history.back();
  }
  return (
    <button className="selected-error-btn" onClick={goBack}>
      Go back
    </button>
  );
});
