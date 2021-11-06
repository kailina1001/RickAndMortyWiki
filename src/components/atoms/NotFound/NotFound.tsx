import * as React from "react";
import { memo } from "react";
import "./index.css";
import notFoundPic from "../../../images/notfound.gif";

export const NotFound = memo(() => {
  return (
    <div className="not-found-block">
      <img className="not-found-pic" src={notFoundPic} alt="notFound" />
      <p className="not-found-text">NOT FOUND</p>
    </div>
  );
});
