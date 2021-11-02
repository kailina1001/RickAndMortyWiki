import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IPagesBtn {
  title: string;
  onClickPage?: () => void;
  btnClassName: string;
}

export const PagesBtn = memo(
  ({ title, onClickPage, btnClassName }: IPagesBtn) => {
    return (
      <button
        className={`all-pages-btn active ${btnClassName}`}
        onClick={onClickPage}
        /* {...btnClassName} */
      >
        {title}
      </button>
    );
  }
);
