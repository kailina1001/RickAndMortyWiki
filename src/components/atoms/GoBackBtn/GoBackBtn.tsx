import React from "react";
import { memo } from "react";
import "./index.css";

interface IGoBackBtn {
  onClick: () => void;
}

export const GoBackBtn = memo(({ onClick }: IGoBackBtn) => {
  return (
    <button type="submit" className="selected-btn" onClick={() => onClick()}>
      Go back
    </button>
  );
});

/* export const GoBackBtn = memo(() => {
  function goBack() {
    window.history.back();
  }
  return (
    <button className="selected-btn" onClick={goBack}>
      Go back
    </button>
  );
}); */
