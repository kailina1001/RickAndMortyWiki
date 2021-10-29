import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IPagesBtn {
  title: string;
  onClickPage?: () => void;
}

export const PagesBtn = memo(({ title, onClickPage }: IPagesBtn) => {
  return (
    <button className="all-pages-btn" onClick={onClickPage}>
      {title}
    </button>
  );
});
