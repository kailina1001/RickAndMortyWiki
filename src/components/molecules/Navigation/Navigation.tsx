import * as React from "react";
import { memo } from "react";
import "./index.css";
import navLogo from "../../../images/nav-logo.svg";

export const Navigation = memo(() => {
  return (
    <nav className="app-nav">
      <div className="logo">
        <a href="#">
          <img src={navLogo} alt="nav-logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#">Main</a>
        </li>
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Episodes</a>
        </li>
      </ul>
    </nav>
  );
});
