import React from "react";
import { memo } from "react";
import "./index.css";

export const GoBackBtnError = memo(() => {
  function goBack() {
    window.history.back();
  }
  return (
    <button className="selected-btn-error" onClick={goBack}>
      Go back
    </button>
  );
});
